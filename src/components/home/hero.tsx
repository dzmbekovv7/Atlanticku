import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
	const [loaded, setLoaded] = useState(false)

	return (
		<section className='relative min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				<div className='absolute top-1/2 right-1/6 w-40 h-40 border-2 border-cyan-400 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<div className='absolute inset-0'>
				<div
					className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
						loaded ? 'opacity-0' : 'opacity-100'
					}`}
					style={{ zIndex: 1 }}
				/>
				<img
					src='https://www.reiner-sct.com/wp-content/uploads/45-KI-Sicherheit-Erfolgreiche-Nutzung-von-KI_AdobeStock_946065111.jpeg'
					alt='AI'
					decoding='async'
					loading='eager'
					fetchPriority='high'
					className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-[10s]'
					sizes='100vw'
					onLoad={() => setLoaded(true)}
					style={{ zIndex: 2, position: 'relative' }}
				/>
				{/* Multi-layered gradient overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/70 to-purple-900/80' style={{ zIndex: 3 }}></div>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' style={{ zIndex: 4 }}></div>
			</div>
<Container className='relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-white'>

  {/* 🌀 Fancy Animated Background */}
  <div className='absolute inset-0 overflow-hidden z-0'>
    <div className='absolute w-60 h-60 border-2 border-indigo-400 rounded-full animate-spin-slow top-[20%] left-[70%] opacity-30' />
    <div className='absolute w-1 h-64 bg-gradient-to-b from-pink-500 to-transparent rotate-45 left-[25%] top-[65%] animate-fade-in' />
    <div className='absolute w-52 h-1 bg-gradient-to-r from-emerald-400 to-transparent -rotate-45 right-[5%] top-[30%] animate-pulse' />
    <div className='absolute w-24 h-24 border border-purple-500 rounded-full top-[80%] left-[10%] opacity-40 animate-pulse-slow' />
  </div>

  {/* 🔤 LEFT SIDE */}
  <div className='relative z-10 w-full md:w-1/2 flex flex-col justify-center items-start gap-6 animate-fade-in-left'>

    <h1 className='text-[5rem] md:text-[8.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-300 to-purple-400 drop-shadow-2xl transform -skew-y-3'>
      WILL AI
    </h1>
    <h2 className='text-[4rem] md:text-[5rem] font-extrabold text-indigo-300 transform skew-y-3 drop-shadow'>
      REPLACE US?
    </h2>

    {/* 🌟 Improved Text */}
    <p className='mt-4 text-base md:text-lg text-gray-300 font-light max-w-lg leading-relaxed relative z-10'>
      In a world where <span className='bg-indigo-600 px-1 rounded-sm'>AI</span> evolves at an <u>unstoppable speed</u>, we must question: will it <span className='bg-pink-600/60 px-1 rounded'>replace</span> the very minds that created it?
      <br /><br />
      This isn't just code — it's the <span className='text-purple-300 font-medium underline'>future</span>, a blend of <span className='bg-emerald-600/60 px-1 rounded-sm'>threat</span> and <span className='bg-blue-500/40 px-1 rounded'>hope</span>. Will machines serve <span className='underline decoration-wavy'>us</span> — or redefine what it means to be <span className='font-semibold text-white'>human</span>?
    </p>

    {/* 🎨 Stylish Buttons */}
    <div className='mt-8 flex gap-6'>
      <button className='px-8 py-4 text-xl font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-[2rem_1rem_3rem_1.5rem] shadow-2xl transform hover:rotate-3 hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-lg tracking-wider'>
        ARTICLES
      </button>
      <button className='px-8 py-4 text-xl font-semibold bg-pink-600 hover:bg-pink-700 rounded-[1.5rem_2rem_1rem_3rem] shadow-2xl transform hover:-rotate-2 hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-lg tracking-wider'>
        ABOUT
      </button>
    </div>
  </div>

  {/* 🧊 RIGHT SIDE: Cubes */}
<div className='relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center gap-12 mt-20 md:mt-0 animate-fade-in-right'>

  {/* 🔷 AI Cube - компактный, с глубиной и свечением */}
  <div className="group relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl shadow-[0_15px_60px_rgba(102,51,153,0.6)] transform rotate-[8deg] hover:rotate-[10deg] transition-transform duration-500 border-[1.5px] border-white/25 overflow-hidden">
    
    {/* Внутренний светящийся контур */}
    <div className="absolute inset-0 rounded-3xl border-[2px] border-white/15 group-hover:border-indigo-400 transition-colors duration-300 pointer-events-none" />
    
    {/* Сверхмягкий световой блик */}
    <div className="absolute top-[-30%] left-[-30%] w-[280%] h-[280%] bg-gradient-to-r from-white via-indigo-400 to-transparent opacity-15 group-hover:opacity-30 rotate-45 blur-4xl animate-pulse-slow" />

    {/* Фон с текстурой "сеточки" (опционально) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none rounded-3xl" />

    {/* Текст внутри */}
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center select-none">
      <p className='text-xl md:text-2xl font-extrabold tracking-wider leading-tight text-white drop-shadow-xl'>
        🤖<br />
        <span className="text-indigo-300">Artificial</span><br />
        <span className="text-purple-300">Intelligence</span>
      </p>
    </div>
  </div>

  {/* 🆚 VS */}
  <p className='text-4xl md:text-5xl font-extrabold text-pink-400 animate-bounce drop-shadow-lg select-none'>VS</p>

  {/* 🔶 Humanity Cube - компактный, с глубиной и свечением */}
  <div className="group relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-red-700 to-rose-800 rounded-3xl shadow-[0_15px_60px_rgba(220,20,60,0.6)] transform -rotate-[8deg] hover:-rotate-[10deg] transition-transform duration-500 border-[1.5px] border-white/25 overflow-hidden">
    
    {/* Внутренний светящийся контур */}
    <div className="absolute inset-0 rounded-3xl border-[2px] border-white/15 group-hover:border-rose-400 transition-colors duration-300 pointer-events-none" />
    
    {/* Сверхмягкий световой блик */}
    <div className="absolute top-[-30%] left-[-30%] w-[280%] h-[280%] bg-gradient-to-r from-white via-pink-400 to-transparent opacity-15 group-hover:opacity-30 rotate-45 blur-4xl animate-pulse-slow" />

    {/* Фон с текстурой "сеточки" (опционально) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none rounded-3xl" />

    {/* Текст внутри */}
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center select-none">
      <p className='text-xl md:text-2xl font-extrabold tracking-wider leading-tight text-white drop-shadow-xl'>
        🧠<br />
        <span className="text-rose-200">Human</span><br />
        <span className="text-red-300">Civilization</span>
      </p>
    </div>
  </div>
</div>

</Container>



			
		</section>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('hero-section-styles')) {
	const style = document.createElement('style')
	style.id = 'hero-section-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Ensure proper clipping on mobile */
		@media (max-width: 640px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Performance optimizations */
		@media (prefers-reduced-motion: reduce) {
			.animate-spin-slow,
			.animate-bounce,
			.animate-pulse {
				animation: none;
			}
			
			.transition-transform,
			.transition-all {
				transition: none;
			}
		}
	`
	document.head.appendChild(style)
}
