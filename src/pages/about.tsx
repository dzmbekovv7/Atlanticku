import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Dynamic floating particles */}
			<div className='fixed inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>

			<Container className='relative z-10 py-12 lg:py-20'>
	<section className="mb-24 lg:mb-36 bg-gradient-to-tr from-gray-900 via-indigo-900 to-purple-900 text-white py-20 px-6 lg:px-32 rounded-3xl shadow-lg relative overflow-hidden">

  {/* Абстрактные фоновые фигуры */}
  <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-700 rounded-full mix-blend-screen opacity-30 animate-blob"></div>
  <div className="absolute top-20 right-16 w-96 h-96 bg-indigo-800 rounded-3xl mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 left-20 w-64 h-64 bg-pink-700 rounded-full mix-blend-screen opacity-25 animate-blob animation-delay-4000"></div>

  {/* Заголовок */}
  <div className="max-w-4xl mx-auto text-center mb-20 z-10 relative">
    <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
      <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
        TechPulse Blog
      </span>
      <span className="block text-2xl font-light mt-3 text-indigo-300">
        Your Gateway to Innovation and Future Tech
      </span>
    </h2>
    <p className="max-w-3xl mx-auto text-indigo-300 text-lg leading-relaxed">
      Dive into cutting-edge topics in technology — from artificial intelligence and machine learning to web development and cybersecurity. We simplify complex ideas and deliver them with clarity and style, helping you stay at the forefront of digital evolution.
    </p>
  </div>

  {/* Контент в 2 колонки */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative">

    {/* Левая колонка — Основные темы */}
    <div className="bg-gradient-to-tr from-indigo-800 to-purple-800 rounded-3xl p-10 shadow-2xl border border-indigo-600 hover:scale-[1.03] transition-transform duration-500">
      <h3 className="text-3xl font-semibold mb-6 text-pink-400">Key Focus Areas</h3>
      <ul className="space-y-5 text-indigo-200 font-medium leading-relaxed list-disc list-inside text-lg">
        <li>Artificial Intelligence & Neural Networks</li>
        <li>Cloud Technologies & DevOps</li>
        <li>Frontend & Backend Development</li>
        <li>Data Security & Cyber Defense</li>
        <li>Blockchain & Cryptocurrencies</li>
        <li>Internet of Things (IoT) & Smart Devices</li>
      </ul>
    </div>

    {/* Правая колонка — Цитата и призыв */}
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-indigo-800 rounded-3xl p-10 shadow-2xl border border-pink-600 hover:scale-[1.03] transition-transform duration-500 flex flex-col justify-between">
      <blockquote className="italic text-indigo-300 text-xl leading-relaxed mb-10">
        “Technology doesn't just change the world — it empowers us to reshape our future. Stay informed, stay curious, and be inspired with us.”
      </blockquote>
      <p className="text-pink-400 font-bold text-right text-2xl">
        Join the innovation movement today!
      </p>
    </div>
  </div>

  {/* Анимация для blob */}
  <style>{`
    @keyframes blob {
      0%, 100% {
        border-radius: 42% 58% 63% 37% / 42% 38% 62% 58%;
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        border-radius: 58% 42% 47% 53% / 54% 56% 44% 46%;
        transform: translate(30px, -20px) scale(1.05);
      }
      66% {
        border-radius: 42% 58% 63% 37% / 42% 38% 62% 58%;
        transform: translate(-20px, 30px) scale(0.95);
      }
    }
    .animate-blob {
      animation: blob 7s ease-in-out infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>
<section className="relative bg-white py-24 px-8 lg:px-40 rounded-3xl shadow-lg overflow-hidden">
  {/* Анимированные фоновые элементы */}
  <div className="absolute -top-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 rounded-full opacity-30 animate-pulse-slow"></div>
  <div className="absolute bottom-10 right-20 w-56 h-56 border-4 border-purple-300 rounded-full opacity-20 animate-spin-slow"></div>
  <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-200 rounded-full opacity-25 animate-bounce-slow"></div>
  <svg className="absolute top-10 right-10 w-48 h-48 stroke-purple-300 opacity-10" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <circle cx="24" cy="24" r="23" />
    <path d="M24 1v46M1 24h46" />
  </svg>

  {/* Заголовок */}
  <h2 className="text-5xl font-bold text-gray-900 mb-8 max-w-3xl">
    Our Journey
  </h2>

  {/* Текст */}
  <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
    From a small idea sparked by passion to a thriving tech community, our journey has been one of innovation, perseverance, and growth.  
    We have grown alongside cutting-edge technology, driven by a commitment to empower developers and enthusiasts around the world.  
    Join us as we continue to break new ground and shape the future.
  </p>
</section>

<style>{`
  @keyframes pulse-slow {
    0%, 100% {opacity: 0.3;}
    50% {opacity: 0.6;}
  }
  @keyframes spin-slow {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  @keyframes bounce-slow {
    0%, 100% {transform: translateY(0);}
    50% {transform: translateY(-15px);}
  }
  .animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-bounce-slow {
    animation: bounce-slow 5s ease-in-out infinite;
  }
`}</style>
<section className="relative bg-white mt-[30px] py-24 px-6 lg:px-40 rounded-3xl shadow-lg overflow-hidden">
  {/* Декоративные круги */}
  <div className="absolute top-12 left-10 w-36 h-36 bg-gradient-to-tr from-cyan-300 to-blue-500 rounded-full opacity-20 animate-pulse-slow"></div>
  <div className="absolute bottom-16 right-14 w-48 h-48 border-4 border-blue-400 rounded-full opacity-15 animate-spin-slow"></div>
  <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-200 rounded-full opacity-25 animate-bounce-slow"></div>

  {/* Заголовок */}
  <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-16 max-w-4xl mx-auto">
    Meet Our Values
  </h2>

  {/* Карточки ценностей */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    {[
      {
        title: "Innovation",
        desc: "We constantly push boundaries to create groundbreaking technology solutions that redefine the future.",
        icon: (
          <svg className="w-12 h-12 text-cyan-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7l2-7z" />
          </svg>
        )
      },
      {
        title: "Integrity",
        desc: "We value honesty, transparency, and trust as the foundation of every relationship and product.",
        icon: (
          <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 12v8m0 0l-4-4m4 4l4-4m4-8a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Community",
        desc: "We foster collaboration and learning to build a thriving, inclusive tech community for all.",
        icon: (
          <svg className="w-12 h-12 text-indigo-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 00-8 0v2m5-6a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        )
      },
    ].map((value, i) => (
      <div
        key={i}
        className="bg-gradient-to-tr from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 text-center"
      >
        {value.icon}
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{value.desc}</p>
      </div>
    ))}
  </div>
</section>


<section className="mb-28 mt-[20px] lg:mb-36 px-4">
  <div className="text-center mb-20">
    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Our Tech Visionaries
      </span>
    </h2>
    <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
      Meet the brilliant minds driving innovation, technology, and transformation forward. We’re building the future — one breakthrough at a time.
    </p>
  </div>

<div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-12 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 rounded-3xl overflow-hidden shadow-2xl">

  {/* Фоновые анимированные круги */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-600 rounded-full opacity-30 animate-blob mix-blend-multiply"></div>
  <div className="absolute top-10 right-10 w-48 h-48 bg-indigo-700 rounded-full opacity-25 animate-blob animation-delay-3000 mix-blend-screen"></div>
  <div className="absolute bottom-10 left-1/3 w-40 h-40 border-4 border-pink-500 rounded-full opacity-20 animate-spin-slow"></div>

  {/* Декоративные линии SVG */}
  <svg className="absolute top-0 right-0 w-48 h-48 stroke-pink-400 opacity-20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="23" />
    <path d="M24 1v46M1 24h46" />
  </svg>

  {/* Карточки участников */}
  {[{
    name: "Ava Williams",
    title: "AI Engineer",
    desc: "Specialist in neural network design and LLMs. Ava brings the latest AI models into real-world products.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
  },{
    name: "Daniel Kim",
    title: "Cloud Architect",
    desc: "Designs resilient infrastructures using AWS and GCP. Passionate about automation and scaling digital ecosystems.",
    image: "https://images.unsplash.com/photo-1610563166156-fb6d07ba2d44?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
  },{
    name: "Sophia Lee",
    title: "Cybersecurity Analyst",
    desc: "Protects platforms from threats. Sophia leads our security strategy with deep focus on zero-trust architecture.",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=150&h=150&auto=format&fit=crop&crop=face"
  }].map((member, i) => (
    <div key={i} className="relative bg-gradient-to-br from-purple-800 via-indigo-900 to-pink-900 rounded-3xl shadow-lg border border-pink-600 p-8 text-center cursor-pointer hover:scale-[1.07] hover:shadow-2xl transition-transform duration-500 overflow-hidden">
      {/* Поле для имени — прозрачное, с красивым контуром */}
      <input
        type="text"
        defaultValue={member.name}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-transparent border border-pink-400 rounded-full px-4 py-1 text-center font-semibold text-white text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 w-40"
      />

      {/* Аватарка */}
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-pink-500 mb-6 mt-[40px] relative z-10">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>

      {/* Текстовые блоки */}
      <p className="text-pink-300 font-medium mb-1">{member.title}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{member.desc}</p>

      {/* Дополнительный круг для дизайна */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-500 rounded-full opacity-30 animate-pulse-slow mix-blend-screen"></div>
    </div>
  ))}
</div>

<style>{`
  @keyframes blob {
    0%, 100% {
      border-radius: 42% 58% 63% 37% / 42% 38% 62% 58%;
      transform: translate(0, 0) scale(1);
    }
    33% {
      border-radius: 58% 42% 47% 53% / 54% 56% 44% 46%;
      transform: translate(30px, -20px) scale(1.05);
    }
    66% {
      border-radius: 42% 58% 63% 37% / 42% 38% 62% 58%;
      transform: translate(-20px, 30px) scale(0.95);
    }
  }
  .animate-blob {
    animation: blob 8s ease-in-out infinite;
  }

  @keyframes pulse-slow {
    0%, 100% {opacity: 0.3;}
    50% {opacity: 0.6;}
  }
  .animate-pulse-slow {
    animation: pulse-slow 5s ease-in-out infinite;
  }

  @keyframes spin-slow {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .animate-spin-slow {
    animation: spin-slow 25s linear infinite;
  }
`}</style>

</section>


				{/* Bottom decorative elements */}
				<div className='flex justify-center space-x-8'>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
					<div className='w-2 h-2 bg-violet-500 transform rotate-45'></div>
					<div className='w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
				</div>
			</Container>
		</div>
	)
}

// Add styles to head if not already present
if (typeof document !== 'undefined' && !document.getElementById('about-page-styles')) {
	const style = document.createElement('style')
	style.id = 'about-page-styles'
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

		/* Responsive adjustments for clip-path */
		@media (max-width: 768px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing on mobile */
		@media (max-width: 640px) {
			.transform.skew-x-12,
			.transform.-skew-x-12 {
				transform: none !important;
			}
		}
	`
	document.head.appendChild(style)
}