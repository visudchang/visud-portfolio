import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './sections/About'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import MissionSimulator from './projects/MissionSimulator'
import RocketEngine from './projects/RocketEngine'
import MAESTRO from './projects/MAESTRO'

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <Link to="/" className="text-xl font-bold hover:text-blue-400 transition duration-200">
        Visud Chang
      </Link>
      <div className="flex gap-6 text-sm sm:text-base">
        <Link to="/about" className="hover:text-blue-400 transition duration-200">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-400 transition duration-200">
          Projects
        </Link>
        <Link to="/resume" className="hover:text-blue-400 transition duration-200">
          Resume
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition duration-200">
          Contact
        </Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="relative h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('homebackground.jpg')",
          backgroundposition: "center"
         }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full px-6 gap-10 -mt-16">
          {/* Left: Photo */}
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img
              src="me.jpg"
              alt="Visud Chang"
              className="w-96 h-96 object-[center_80%] object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="text-center md:text-right ml-auto mt-16">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Visud.</h1>
            <p className="text-xl max-w-xl">
              I’m a student at <span className="font-semibold">UC Berkeley</span> majoring in Aerospace Engineering, with a minor in Electrical Engineering and Computer Science. 
              I’m from <span className="font-semibold">Long Beach, California</span>, and I’m passionate about mission control, operations, and the systems that make it all possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/mission-simulator" element={<MissionSimulator />} />
        <Route path="/projects/rocket-engine" element={<RocketEngine />} />
        <Route path="/projects/maestro" element={<MAESTRO />} />
      </Routes>
    </Router>
  )
}