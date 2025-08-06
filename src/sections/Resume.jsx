export default function Resume() {
  return (
    <div
      className="h-screen bg-cover bg-left text-white flex items-center px-6 py-20"
      style={{
        backgroundImage: "url('/resumebackground.jpg')",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mx-auto">
        
        {/* Text on the Left */}
        <div className="md:w-1/2 space-y-6 text-left transform translate-y-16">
          <h1 className="text-5xl font-bold text-blue-300">Resume</h1>
          <p className="text-2xl text-zinc-200">
            Here's a preview of my resume.
          </p>
          <a
            href="/VisudChang_Resume.pdf"
            download
            className="text-xl inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition duration-200"
          >
            Download It Here
          </a>
        </div>

        {/* Resume PDF on the Right */}
        <div className="w-full md:w-[540px] h-[695px] rounded-lg overflow-hidden shadow-lg border-2 border-blue-500 transform -translate-y-6">
          <embed
            src="/VisudChang_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=65"
            type="application/pdf"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}
