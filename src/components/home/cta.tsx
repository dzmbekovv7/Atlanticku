export function CallToActionSection() {
	return (
		<section className='relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-cyan-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-purple-500 to-transparent transform -rotate-45 opacity-30'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-emerald-500 to-transparent transform rotate-45 opacity-50'></div>
				<div className='absolute top-1/2 left-1/2 w-40 h-40 border-2 border-violet-400 transform rotate-45 opacity-10 animate-spin-slow'></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32'>
				<div className='flex flex-col lg:flex-row items-center gap-16'>

					{/* Left side - Text content */}
					<div className='lg:w-3/5 order-2 lg:order-1'>
						<div className='relative'>
							<div className='absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-500/20 transform rotate-45 opacity-60'></div>

							<div className='space-y-8'>
								{/* Main heading */}
								<div className='relative'>
									<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight'>
										<span className='block transform hover:translate-x-2 transition-transform duration-500'>
											EMBRACE THE
										</span>
										<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 transform hover:-translate-x-2 transition-transform duration-500 -mt-2'>
											FUTURE OF TECHNOLOGY
										</span>
									</h2>
									<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-y-1/2 opacity-40'></div>
								</div>

								{/* New descriptive text */}
								<div className='space-y-4'>
									<p className='text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed'>
										Explore cutting-edge innovations in AI, blockchain, IoT, and cloud computing.
										Stay ahead with insights that power the digital transformation shaping tomorrow.
									</p>
									<p className='text-lg text-gray-400'>
										Join a community passionate about technology breakthroughs and future trends.
									</p>
								</div>

								{/* Additional info */}
								<div className='bg-gradient-to-r from-purple-700 to-pink-600 rounded-lg p-6 shadow-lg text-center text-white font-semibold tracking-wide'>
									<p>
										🚀 Discover exclusive interviews, deep tech dives, and expert analyses weekly.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right side - New call to explore button */}
					<div className='lg:w-2/5 order-1 lg:order-2 w-full flex justify-center lg:justify-end'>
						<a
							href='/technology'
							className='inline-block px-10 py-5 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-pink-600 hover:to-violet-600 text-white text-2xl font-extrabold rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300'
							role='button'
							aria-label='Explore Technology'>
							Explore Technology
						</a>
					</div>
				</div>

				{/* Bottom decorative elements */}
				<div className='mt-20 flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}


// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('cta-section-styles')) {
	const style = document.createElement('style')
	style.id = 'cta-section-styles'
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
	`
	document.head.appendChild(style)
}
