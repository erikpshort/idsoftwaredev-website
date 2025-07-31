export default function ServicesPage() {
    return (
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3">Custom Website Development</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We build stunning, high-performance websites from the ground up. Whether you need a simple brochure site, a portfolio to showcase your work, or a full-featured e-commerce store, we deliver a product that is fast, secure, and perfectly tailored to your brand. All our sites are fully responsive, ensuring they look great on any device.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3">Web Application Development</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Go beyond a simple website with a custom web application. We can build internal tools to manage your business, customer portals with secure logins, or any other data-driven application you can imagine. We use modern, scalable technologies to ensure your application is reliable and can grow with your business.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3">SMS Campaign Integration & Automation</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect with your customers directly and effectively. We specialize in setting up fully compliant A2P 10DLC SMS campaigns using Twilio. From appointment reminders to marketing promotions, we can build automated messaging flows that save you time and increase engagement, all while adhering to carrier regulations.
              </p>
            </div>

          </div>
        </div>
      </div>
    );
}