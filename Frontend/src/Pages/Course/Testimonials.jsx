import React from "react";

const testimonials = [
  {
    title: "Got My Dream Job at Myntra",
    text: "After improving my CV through Graphura’s CV masterclass, I was directly contacted by HR. I cleared the interview and landed my dream role within 10 days. Truly grateful to the Graphura team!",
    name: "Karan Bhat",
    role: "Graphic Designer",
  },
  {
    title: "From Learning to Hiring at Myntra",
    text: "Graphura helped me structure my profile and prepare confidently. The mentorship and CV review made a huge difference, and I secured my role faster than expected.",
    name: "Neeraj Singh",
    role: "Marketing Executive",
  },
  {
    title: "Design Career Breakthrough",
    text: "The guidance and portfolio feedback I received at Graphura were extremely valuable. I felt confident during interviews and successfully transitioned into a product design role.",
    name: "Sneha Patel",
    role: "Product Designer",
  },
  {
    title: "UI Designer Role Achieved",
    text: "Graphura’s structured preparation and real interview insights helped me crack my UI Designer interview smoothly. Highly recommended for career-focused learning.",
    name: "Varun Soni",
    role: "UI Designer",
  },
  {
    title: "Cracked My First Tech Role at Infosys",
    text: "With Graphura’s roadmap and mock interviews, I refined my resume and interview skills. I cleared Infosys in my first attempt. The mentorship was top-notch.",
    name: "Amit Verma",
    role: "Frontend Developer",
  },
];

const Testimonials = () => {
  return (
    <section
      className="w-full bg-white/40 backdrop-blur-xl shadow-xl border border-white/40 p-6 md:p-10"
      style={{
        background:
          "radial-gradient(circle, #E3F9FF 0%, #AEE7F6 45%, #5FB2D4 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-black mb-8">
          Why people choose GRAPHURA for their career
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-sky-200/80 via-white/90 to-sky-50/90 backdrop-blur-xl border border-white/70 rounded-2xl px-5 pt-4 pb-5 text-black shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>

              <p className="text-[11px] leading-relaxed mb-4">
                {item.text}
              </p>

              <div className="h-px w-full bg-black/10 mb-3" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[11px] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-neutral-700">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
