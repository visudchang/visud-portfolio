export default function MAESTRO() {
  return (
    <div className="bg-zinc-900 text-white p-6 shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-300">
        MAESTRO: Mars Airfield Evaluation and Survey Tool for Rotorcraft Operations
      </h2>
      <p>
        These slides showcase my work on MAESTRO, a mission planning tool I developed during my internship at NASA Ames for future Mars rotorcraft missions. Built using Python, Dash, and Plotly, MAESTRO analyzes HiRISE topographic data to identify safe landing zones, evaluate terrain constraints, and generate viable traversal routes. The tool supports intelligent path planning by visualizing slope, elevation, and landing zone distribution across diverse Martian terrains. This work was presented to leadership at NASA Ames and is part of ongoing efforts to enable more capable, autonomous rotorcraft exploration of the Martian surface.
      </p>

      <div className="w-full">
        <iframe
          src="/MAESTRO Presentation.pdf"
          title="MAESTRO Presentation"
          className="w-full h-[600px] rounded-md border border-zinc-700"
        />
      </div>

      <div className="flex justify-center">
        <a
          href="/MAESTRO Presentation.pdf"
          download
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
        >
          Download Slides (PDF)
        </a>
      </div>

      <div className="pt-8 space-y-2 text-center">
        <h3 className="text-xl text-blue-300 font-semibold">
          Research Poster Presented at NASA Ames
        </h3>
        <img
          src="/final poster.jpg"
          alt="Poster summary of MAESTRO"
          className="w-full max-w-6xl mx-auto rounded-md border border-zinc-700 object-cover h-[650px]"
        />
      </div>

      <div className="text-center pt-6">
        <p>
          The source code can be accessed{" "}
          <a
            href="https://github.com/yourusername/maestro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            here
          </a>.
        </p>
      </div>
    </div>
  );
}
