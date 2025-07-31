import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
        <div className="flex justify-center space-x-4 md:space-x-6 mb-4 text-sm">
          <Link href="/sms-signup" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            SMS Updates
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <p>&copy; {currentYear} Idaho Software Development. All rights reserved.</p>
      </div>
    </footer>
  );
}