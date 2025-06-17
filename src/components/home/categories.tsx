import { useGetArticles } from '@/hooks/useArticles'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]

	return (
		<section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-24 overflow-hidden text-white">
			{/* Animated background circles */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-700 via-purple-800 to-pink-700 rounded-full opacity-20 filter blur-3xl animate-animatePulseSlow"></div>
				<div className="absolute bottom-20 right-1/3 w-56 h-56 bg-gradient-to-tr from-cyan-600 via-blue-700 to-indigo-800 rounded-full opacity-25 filter blur-2xl animate-animatePingSlow"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-1/2 -translate-y-1/2 animate-animatePulseSlow"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center max-w-4xl mx-auto mb-20">
					<h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text select-none">
						Explore Tech Categories
					</h2>
					<p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-300">
						Discover in-depth articles and tutorials spanning Artificial Intelligence, JavaScript, Python, DevOps, cloud computing, cybersecurity, and more.
						Our expertly curated categories help you navigate the vast tech landscape and fuel your passion for innovation and learning.
					</p>
				</div>

				{/* Categories grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
					{isLoading ? (
						Array.from({ length: 8 }).map((_, index) => (
							<div
								key={index}
								className={`h-36 bg-gray-800 rounded-lg animate-pulse ${
									index % 3 === 0
										? 'clip-path-slant-left'
										: index % 3 === 1
										? 'clip-path-slant-right'
										: 'clip-path-corner-cut'
								}`}
							/>
						))
					) : (
						categories.map((category, index) => (
							<a
								key={category}
								href={`/blog?type=${encodeURIComponent(category || '')}`}
								className={`group relative block h-40 rounded-lg shadow-lg overflow-hidden
									${
										index % 6 === 0
											? 'bg-gradient-to-br from-violet-600 to-purple-800'
											: index % 6 === 1
											? 'bg-gradient-to-br from-cyan-600 to-blue-800'
											: index % 6 === 2
											? 'bg-gradient-to-br from-emerald-600 to-teal-800'
											: index % 6 === 3
											? 'bg-gradient-to-br from-amber-500 to-orange-700'
											: index % 6 === 4
											? 'bg-gradient-to-br from-rose-500 to-pink-700'
											: 'bg-gradient-to-br from-indigo-600 to-purple-800'
									}
									clip-path-${['slant-left', 'slant-right', 'corner-cut', 'diamond'][index % 4]}
									transition-transform duration-500 shadow-xl hover:shadow-2xl hover:scale-105 hover:rotate-3
								`}
							>
								{/* Animated geometric accents */}
								<div className="absolute inset-0 opacity-20">
									<div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
									<div className="absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full group-hover:scale-125 transition-transform duration-500"></div>
									<div className="absolute top-1/2 left-1/2 w-16 h-1 bg-white rounded group-hover:w-24 transition-all duration-500 -translate-x-1/2 -translate-y-1/2"></div>
								</div>

								{/* Category title */}
								<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
									<h3 className="text-xl lg:text-2xl font-extrabold text-white tracking-wide select-none group-hover:scale-110 transition-transform duration-300">
										{category?.toUpperCase()}
									</h3>
									<div className="w-14 h-0.5 bg-white/70 mt-2 group-hover:w-24 transition-all duration-300 rounded"></div>
								</div>

								{/* Hover overlay */}
								<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>

								{/* Floating accent dot */}
								<div
									className={`absolute -top-3 -right-3 w-8 h-8 rounded-full shadow-lg flex items-center justify-center
										${['bg-yellow-400', 'bg-white', 'bg-emerald-400'][index % 3]}
										group-hover:scale-125 group-hover:rotate-180 transition-transform duration-500`}
								>
									<div className="w-2 h-2 bg-gray-900 rounded-full group-hover:bg-gray-800"></div>
								</div>
							</a>
						))
					)}
				</div>
			</div>

			{/* Central spinning ring */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="w-28 h-28 border-4 border-purple-600 rounded-full opacity-10 animate-spin-slow"></div>
				<div className="absolute inset-0 w-20 h-20 border-2 border-pink-500 rounded-full opacity-20 animate-ping-slow"></div>
			</div>
		</section>
	)
}

// Добавляем CSS для clip-path и анимаций (если ещё не добавлены)
if (typeof document !== 'undefined' && !document.getElementById('categories-section-styles')) {
	const style = document.createElement('style')
	style.id = 'categories-section-styles'
	style.textContent = `
		/* Clip-path utilities */
		.clip-path-slant-left {
			clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
		}
		.clip-path-slant-right {
			clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
		}
		.clip-path-corner-cut {
			clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
		}
		.clip-path-diamond {
			clip-path: polygon(0 10%, 90% 0, 100% 90%, 10% 100%);
		}

		@keyframes spin-slow {
			from { transform: rotate(0deg); }
			to { transform: rotate(360deg); }
		}
		.animate-spin-slow {
			animation: spin-slow 25s linear infinite;
		}

		@keyframes ping-slow {
			0%, 100% { transform: scale(1); opacity: 0.3; }
			50% { transform: scale(1.2); opacity: 0.6; }
		}
		.animate-ping-slow {
			animation: ping-slow 3.5s ease-in-out infinite;
		}

		@keyframes pulse-slow {
			0%, 100% { opacity: 0.3; }
			50% { opacity: 0.6; }
		}
		.animate-pulse-slow {
			animation: pulse-slow 4s ease-in-out infinite;
		}
	`
	document.head.appendChild(style)
}
