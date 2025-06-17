import { Container } from './container'
import {  Sparkles } from 'lucide-react'; // если используешь Lucide React иконки
import { useLocation, Link } from 'react-router';
import { useMemo, useState, useEffect} from 'react';

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
      <span className="text-pink-500">tisku</span>
    </div>
  </div>
</div>


	)
}

export function Header() {
	  const location = useLocation();
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const isSpecialBg = useMemo(() => location.pathname === '/contacts' || location.pathname === '/blog' , [location.pathname]);
  const headerBg = isSpecialBg
    ? 'bg-gradient-to-br bg-gray-950'
    : 'bg-gradient-to-br from-white via-indigo-50 to-purple-50 ';
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
      <div className="relative z-20 py-5 lg:py-8 max-w-5xl mx-auto flex items-center justify-between px-6">

        {/* Линки слева - скрыты на мобилках */}
        <nav className="hidden md:flex gap-4 w-1/4">
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
        </nav>

        {/* Title по центру */}
        <div className="flex justify-center flex-grow">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 transform rotate-45 opacity-60"></div>
            <FitnessAltitudeLogo />
          </div>
        </div>

        {/* Линки справа - скрыты на мобилках */}
        <nav className="hidden md:flex gap-4 w-1/4 justify-end">
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
        </nav>

        {/* Кнопка гамбургера на мобилках */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Open mobile menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* Мобильное меню на весь экран */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">

          {/* Анимированные круги и линии (CSS-анимация) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="30%"
              cy="30%"
              r="80"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              fill="none"
              className="animate-pulseSlow"
            />
            <circle
              cx="70%"
              cy="70%"
              r="100"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
              fill="none"
              className="animate-pulseSlow delay-500"
            />
            <line
              x1="10%"
              y1="90%"
              x2="90%"
              y2="10%"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              className="animate-lineMove"
            />
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              className="animate-lineMove delay-700"
            />
          </svg>

          {/* Кнопка закрытия */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-3 rounded-full hover:bg-white/20 transition"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Меню - кнопки по центру */}
          <nav className="flex flex-col items-center justify-center min-h-screen gap-12 px-6 text-white text-3xl font-semibold">
            <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="hover:text-cyan-400 transition">
              About
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/contacts" className="hover:text-cyan-400 transition">
              Contact
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/blog" className="hover:text-cyan-400 transition">
              Blog
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        @keyframes lineMove {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-lineMove {
          stroke-dasharray: 1000;
          animation: lineMove 8s linear infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
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