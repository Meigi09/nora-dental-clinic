import Link from "next/link";
import { FiCheck, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    icon: "🦷",
    title: "Preventive Care",
    description: "Routine cleanings and check-ups",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    description: "Teeth whitening and veneers",
  },
  {
    icon: "🛡️",
    title: "Restorative Care",
    description: "Fillings, crowns, and bridges",
  },
  {
    icon: "👨‍⚕️",
    title: "Orthodontics",
    description: "Braces and clear aligners",
  },
];

const benefits = [
  "Easy online appointment booking",
  "AI-powered treatment recommendations",
  "Complete patient medical records",
  "Real-time queue management",
  "Secure messaging with doctors",
  "Transparent pricing and billing",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Patient",
    text: "Outstanding service! The system makes it so easy to book appointments and track my dental health.",
  },
  {
    name: "Dr. Michael Brown",
    title: "Clinic Owner",
    text: "This management system has transformed how we operate. Our efficiency has increased by 40%.",
  },
  {
    name: "Emily Davis",
    title: "Receptionist",
    text: "The workflow is intuitive and has reduced our administrative burden significantly.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
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
              Register as Patient
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            Your Smile, Our Priority
          </h2>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience world-class dental care with our advanced management
            system and compassionate team
          </p>
          <div className="space-x-4 flex justify-center">
            <Link
              href="/auth/register"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition"
            >
              Book Your Appointment
            </Link>
            <a
              href="#about"
              className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="about"
          className="py-16 bg-white rounded-lg shadow-md p-8 mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Nora Dental Clinic?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FiCheck className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-700 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Happy Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Expert Dentists</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10000+</div>
              <p className="text-blue-100">Treatments</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 mb-16">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Patients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-12 text-center text-white mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Transform Your Dental Experience?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied patients and book your appointment today
          </p>
          <div className="space-x-4 flex justify-center flex-wrap gap-4">
            <Link
              href="/auth/register"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold transition"
            >
              Create Account
            </Link>
            <Link
              href="/auth/login"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold transition"
            >
              Login Now
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">About Us</h4>
              <p className="text-sm">
                Leading dental clinic with advanced technology and compassionate
                care
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Preventive Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cosmetic Dentistry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Orthodontics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Contact</h4>
              <ul className="text-sm space-y-2">
                <li>📞 (555) 123-4567</li>
                <li>📧 hello@noradental.com</li>
                <li>📍 123 Dental Street, City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Hours</h4>
              <ul className="text-sm space-y-2">
                <li>Mon-Fri: 9AM - 6PM</li>
                <li>Sat: 9AM - 4PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2025 Nora Dental Clinic. All rights reserved.</p>
            <p className="text-sm mt-2">
              Powered by Next.js, Prisma, and Gemini AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
