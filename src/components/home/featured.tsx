import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import ArticleCardSmallSkeleton from '../shared/article-card/article-card-small-skeleton'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className="relative overflow-hidden bg-[#0f172a] text-white py-24 px-4 sm:px-6 lg:px-8">
			{/* Background animated circles */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-0 left-1/4"></div>
				<div className="absolute w-80 h-80 bg-gradient-to-br from-pink-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping bottom-0 right-1/4"></div>
				<div className="absolute w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10 top-1/2 animate-pulse"></div>
			</div>

			{/* Title + Description */}
			<div className="max-w-7xl mx-auto text-center mb-20">
				<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
					Tech Insights & Innovation
				</h2>
				<p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
					Welcome to our blog where we explore the latest trends in Artificial Intelligence, JavaScript, Python, cloud computing, and more. Stay informed with expert analysis, cutting-edge tutorials, and real-world tech solutions shaping the future of development.
				</p>
			</div>

			{/* Articles grid */}
			<div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
				{isLoading
					? [...Array(6)].map((_, index) => (
							<div
								key={index}
								className="rounded-xl bg-[#1f2937] border border-white/10 p-4 shadow-md"
							>
								<ArticleCardSmallSkeleton />
							</div>
					  ))
					: articles?.slice(0, 6).map((article) => (
							<div
								key={article.id}
								className="rounded-xl bg-[#1f2937] border border-white/10 p-4 hover:bg-[#2a3349] transition-colors duration-300 shadow-lg"
							>
								<ArticleCardSmall article={article} />
							</div>
					  ))}
			</div>

			{/* CTA */}
			<div className="mt-20 text-center">
				<a
					href="/blog"
					className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300"
				>
					Explore All Articles →
				</a>
			</div>
		</section>
	)
}
