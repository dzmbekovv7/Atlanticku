import { ContactForm } from '../components/shared/contact-form'
import { Link } from 'react-router'
export function ContactsPage() {
	return (
		<>
			{/* Hero Section */}
	<section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-24 overflow-hidden">
  {/* Floating tech particles */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-12 left-1/4 w-1 h-40 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-12 opacity-30 animate-pulse" />
    <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gradient-to-r from-pink-500 to-transparent transform -rotate-45 opacity-20" />
    <div className="absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-purple-500 to-transparent transform rotate-45 opacity-40" />
    <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-cyan-500 transform rotate-45 opacity-10 animate-spin-slow" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    {/* Main Title */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
      <span className="block hover:translate-x-2 transition-transform duration-500">
        Welcome to
      </span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:-translate-x-2 transition-transform duration-500 -mt-2">
        Tech Insight
      </span>
    </h1>

    <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
      Dive into the latest trends, tutorials, and insights in software development, AI, cloud, and open-source innovation.
    </p>

    {/* Call to Action Buttons */}
    <div className="flex justify-center gap-6 flex-wrap">
      <Link
        to="/blog"
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Read Articles
      </Link>
      <Link
        to="/blog"
        className="px-6 py-3 border border-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-colors duration-300"
      >
        Subscribe
      </Link>
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white py-24 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Image / Graphic */}
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-xl group hover:scale-105 transition-transform duration-500">
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1500&auto=format"
          alt="Tech Preview"
          className="object-cover w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
      </div>
    </div>

    {/* Content */}
    <div>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
        Why We Love Technology
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        From cutting-edge frameworks like Next.js and Astro to advancements in machine learning and web3 — we cover everything modern developers need to stay ahead.
      </p>
      <ul className="space-y-3 text-gray-700 text-base">
        <li>🚀 Weekly dev deep-dives</li>
        <li>📚 Code tutorials & GitHub projects</li>
        <li>🧠 Interviews with software engineers</li>
        <li>🌐 AI, Cloud, Frontend, Backend & more</li>
      </ul>
    </div>
  </div>
</section>
<section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-24 lg:py-32 overflow-hidden">
  {/* Geometric Particles */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-20 left-1/4 w-1 h-60 bg-gradient-to-b from-cyan-400 to-transparent transform rotate-45 opacity-30 animate-pulse" />
    <div className="absolute top-1/2 right-1/5 w-40 h-40 border-2 border-emerald-400 transform rotate-45 opacity-10 animate-spin-slow" />
    <div className="absolute bottom-16 left-1/3 w-24 h-1 bg-gradient-to-r from-violet-500 to-transparent transform -rotate-45 opacity-50" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
        <span className="block">Let's Build the Future</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
          of Technology Together
        </span>
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
        Got questions, ideas, or collaboration offers? We're always open to talk tech, innovation, and the next big thing.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Visual Tech Art */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
          <img
            src="https://aclm.in/wp-content/uploads/2021/08/top11.png"
            alt="Contact Tech"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-pink-600/30" />
        </div>

        {/* Floating glow accent */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 opacity-80 transform rotate-45 animate-bounce"></div>
        <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-emerald-500 rounded-full animate-pulse"></div>
      </div>

      {/* Right: Contact Form */}
      <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-6">
          Fill out the form and our tech team will reach out shortly.
        </p>
        <div className="relative z-10">
          <ContactForm />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse" />
        <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-emerald-500 rounded-full animate-bounce" />
      </div>
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-r from-indigo-700 to-violet-700 py-20 text-white text-center" id="subscribe">
  <div className="max-w-3xl mx-auto px-6">
    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
      Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">Tech Insight</span> Community
    </h3>
    <p className="text-lg mb-8">
      Get updates, dev tips, and early access to exclusive articles straight to your inbox.
    </p>
    <form className="flex flex-col sm:flex-row justify-center gap-4">

      <button
        type="submit"
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

		</>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('contacts-page-styles')) {
	const style = document.createElement('style')
	style.id = 'contacts-page-styles'
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

		/* Responsive adjustments for mobile */
		@media (max-width: 768px) {
			/* Disable clip-path on mobile for better compatibility */
			.lg\\:clip-path-none {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing and alignment */
		.contact-form-container {
			min-height: 400px;
		}

		/* Custom hover effects */
		.contact-stat-card:hover {
			transform: translateY(-4px) scale(1.05);
		}

		/* Gradient text animation */
		@keyframes gradient-shift {
			0% { background-position: 0% 50%; }
			50% { background-position: 100% 50%; }
			100% { background-position: 0% 50%; }
		}

		.animated-gradient {
			background: linear-gradient(-45deg, #8B5CF6, #EC4899, #10B981, #F59E0B);
			background-size: 400% 400%;
			animation: gradient-shift 3s ease infinite;
		}
	`
	document.head.appendChild(style)
}