import { Container } from './container'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-[#07080f] via-[#0d1020] to-[#1a1830] text-white overflow-hidden">
      {/* Анимированные линии и круги */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/3 w-1 h-40 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse opacity-40 rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-32 bg-gradient-to-t from-purple-500 to-transparent animate-pulse opacity-30 rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-pink-400 rounded-full opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-20 rotate-12"></div>
      </div>

      <Container>
        <div className="relative z-10 py-20 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">
          {/* Left Section */}
          <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
            <h3 className="text-2xl font-extrabold tracking-wide text-cyan-400 uppercase drop-shadow-md">
              Innovate. Inspire. Impact.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light italic">
              Embark on a journey with Atlantisku — where breakthrough technologies and visionary ideas converge to shape tomorrow’s digital frontier.
            </p>
          </div>

          {/* Center Title */}
          <div>
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              Atlantisku
            </h2>
            <nav className="mt-8 flex justify-center gap-8 text-sm font-semibold text-gray-300 flex-wrap">
              <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
              <a href="/contacts" className="hover:text-white transition-colors duration-300">Contacts</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
            <h3 className="text-2xl font-extrabold tracking-wide text-purple-400 uppercase drop-shadow-md">
              Empowering Digital Evolution
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light italic">
              Dive deep into cloud innovation, AI breakthroughs, and the architecture of future-ready software — all curated for curious minds.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10 max-w-6xl mx-auto">
          {[
            { label: 'Monthly Visits', value: '120K+', color: 'text-cyan-400' },
            { label: 'Articles Published', value: '400+', color: 'text-purple-400' },
            { label: 'Community Experts', value: '80+', color: 'text-pink-400' },
            { label: 'Tech Events', value: '25+', color: 'text-emerald-400' },
          ].map(({ label, value, color }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-gray-900/80 to-gray-800/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-gray-700 hover:scale-105 hover:shadow-cyan-500/50 transition-transform duration-300"
            >
              <div className={`text-4xl font-extrabold ${color} drop-shadow-md`}>{value}</div>
              <div className="mt-3 text-gray-400 font-semibold tracking-wide">{label}</div>
            </div>
          ))}
        </div>

      </Container>

      {/* Custom styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </footer>
  )
}
