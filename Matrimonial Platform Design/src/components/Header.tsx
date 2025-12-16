import { Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  onAdminClick: () => void;
}

export function Header({ onAdminClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl text-pink-600">Two Rings Official</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">
              Home
            </a>
            <a href="#profiles" className="text-gray-700 hover:text-pink-600 transition-colors">
              Browse Profiles
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">
              Contact
            </a>
            <button
              onClick={onAdminClick}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Admin
            </button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              Login
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              Register Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-pink-100 mt-4">
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-gray-700 hover:text-pink-600 py-2">
                Home
              </a>
              <a href="#profiles" className="text-gray-700 hover:text-pink-600 py-2">
                Browse Profiles
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 py-2">
                How It Works
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 py-2">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 py-2">
                Contact
              </a>
              <button
                onClick={onAdminClick}
                className="text-gray-700 hover:text-pink-600 py-2 text-left"
              >
                Admin
              </button>
              <div className="flex flex-col gap-2 mt-3">
                <Button variant="outline" className="border-pink-300 text-pink-600 w-full">
                  Login
                </Button>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white w-full">
                  Register Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}