import { useState } from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
        
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-blue-100">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/GraphuraLogo.jpg"
                alt="Graphura Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Login Section */}
            <div className="relative">
              <button
                className="bg-sky-600 text-white px-6 py-2 rounded-lg shadow-sm font-medium hover:bg-sky-700 transition-all duration-300 flex items-center gap-2"
                onClick={() => setShowLoginOptions((prev) => !prev)}
              >
                <span>Login</span>
                <svg className={`w-4 h-4 transition-transform ${showLoginOptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showLoginOptions && (
                <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-blue-100 py-2 w-48 z-10">
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-blue-50">
                    <div className="font-medium text-gray-800">Intern Login</div>
                    <div className="text-sm text-gray-500">For internship candidates</div>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-blue-50">
                    <div className="font-medium text-gray-800">HR Login</div>
                    <div className="text-sm text-gray-500">For HR professionals</div>
                  </button>
                  <button className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors">
                    <div className="font-medium text-gray-800">Admin Login</div>
                    <div className="text-sm text-gray-500">System administrators</div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-16">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute left-40 -bottom-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                    Graphura
                  </span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
                  Placement Portal
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  Connect with top companies and kickstart your career journey. 
                  We bridge the gap between talented individuals and exceptional opportunities.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-600">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-600">1000+</div>
                    <div className="text-gray-600 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-600">300%</div>
                    <div className="text-gray-600 text-sm">Growth</div>
                  </div>
                </div>

              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Successful team collaboration"
                    className="rounded-xl w-full h-80 object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 w-32 transform -rotate-6">
                  <div className="text-2xl font-bold text-sky-600">95%</div>
                  <div className="text-xs text-gray-600">Placement Rate</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-32 transform rotate-6">
                  <div className="text-2xl font-bold text-sky-600">50+</div>
                  <div className="text-xs text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Graphura?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive placement services to help you achieve your career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Premium Opportunities</h3>
                <p className="text-gray-600">Access exclusive job openings from leading companies across various industries.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Guidance</h3>
                <p className="text-gray-600">Get personalized career counseling and interview preparation from industry experts.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Network Building</h3>
                <p className="text-gray-600">Connect with professionals and alumni to expand your professional network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Replacing Success Stories */}
        <section className="py-16 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading digital marketing agency dedicated to helping businesses grow their online presence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-sky-600">Graphura India Private Limited</span> is a leading digital marketing agency dedicated to helping small businesses and companies grow their online presence.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2015, we've helped over 500 clients achieve their digital marketing goals through innovative strategies and data-driven approaches.
                </p>
                
                {/* Stats in Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-sky-600 mb-2">10+</div>
                    <div className="text-gray-700 font-medium">Years of Experience</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Satisfied Clients</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-sky-600 mb-2">97%</div>
                    <div className="text-gray-700 font-medium">Client Retention Rate</div>
                  </div>
                </div>
              </div>

              {/* Right Image Box */}
                <div className="space-y-4 pt-2">
                  <div className="overflow-hidden transition-shadow duration-300">
                    <img
                      src="/team.svg"
                      alt="Our Team at Work"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <img
                src="/Graphura.jpg"
                alt="Graphura Logo"
                className="w-15 h-auto object-contain rounded-full"
              />
              <span className="ml-4 text-2xl font-bold"> <u>Graphura</u></span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div className="text-lg mb-2">Graphura India Private Limited</div>
              <div>© {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Building careers, shaping futures - One placement at a time</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default WelcomePage;