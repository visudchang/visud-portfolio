export default function About() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Text — moved first */}
        <div className="space-y-6 text-left w-full transform -translate-y-10">
          <h1 className="text-4xl font-bold text-blue-300">About Me</h1>
          <p className="text-lg text-zinc-300 leading-relaxed">
            I'm a passionate aerospace engineer-in-training currently pursuing my B.S. in Mechanical Engineering with a minor in Electrical Engineering & Computer Science at UC Berkeley. With a strong foundation in dynamics, controls, and fluid systems, I’ve focused my academic and extracurricular efforts on the intersection of mission operations and propulsion engineering. As Vice President of AIAA and a member of UC Berkeley’s competitive rocketry team, STAR, I’ve taken on leadership roles in both technical development and mentorship, contributing to projects ranging from solid and liquid rockets to advanced simulation systems.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            During my internship at NASA Ames Research Center, I developed MAESTRO—a Mars Airfield Evaluation and Simulation Tool for Rotorcraft Operations—enabling mission planners to identify safe landing zones using Martian terrain data. I've also engineered a regeneratively cooled rocket engine in SolidWorks, optimizing coolant flow and thermal performance through iterative CAD and CFD simulations. My mission simulator project, integrating real-time telemetry via Arduino, LoRa, and a React-based GUI, demonstrates my ability to bridge embedded systems, networking, and user experience to create end-to-end solutions for spacecraft control.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            I aspire to work in mission operations or flight software at companies like SpaceX, Rocket Lab, or Vast, where I can help shape the future of space exploration through reliable, innovative systems. With a deep appreciation for both the technical rigor and collaborative spirit that spaceflight demands, I’m driven by a lifelong goal: to one day serve on a mission control team that lands a spacecraft on another world.
          </p>
        </div>

        {/* Portrait — now second */}
        <div className="flex-shrink-0">
          <img
            src="/me.jpg"
            alt="Visud Chang"
            className="w-96 h-144 object-cover shadow-lg border-4 border-blue-400 transform translate-x-6 -translate-y-8"
          />
        </div>
        
      </div>
    </div>
  );
}
