import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Idaho Software Development Logo" 
            width={200} 
            height={50}
            className="h-auto"
            priority
          />
        </Link>
        <div className="flex items-center space-x-6">
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
