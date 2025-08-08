export default function About() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Text — moved first */}
        <div className="space-y-6 text-left w-full transform -translate-y-10">
          <h1 className="text-4xl font-bold text-blue-300">About Me</h1>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Originally from Long Beach, CA, I'm currently a student at UC Berkeley pursuing my B.S. in Aerospace Engineering with a minor in Electrical Engineering and Computer Science. My first interaction with aerospace engineering started at ten years old when I got the chance to visit NASA’s Jet Propulsion Laboratory in Pasadena and see the incredible projects people were working on, inspiring my interest in space, and specifically, in propulsion systems and mission control.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This summer I had the opportunity to intern at the Mission Design Center at NASA Ames Research Center, where I learned how to think like a mission planner, specifically for rotorcraft operations on Mars. I developed an intelligent path planning tool called MAESTRO to help the operations team make traversal decisions when creating flight plans. Over the summer, I was also inspired to create some passion projects, including my own mission control software and a regeneratively cooled rocket engine simulation, which helped me develop a wide range of skills I can apply to future work. More information can be found in the Projects tab of this website.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
           I see my future in the aerospace industry. One of the things I love most about this field is the ability to be part of the bigger picture. Sending vehicles and humans to space is not easy, but being part of that journey and contributing to the mission is what drives me each day.
          </p>
        </div>

        {/* Portrait — now second */}
        <div className="flex-shrink-0">
          <img
            src="/about image.jpg"
            alt="Visud Chang"
            className="w-96 h-132 object-cover object-top shadow-lg border-4 border-blue-400 transform translate-x-6 -translate-y-8"
          />
        </div>
        
      </div>
    </div>
  );
}
