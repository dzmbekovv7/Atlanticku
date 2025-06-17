export function TestimonialsSection() {
  return (
    <section className="relative bg-gradient-to-tr from-gray-900 via-indigo-950 to-purple-900 py-24 lg:py-40 overflow-hidden text-white">
      {/* Floating Neon Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 w-3 h-48 bg-gradient-to-b from-purple-500 to-transparent rounded-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-44 h-3 bg-gradient-to-r from-cyan-400 to-transparent rounded-lg opacity-50 -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-56 bg-gradient-to-t from-pink-500 to-transparent rounded-xl opacity-40 rotate-45"></div>
        <div className="absolute top-1/2 right-12 w-32 h-32 border-4 border-cyan-400 rounded-full opacity-25 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            {/* Geometric Glow Background */}
            <div className="absolute -top-14 -left-14 w-28 h-28 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-80 rotate-12"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl opacity-60"></div>

            {/* Title Text with Neon Gradient */}
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none select-none">
              <span className="block hover:translate-x-4 transition-transform duration-600 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                TESTIMONIALS
              </span>
              <span className="block mt-[-12px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 hover:-translate-x-4 transition-transform duration-600 ease-in-out">
                FROM OUR CLIENTS
              </span>
            </h2>

            {/* Neon underline */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm -translate-y-1/2"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-12 -right-12 w-10 h-10 bg-cyan-400 rounded-full animate-bounce"></div>

          {/* Separator */}
          <div className="mt-10 flex justify-center items-center space-x-8">
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
            <div className="w-5 h-5 bg-cyan-400 rounded-full rotate-45"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 p-12 shadow-2xl rounded-3xl"
          style={{
            clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)',
          }}
        >
          {/* Soft Background Glow */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-3xl"
            style={{
              clipPath: 'polygon(0 0, 90% 0, 100% 20%, 90% 100%, 0 100%)',
            }}
          ></div>

          {/* Stats Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg">2K+</div>
              <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">Satisfied Readers</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-purple-400 drop-shadow-lg">98%</div>
              <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">Positive Reviews</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-pink-400 drop-shadow-lg">500+</div>
              <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">Success Stories</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">24/7</div>
              <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold">Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Neon Line */}
        <div className="mt-20 flex justify-center space-x-12">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full rotate-45"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}


// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('testimonials-section-styles')) {
	const style = document.createElement('style')
	style.id = 'testimonials-section-styles'
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
			.clip-path-corner-cut {
				clip-path: none;
			}
		}

		/* Testimonial card height consistency */
		@media (min-width: 1024px) {
			.testimonial-card {
				min-height: 320px;
			}
		}

		@media (min-width: 768px) and (max-width: 1023px) {
			.testimonial-card {
				min-height: 300px;
			}
		}

		@media (max-width: 767px) {
			.testimonial-card {
				min-height: 280px;
			}
		}
	`
	document.head.appendChild(style)
}