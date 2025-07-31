export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-start justify-center px-10 py-24"
      style={{ backgroundImage: "url('/contactbackground.jpg')" }}
    >
      <div className="max-w-5xl w-full space-y-8 text-left transform -translate-y-20 translate-x-16">
        <h1 className="text-5xl font-bold text-blue-300">Contact Me</h1>
        <p className="text-xl text-zinc-200">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="text-xl text-zinc-100 space-y-4">
          <p>
            <a href="mailto:visudchang@gmail.com" className="text-blue-400 hover:underline">
              visudchang@gmail.com
            </a>{" "}
            |{" "}
            <a href="tel:+15629128502" className="text-blue-400 hover:underline">
              +1 (562) 912-8502
            </a>
          </p>

          <p className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-blue-400"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.041-1.855-3.041-1.857 0-2.141 1.45-2.141 2.946v5.664H9.343V9h3.414v1.561h.047c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.777 13.019H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <a
              href="https://linkedin.com/in/visud-chang-a558aa2a8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/visud-chang-a558aa2a8
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
