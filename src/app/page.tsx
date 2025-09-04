import ContactForm from '@/components/ContactForm';
import { Code, Smartphone, MessageSquareQuote } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-down">
            Build Your Vision in Code
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Idaho Software Development creates fast, reliable, and beautiful websites and applications for small businesses across Idaho. Let&apos;s bring your idea to life.
          </p>
          <div className="mt-8">
            <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg inline-block transform hover:scale-105">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Do</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">From simple landing pages to complex web applications, we provide the tools you need to succeed online.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Code className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Websites</h3>
              <p className="text-gray-600">Professional, mobile-friendly websites that represent your brand and attract customers.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Smartphone className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Applications</h3>
              <p className="text-gray-600">Interactive applications with databases and user logins to streamline your business.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <MessageSquareQuote className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMS & Automation</h3>
              <p className="text-gray-600">Engage your customers directly with compliant SMS campaigns and automated workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Simple Process</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">We make the journey from idea to launch clear and straightforward.</p>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white z-10">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Discovery</h3>
                <p className="text-gray-600">We start by understanding your vision, goals, and requirements for the project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white z-10">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Design & Build</h3>
                <p className="text-gray-600">We create a design and develop the core functionality, keeping you updated along the way.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white z-10">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Review & Refine</h3>
                <p className="text-gray-600">You review the project, provide feedback, and we make the necessary adjustments.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-teal-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white z-10">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Launch & Support</h3>
                <p className="text-gray-600">We deploy your project to the world and provide ongoing support to ensure its success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-6 items-center text-center">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className=" text-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">A Local Developer You Can Trust</h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                          My name is Erik Short, and I&apos;m the founder of Idaho Software Development. Based right here in the Treasure Valley, I&apos;m passionate about helping local businesses thrive by providing high-quality, affordable technology solutions. I&apos;m not a faceless agency; I&apos;m your neighbor, dedicated to building strong, lasting relationships with my clients.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                          When you work with me, you get a direct line of communication and a partner who is genuinely invested in your success.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-6 italic">&quot;Erik has been an invaluable technology partner. He&apos;s built several custom applications for my businesses, and each time he&apos;s delivered a rock-solid product that fits our unique needs perfectly. He&apos;s great at understanding the business goals behind the software.&quot;</p>
              <p className="font-bold text-gray-900">Simon Vander Woude</p>
              <p className="text-sm text-teal-600">Vander Woude Enterprises</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-6 italic">&quot;We came to Erik with a complex idea for a health and safety application, and he has been crushing it. His attention to detail and commitment to getting things right are exactly what you need for a project this critical. We&apos;re excited to continue our work with him.&quot;</p>
              <p className="font-bold text-gray-900">Mike Gugino</p>
              <p className="text-sm text-teal-600">The GMN Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
