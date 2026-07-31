export default function RoadmapPage() {
  const roadmap = [
    {
      title: "Step 1",
      description: "Learn programming fundamentals and problem solving.",
    },
    {
      title: "Step 2",
      description: "Master Data Structures & Algorithms.",
    },
    {
      title: "Step 3",
      description: "Build Full Stack projects.",
    },
    {
      title: "Step 4",
      description: "Practice System Design and CS fundamentals.",
    },
    {
      title: "Step 5",
      description: "Apply for internships and mock interviews.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        AI Career Roadmap
      </h1>

      <div className="space-y-6">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-6 border border-slate-700"
          >
            <h2 className="text-2xl font-semibold">
              {step.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}