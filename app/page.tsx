export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-purple-400">
          CareerPilot AI 🚀
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="#">Features</a>
          <a href="#">Roadmap</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        <button className="bg-purple-600 px-5 py-2 rounded-lg">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <span className="border border-purple-500 px-4 py-2 rounded-full text-sm text-purple-300">
          Your AI Career Operating System
        </span>

        <h1 className="mt-8 text-6xl font-bold max-w-4xl">
          Accelerate Your
          <span className="text-purple-500"> Career </span>
          With AI
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg">
          Discover opportunities, build in-demand skills,
          get AI guidance, and land your dream career faster.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-purple-600 px-8 py-4 rounded-xl">
            Get Started Free
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-xl">
            Watch Demo
          </button>
        </div>
      </section>
    </main>
  );
}