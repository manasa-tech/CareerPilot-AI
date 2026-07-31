export default function ResumeAnalyzer() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-slate-900 p-10 rounded-xl w-[650px]">

        <h1 className="text-4xl font-bold mb-6">
          Resume Analyzer
        </h1>

        <p className="text-gray-400 mb-8">
          Upload your resume and receive AI-powered feedback.
        </p>

        <input
          type="file"
          className="w-full border border-gray-700 rounded-lg p-3 mb-6"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full"
        >
          Analyze Resume
        </button>

        <div className="mt-8 bg-slate-800 rounded-lg p-5">
          <h2 className="text-xl font-semibold">
            Sample Analysis
          </h2>

          <ul className="list-disc ml-5 mt-4 text-gray-300 space-y-2">
            <li>Resume Score: 82/100</li>
            <li>Add measurable achievements.</li>
            <li>Improve project descriptions.</li>
            <li>Include relevant technical skills.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}