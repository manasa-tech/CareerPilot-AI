"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Play,
  User,
  Briefcase,
  BarChart3,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-40 w-72 h-72 bg-purple-700/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Navbar */}
        <nav className="flex items-center justify-between py-8">

          <div className="flex items-center gap-3">
            <Rocket className="text-purple-500" />
            <h1 className="font-bold text-xl">
              CareerPilot AI
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-zinc-300">
            <a href="#">Features</a>
            <a href="#">Roadmap</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <a href="#">About</a>
          </div>

          <div className="flex gap-3">
            <button className="border border-white/10 px-5 py-2 rounded-xl">
              Login
            </button>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 px-5 py-2 rounded-xl">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-14 items-center py-20">

          {/* Left */}
          <div>

            <div className="inline-flex items-center gap-2 border border-purple-500/20 bg-purple-500/10 px-4 py-2 rounded-full">
              ✨ Your AI Career Operating System
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-8">

              Accelerate Your

              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Career with AI
              </span>

            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl">
              Discover opportunities, build in-demand skills,
              get AI guidance and land your dream career
              faster than ever.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-gradient-to-r from-purple-600 to-indigo-500 px-8 py-4 rounded-2xl font-semibold">
                🚀 Get Started Free
              </button>

              <button className="border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-3">
                <Play size={18} />
                Watch Demo
              </button>

            </div>

            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500" />
                <div className="w-10 h-10 rounded-full bg-blue-500" />
                <div className="w-10 h-10 rounded-full bg-pink-500" />
                <div className="w-10 h-10 rounded-full bg-green-500" />
              </div>

              <div>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>

                <p className="text-zinc-400 text-sm">
                  Loved by 10,000+ users
                </p>
              </div>
            </div>

          </div>

          {/* Dashboard */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(168,85,247,0.25)]">

              <div className="flex">

                <div className="w-16 border-r border-white/10 flex flex-col items-center gap-6 py-4">
                  <Rocket />
                  <User />
                  <Briefcase />
                  <BarChart3 />
                </div>

                <div className="flex-1 px-6">

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">
                        Welcome back, Arjun 👋
                      </h3>

                      <p className="text-zinc-400">
                        Let’s achieve your career goals today
                      </p>
                    </div>

                    <button className="bg-purple-600 px-5 py-2 rounded-xl">
                      Ask AI Copilot
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-white/5 rounded-2xl p-6">
                      <p className="text-zinc-400">
                        Career Score
                      </p>

                      <div className="text-5xl font-bold mt-3">
                        85
                      </div>

                      <button className="mt-4 w-full bg-purple-600 py-2 rounded-xl">
                        Improve Now
                      </button>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6">
                      <p className="font-semibold mb-4">
                        Recommended
                      </p>

                      <div className="space-y-3">

                        <div className="flex justify-between">
                          <span>Data Scientist</span>
                          <span className="text-green-400">
                            94%
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>AI Engineer</span>
                          <span className="text-green-400">
                            91%
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>Product Manager</span>
                          <span className="text-green-400">
                            88%
                          </span>
                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-4">

                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-zinc-400 text-sm">
                        Skill Progress
                      </p>

                      <h4 className="text-2xl font-bold">
                        72%
                      </h4>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-zinc-400 text-sm">
                        Applications
                      </p>

                      <h4 className="text-2xl font-bold">
                        12
                      </h4>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-zinc-400 text-sm">
                        Interviews
                      </p>

                      <h4 className="text-2xl font-bold">
                        5
                      </h4>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-zinc-400 text-sm">
                        Offers
                      </p>

                      <h4 className="text-2xl font-bold">
                        2
                      </h4>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </section>
        {/* ABOUT SECTION */}
<section className="py-32">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
        About Us
      </span>

      <h2 className="text-5xl md:text-6xl font-bold mt-6">
        Building the Future of
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {" "}Career Growth
        </span>
      </h2>

      <p className="text-zinc-400 max-w-4xl mx-auto mt-8 text-lg leading-relaxed">
        CareerPilot AI is an intelligent career development platform
        designed to help students, graduates, and professionals
        discover opportunities, develop skills, prepare for interviews,
        and secure their dream jobs using Artificial Intelligence.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold mb-4">
          Our Mission
        </h3>

        <p className="text-zinc-400">
          To democratize career growth by providing AI-powered
          guidance, personalized learning paths, and job
          opportunities for everyone.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold mb-4">
          Our Vision
        </h3>

        <p className="text-zinc-400">
          We envision a future where every student and
          professional has access to a personal AI career
          mentor available 24/7.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        <h3 className="text-2xl font-bold mb-4">
          Our Goal
        </h3>

        <p className="text-zinc-400">
          Help millions of people make smarter career
          decisions and bridge the gap between education
          and employment.
        </p>
      </div>

    </div>
  </div>
</section>

{/* WHY WE BUILT THIS */}
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-5xl font-bold">
          Why We Built CareerPilot AI
        </h2>

        <p className="text-zinc-400 mt-8 text-lg leading-relaxed">
          Many students struggle to find the right career path.
          They spend countless hours searching for jobs,
          improving resumes, and preparing for interviews.
        </p>

        <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
          We created CareerPilot AI to solve these challenges
          through intelligent recommendations, personalized
          roadmaps, and AI-powered mentorship.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-3xl p-10">

        <div className="space-y-6">

          <div className="flex gap-4">
            <div>✅</div>
            <div>Career Guidance Powered by AI</div>
          </div>

          <div className="flex gap-4">
            <div>✅</div>
            <div>Resume Optimization & Analysis</div>
          </div>

          <div className="flex gap-4">
            <div>✅</div>
            <div>Mock Interview Preparation</div>
          </div>

          <div className="flex gap-4">
            <div>✅</div>
            <div>Personalized Learning Paths</div>
          </div>

          <div className="flex gap-4">
            <div>✅</div>
            <div>Smart Job & Internship Matching</div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* HOW IT WORKS */}
<section className="py-32">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-5xl font-bold">
      How It Works
    </h2>

    <p className="text-center text-zinc-400 mt-6">
      Three simple steps to accelerate your career.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-5xl font-bold text-purple-400">
          01
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Create Profile
        </h3>

        <p className="text-zinc-400 mt-4">
          Tell us about your skills, interests,
          education, and career goals.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-5xl font-bold text-purple-400">
          02
        </div>

        <h3 className="text-2xl font-bold mt-6">
          AI Analysis
        </h3>

        <p className="text-zinc-400 mt-4">
          Our AI evaluates your profile and
          identifies opportunities for growth.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="text-5xl font-bold text-purple-400">
          03
        </div>

        <h3 className="text-2xl font-bold mt-6">
          Achieve Goals
        </h3>

        <p className="text-zinc-400 mt-4">
          Receive personalized recommendations,
          learning plans, and job opportunities.
        </p>
      </div>

    </div>
  </div>
</section>

      </div>

    </main>
  );
}