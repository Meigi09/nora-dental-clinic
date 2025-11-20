import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-4xl">🦷</span>
            <h1 className="text-3xl font-bold text-blue-600">
              Nora Dental Clinic
            </h1>
          </div>
          <nav className="space-x-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Professional Dental Clinic Management
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Complete management system with AI-powered features for doctors,
            receptionists, and administrators
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-12 text-center text-white mt-8">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Clinic?
          </h3>
          <p className="text-xl mb-8">
            Start managing your dental clinic efficiently with Nora Dental
            Management System
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold"
            >
              Login Now
            </Link>
            <Link
              href="/auth/register"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Create Account
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; 2025 Nora Dental Clinic Management System. All rights
            reserved.
          </p>
          <p className="text-sm mt-2">
            Powered by Next.js, Prisma, and Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}
