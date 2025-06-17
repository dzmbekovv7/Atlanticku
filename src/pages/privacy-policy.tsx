import { Container } from '../components/shared/container'

export const PrivacyPolicyPage = () => {
	return (
		<div className='relative bg-gradient-to-tr  bg-gray-950 to-blackmin-h-screen overflow-hidden'>
			{/* Dynamic floating particles */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-20 left-1/4 w-2 h-48 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>
<Container className="relative z-10 py-24 lg:py-32 bg-gradient-to-br bg-gray-950to-black text-white overflow-hidden px-6">

  {/* Заголовок */}
  <div className="text-center mb-24 max-w-4xl mx-auto">
    <h1 className="text-6xl font-extrabold uppercase tracking-widest drop-shadow-lg select-none">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
        Atlanticku
      </span>
    </h1>

    <p className="mt-6 text-xl max-w-3xl mx-auto font-light text-indigo-300 leading-relaxed tracking-wide">
      Empowering the future with cutting-edge technology, from AI to blockchain — innovating for a smarter world.
    </p>
  </div>

  {/* Privacy Policy */}
  <div className="max-w-5xl mx-auto bg-indigo-900 bg-opacity-40 rounded-3xl shadow-2xl backdrop-blur-sm p-12 border border-indigo-700 hover:border-cyan-400 transition-all duration-500">

    <h2 className="text-4xl font-semibold mb-10 border-b border-indigo-600 pb-4 select-none tracking-wide">
      Privacy Policy
    </h2>

    <div className="space-y-8 text-indigo-100 text-lg leading-relaxed tracking-wide font-medium">

      <p className="transition-colors duration-300 hover:text-cyan-300">
        Your privacy is critically important to us at <strong>Atlanticku</strong>. We are dedicated to protecting the personal information you share and being transparent about how it is used.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Information We Collect:</strong> This includes data you provide such as your name and email, as well as technical details like IP address and device type to enhance your experience.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Usage of Information:</strong> Your data allows us to personalize services, communicate updates, maintain security, and improve our platform — never selling or renting your information.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Data Security:</strong> We implement state-of-the-art encryption, secure servers, and continuous monitoring to safeguard your information against threats.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Your Rights:</strong> You control your data — access, correct, or delete your information anytime by contacting us.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Cookies & Tracking:</strong> We use cookies to analyze site traffic and provide tailored content. Manage your preferences via your browser settings.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Third-Party Links:</strong> Our site may link to external services. We encourage reviewing their privacy policies, as we aren't responsible for their practices.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        <strong>Policy Updates:</strong> Changes to this policy will be communicated clearly. Continued use of our site signifies acceptance of updates.
      </p>

      <p className="transition-colors duration-300 hover:text-cyan-300">
        Thank you for trusting Atlanticku. We are committed to protecting your privacy every step of the way.
      </p>

      <p className="text-sm text-indigo-400 italic select-none mt-8 tracking-wide">
        Last updated: June 2025
      </p>
    </div>
  </div>
</Container>



			<style>{`
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

				/* Mobile responsiveness */
				@media (max-width: 768px) {
					.clip-path-slant-left,
					.clip-path-slant-right,
					.clip-path-corner-cut {
						clip-path: none;
						border-radius: 0.5rem;
					}
				}
			`}</style>
		</div>
	)
}