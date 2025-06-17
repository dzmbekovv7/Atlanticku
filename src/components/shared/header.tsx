import { useGetArticles } from '@/hooks/useArticles'
import { Container } from './container'
import {  Sparkles } from 'lucide-react'; // если используешь Lucide React иконки
import { useLocation, Link } from 'react-router';
import { useMemo} from 'react';

function FitnessAltitudeLogo() {

	return (
<div className={`flex items-center gap-4 group `}>
  {/* Логотип с иконкой */}
  <div className="relative px-6 py-3 rounded-xl bg-white shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-500">

    {/* Иконка сверху слева */}
    <div className="absolute -top-3 -left-3 bg-white p-2 rounded-full shadow-lg transition-transform duration-500 group-hover:rotate-6">
      <Sparkles className="w-5 h-5 text-purple-500" />
    </div>

    {/* Название логотипа */}
    <div className="text-2xl font-extrabold tracking-wider flex items-center gap-1">
      <span className="text-gray-900">Atlan</span>
      <span className="text-pink-500">ticku</span>
    </div>
  </div>
</div>


	)
}

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]
	  const location = useLocation();
  const isSpecialBg = useMemo(() => location.pathname === '/contacts' || location.pathname === '/blog' , [location.pathname]);
  const headerBg = isSpecialBg
    ? 'bg-gradient-to-br bg-gray-950'
    : 'bg-gradient-to-br from-white via-indigo-50 to-purple-50 ';
  const textColor = isSpecialBg ? 'text-white' : 'text-gray-900';
  const linkHoverColor = isSpecialBg ? 'hover:text-violet-400' : 'hover:text-indigo-600';
	return (
		<header className={`relative bg-gradient-to-br ${headerBg} overflow-hidden`}>
			{/* Dynamic floating particles */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-4 left-1/4 w-2 h-16 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse"></div>
				<div className="absolute top-8 right-1/4 w-20 h-1 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-20"></div>
				<div className="absolute bottom-4 left-1/3 w-1 h-20 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-40"></div>
				<div className="absolute top-1/2 right-1/6 w-12 h-12 border-2 border-cyan-400 transform rotate-45 opacity-10 animate-spin-slow"></div>
			</div>

			<Container>
		<div className="relative z-10 py-6 lg:py-8">
  <div className="flex flex-col space-y-8">

    {/* Верхняя панель с линками и логотипом */}
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-6">

      {/* Линки слева */}
      <div className="flex gap-4">
        <Link
          to="/about"
          className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-purple-600 to-violet-700 shadow-md hover:shadow-xl transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/"
          className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md hover:shadow-xl transition-all duration-300"
        >
          Home
        </Link>
      </div>

      {/* Логотип по центру */}
      <div className="relative">
        {/* Геометрический фон */}
        <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-60"></div>
        <FitnessAltitudeLogo />
      </div>

      {/* Линки справа */}
      <div className="flex gap-4">
        <Link
          to="/contacts"
          className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 shadow-md hover:shadow-xl transition-all duration-300"
        >
          Contact
        </Link>
        <Link
          to="/blog"
          className="px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 shadow-md hover:shadow-xl transition-all duration-300"
        >
          Blog
        </Link>
		
      </div>
    </div>


    {/* Декоративная линия снизу */}
    <div className="flex justify-center space-x-4">
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      <div className="w-1 h-1 bg-violet-500 transform rotate-45"></div>
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
    </div>
  </div>
</div>

			</Container>

			{/* Add custom styles */}
			<style>{`
				/* Clip-path utilities for geometric shapes */
				.clip-path-slant-left {
					clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
				}

				.clip-path-slant-right {
					clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
				}

				.clip-path-corner-cut {
					clip-path: polygon(0 0, 100% 0, 100% 75%, 25% 100%, 0 25%);
				}

				.clip-path-diamond {
					clip-path: polygon(0 20%, 80% 0, 100% 80%, 20% 100%);
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
					[style*="clip-path"] {
						clip-path: none !important;
					}
				}
			`}</style>
		</header>
	)
}