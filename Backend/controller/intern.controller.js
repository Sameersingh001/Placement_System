// import Intern from "../model/internSchema.js";
import Intern from "../model/internSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * ✅ Utility: Generate JWT Token
 */
const generateToken = (id, role = "intern") => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * 📝 Register Intern
 */
export const registerIntern = async (req, res) => {
  try {
    const {
      uniqueId,
      name,
      email,
      phone,
      password,
      college,
      course,
      yearOfStudy,
      domain,
      skills,
    } = req.body;

    // 1️⃣ Validate required fields
    if (!name || !email || !password || !college || !course) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    // 2️⃣ Check if email exists
    const existing = await Intern.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create new intern
    const intern = await Intern.create({
      uniqueId,
      name,
      email,
      phone,
      password: hashedPassword,
      college,
      course,
      yearOfStudy,
      domain,
      skills,
    });

    // 5️⃣ Generate token
    const token = generateToken(intern._id);

    res.status(201).json({
      success: true,
      message: "Intern registered successfully.",
      intern: {
        _id: intern._id,
        name: intern.name,
        email: intern.email,
        role: "intern",
      },
      token,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

/**
 * 🔐 Login Intern
 */
export const loginIntern = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check for intern
    const intern = await Intern.findOne({ email });
    if (!intern) {
      return res.status(404).json({ message: "Invalid email or password." });
    }

    // 2️⃣ Match password
    const isMatch = await bcrypt.compare(password, intern.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // 3️⃣ Generate token
    const token = generateToken(intern._id);

    // 4️⃣ Return response
    res.status(200).json({
      success: true,
      message: "Login successful.",
      intern: {
        _id: intern._id,
        name: intern.name,
        email: intern.email,
        planType: intern.planType,
      },
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
};

/**
 * 👤 Get Logged-in Intern Profile
 */
export const getProfile = async (req, res) => {
  try {
    const intern = await Intern.findById(req.user.id).select("-password");
    if (!intern) return res.status(404).json({ message: "Intern not found." });
    res.json(intern);
  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ message: "Server error fetching profile." });
  }
};

/**
 * 🧾 Update Profile (Secure)
 */
export const updateProfile = async (req, res) => {
  try {
    const allowedUpdates = [
      "phone", "skills", "resumeUrl", "linkedinUrl", "githubUrl",
      "college", "course", "domain", "yearOfStudy"
    ];
    const updates = {};

    for (let key of allowedUpdates) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }

    const updated = await Intern.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated successfully.", intern: updated });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Server error updating profile." });
  }
};

/**
 * 💼 Apply for Job (Free Plan Limit)
 */
export const applyJob = async (req, res) => {
  try {
    const intern = await Intern.findById(req.user.id);

    if (!intern) return res.status(404).json({ message: "Intern not found." });

    if (!intern.isPaid && intern.jobsAppliedCount >= intern.freeJobLimit) {
      return res.status(403).json({ message: "Free job limit reached. Please upgrade your plan." });
    }

    intern.jobsAppliedCount += 1;
    intern.appliedFor.push(req.body.jobTitle);
    await intern.save();

    res.status(200).json({ message: "Job applied successfully." });
  } catch (error) {
    console.error("Job Apply Error:", error);
    res.status(500).json({ message: "Server error applying for job." });
  }
};

/**
 * 🧩 Add Feedback (Mentor / Hiring Team)
 */
export const addFeedback = async (req, res) => {
  try {
    const { target, comment, rating, improvementSuggestions } = req.body;

    const intern = await Intern.findById(req.params.id);
    if (!intern) return res.status(404).json({ message: "Intern not found." });

    const feedbackObj = { comment, rating, improvementSuggestions };

    if (target === "mentor") {
      intern.mentorFeedback.push(feedbackObj);
    } else if (target === "hiring") {
      intern.hiringTeamFeedback.push(feedbackObj);
    } else {
      return res.status(400).json({ message: "Invalid feedback target." });
    }

    await intern.save();
    res.status(200).json({ message: `${target} feedback added successfully.` });
  } catch (error) {
    console.error("Feedback Error:", error);
    res.status(500).json({ message: "Server error adding feedback." });
  }
};
/** * ⭐ Add/Remove Favorite Job
 */
export const toggleFavoriteJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const intern = await Intern.findById(req.user.id);
    if (!intern) return res.status(404).json({ message: "Intern not found." });

    const index = intern.favorites.indexOf(jobId);
    if (index === -1) {
      intern.favorites.push(jobId);
      await intern.save();
      return res.status(200).json({ message: "Job added to favorites." });
    } else {
      intern.favorites.splice(index, 1);
      await intern.save();
      return res.status(200).json({ message: "Job removed from favorites." });
    }
    } catch (error) {
    console.error("Favorite Job Error:", error);
    res.status(500).json({ message: "Server error toggling favorite job." });
  }
};