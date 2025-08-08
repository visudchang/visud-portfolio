export default function MissionSimulator() {
  return (
    <div className="bg-zinc-900 text-white px-6 py-10 shadow-lg space-y-10 w-full">
      <h2 className="text-5xl font-bold text-blue-300">Mission Simulator</h2>

      {/* Intro + Demo Video side-by-side with balanced height */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Text */}
        <div className="pt-20 text-[1.15rem] leading-[2.1rem] md:min-h-[360px]">
          <p className="mb-4">
            The Mission Simulator is a spacecraft telemetry and mission control system I designed to emulate real-world mission operations. It connects a hardware IMU sensor to a software ground station via TCP/LoRa and provides a live visual interface to monitor and control a virtual satellite.
          </p>
          <p>
            This project demonstrates integration across embedded systems, networking, real-time simulation, and GUI design—mimicking the structure of actual space missions.
          </p>
        </div>

        {/* Right: Video + Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-bold text-blue-300">Demo Video</h3>
          <div className="w-full max-w-[720px] aspect-video">
            <iframe
              className="w-full h-full rounded-md border border-zinc-700"
              src="https://www.youtube.com/embed/lAbYO24wM9Q"
              title="Mission Simulator Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center text-base space-y-1">
            <a
              href="https://visudchang.com/projects/mission-sim/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Try it live!
            </a>
            <br />
            <a
              href="https://github.com/visudchang/mission-sim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View the source code on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Continue with the rest of your sections... */}


      <div className="space-y-3">
        <h3 className="text-xl font-bold text-blue-300">Motivation</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Designing a real-time command and telemetry loop</li>
          <li>Simulating orbital mechanics and maneuvers</li>
          <li>Building robust ground-software systems with fallback modes</li>
          <li>Learning how real teams operate spacecraft in closed-loop systems</li>
        </ul>
        <p>
          This project bridges embedded hardware, backend logic, and frontend UX into a cohesive flight experience.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-blue-300">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside space-y-1">
            <li>Live telemetry feed from BNO055 IMU via LoRa or serial</li>
            <li>Orbital maneuver simulation with real-time burn updates</li>
            <li>Live attitude graphs and orbit visualization</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Mission log and burn queue control</li>
            <li>Fallback mode for simulated data if hardware disconnects</li>
            <li>Fully Dockerized frontend, backend, and flight server</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-blue-300">System Architecture</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside space-y-1">
            <li>ESP32 microcontroller with BNO055 IMU</li>
            <li>LoRa (E32-433T20D) for wireless telemetry</li>
            <li>Go-based flight computer for onboard logic</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Python Flask ground station handling physics and state</li>
            <li>React frontend with Tailwind CSS</li>
            <li>SVG-based orbit display and live control interface</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-blue-300">What I Learned</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Integrating IMUs with microcontrollers</li>
            <li>Streaming telemetry over TCP and LoRa</li>
            <li>Building a responsive, real-time frontend</li>
            <li>Simulating burns and orbit dynamics with Poliastro</li>
            <li>Containerizing multi-component systems</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-blue-300">Technologies Used</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React, Tailwind CSS, Vite</li>
            <li>Backend: Python (Flask, Poliastro, PySerial), Go</li>
            <li>Hardware: ESP32, BNO055 IMU, LoRa</li>
            <li>DevOps: Docker, Docker Compose</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <h3 className="text-xl font-bold text-blue-300">Future Work</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Add orbital parameter inputs for more complex transfers</li>
          <li>Incorporate burn inaccuracy and error modeling</li>
          <li>Expand to support multi-satellite and interplanetary missions</li>
        </ul>
      </div>
    </div>
  );
}
