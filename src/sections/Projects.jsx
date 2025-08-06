const projects = [
  {
    title: "Mission Simulator",
    description: "Real-time orbital simulation with Python, Go, and Arduino-based telemetry.",
    link: "/projects/mission-sim",
    image: "/mission-sim cover.png",
  },
  {
    title: "Regenerative Rocket Engine",
    description: "CAD + thermal-fluid simulations of a regen-cooled rocket engine.",
    link: "/projects/rocket-engine",
    image: "/placeholder.jpeg",
  },
  {
    title: "MAESTRO: Mars Rotorcraft Planner",
    description: "NASA Ames tool for intelligent Mars terrain analysis and path planning.",
    link: "/projects/maestro",
    image: "/MAESTRO cover.png",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-300 mb-12 text-center">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-200">{project.title}</h2>
                <p className="text-zinc-300 text-sm mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
