import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <div className="flex justify-center space-x-4 md:space-x-6 mb-4 text-sm">
          <Link href="/sms-signup" className="hover:text-gray-900 transition-colors">
            SMS Updates
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
            Terms of Service
          </Link>
        </div>
        <p>&copy; {currentYear} Idaho Software Development. All rights reserved.</p>
      </div>
    </footer>
  );
}