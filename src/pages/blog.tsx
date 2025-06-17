import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 overflow-hidden'>
				{/* Dynamic floating particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-30'></div>
					<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-50'></div>
				</div>

				<Container>
					<section className='relative z-10 py-20'>
						{/* Loading state with geometric design */}
						<div className='text-center space-y-8'>
							<div className='relative inline-block'>
								<h1 className='text-4xl lg:text-6xl font-black text-gray-900 leading-tight'>
									<span className='block'>ЗАГРУЖАЕМ</span>
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 -mt-2'>
										КОНТЕНТ
									</span>
								</h1>
								<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
							</div>
							
							{/* Loading spinner */}
							<div className='flex justify-center'>
								<div className='w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin'></div>
							</div>
						</div>

						{/* Loading skeleton grid */}
						<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{Array.from({ length: 6 }).map((_, index) => (
								<div key={index} className='group relative'>
									<div className={`
										relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse shadow-xl transform hover:scale-105 transition-all duration-500
										${index % 3 === 0 
											? 'clip-path-slant-left'
											: index % 3 === 1
											? 'clip-path-corner-cut'
											: 'clip-path-slant-right'
										}
									`}>
									</div>
									<div className={`
										absolute -top-2 -right-2 w-8 h-8 rounded-full animate-pulse
										${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'}
									`}></div>
								</div>
							))}
						</div>
					</section>
				</Container>
			</div>
		)
	}

	if (isError) {
		return (
			<div className='relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden'>
				{/* Error state particles */}
				<div className='absolute inset-0 pointer-events-none'>
					<div className='absolute top-20 left-1/4 w-2 h-32 bg-gradient-to-b from-red-500 to-transparent transform rotate-12 opacity-40 animate-pulse'></div>
					<div className='absolute top-1/3 right-1/4 w-24 h-2 bg-gradient-to-r from-orange-500 to-transparent transform -rotate-45 opacity-30'></div>
				</div>

				<Container>
					<section className='relative z-10 py-20'>
						<div className='text-center space-y-8'>
							<div className='relative inline-block'>
								<h1 className='text-4xl lg:text-6xl font-black text-gray-900 leading-tight'>
									<span className='block'>ОШИБКА</span>
									<span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 -mt-2'>
										ЗАГРУЗКИ
									</span>
								</h1>
								<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -translate-y-1/2 opacity-50'></div>
							</div>
							
							<p className='text-xl text-gray-700 max-w-2xl mx-auto'>
								Не удалось загрузить статьи. Пожалуйста, попробуйте позже или 
								<span className='bg-yellow-200 px-2 py-1 rounded-lg font-bold text-gray-900 mx-1'>
									обновите страницу
								</span>
							</p>

							<div className='pt-6'>
								<button 
									onClick={() => window.location.reload()}
									className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
									style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 90% 100%, 0 100%)'}}>
									<span>Обновить страницу</span>
									<div className='ml-4 w-6 h-6 bg-white/20 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-300'>
										<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
										</svg>
									</div>
								</button>
							</div>
						</div>
					</section>
				</Container>
			</div>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<div className='relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-28 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/6 w-1 h-52 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/3 w-32 h-32 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container>
			<section className='relative z-10 py-20 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white'>
  {/* Top floating elements */}
  <div className='absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-indigo-600/10 transform rotate-45 opacity-40'></div>
  <div className='absolute -bottom-12 -right-12 w-28 h-28 bg-gradient-to-br from-pink-400/10 to-violet-600/10 rounded-full opacity-30'></div>

  <div className='relative max-w-6xl mx-auto px-6'>
    {/* Title */}
    <div className='text-center mb-20'>
      <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight'>
        <span className='block transition-transform hover:translate-x-2 duration-500'>TECHNOLOGY</span>
        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 transform hover:-translate-x-2 transition duration-500 -mt-2'>
          BLOG
        </span>
      </h1>
      <p className='mt-6 text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto'>
        Insights, tutorials, and trends about
        <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-lg font-bold mx-2 inline-block hover:scale-105 transition-transform'>
          AI, Code & Future Tech
        </span>
      </p>
    </div>

    {/* Optional: filter section remains as is if `type` exists */}
    {/* ... оставь фильтр, как ты сделал — он шикарный и адаптивный ... */}

    {/* Articles Section */}
    {filteredArticles && filteredArticles.length > 0 ? (
      <div className='relative'>
        {/* Background geometric accents */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0'>
          <div className='w-40 h-40 border-4 border-purple-400 transform rotate-45 opacity-10 animate-spin-slow'></div>
        </div>

        <div className='relative z-10 grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {filteredArticles.map((article, index) => (
            <div key={article.id} className='group relative'>
              <div className={`
                relative min-h-[400px] flex flex-col p-4 shadow-2xl rounded-2xl transition-transform duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden
          
              `}>
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none'></div>
                <div className='relative z-10 flex-1'>
                  <ArticleCardMedium article={article} />
                </div>

                {/* Floating glow shapes */}
                <div className='absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full animate-pulse'></div>
                <div className='absolute bottom-3 left-3 w-5 h-5 bg-cyan-400 transform rotate-45 animate-bounce'></div>
              </div>

              {/* Index badge */}
              <div className='absolute -top-2 -left-2 w-8 h-8 bg-indigo-700 text-white font-bold text-sm flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition duration-300'>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className='text-center py-24'>
        <h3 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
          No articles found{type ? ` for "${type}"` : ''}.
        </h3>
        <p className='text-lg text-gray-400 mb-6'>Try changing the filter or explore all topics.</p>
        {type && (
          <Link
            to='/blog'
            className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform'
          >
            View All Articles
          </Link>
        )}
      </div>
    )}
  </div>
</section>

			</Container>
		</div>
	)
}

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('blog-page-styles')) {
	const style = document.createElement('style')
	style.id = 'blog-page-styles'
	style.textContent = `
		/* Clip-path utilities for geometric shapes */
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

		/* Responsive adjustments */
		@media (max-width: 768px) {
			.clip-path-slant-left,
			.clip-path-slant-right,
			.clip-path-corner-cut,
			.clip-path-diamond {
				clip-path: none;
				border-radius: 12px;
			}
		}

		/* Ensure proper spacing and heights */
		@media (min-width: 1280px) {
			.blog-article-card {
				min-height: 400px;
			}
		}

		@media (min-width: 768px) and (max-width: 1279px) {
			.blog-article-card {
				min-height: 380px;
			}
		}

		@media (max-width: 767px) {
			.blog-article-card {
				min-height: 350px;
			}
		}
	`
	document.head.appendChild(style)
}