import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-pink-600 to-pink-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="h-6 w-6 text-pink-600 fill-pink-600" />
              </div>
              <span className="text-2xl">Two Rings Official</span>
            </div>
            <p className="text-pink-100 mb-4">
              Pakistan's most trusted Islamic matrimonial platform helping thousands find their perfect life partner.
            </p>
            <div className="flex gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-100">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#profiles" className="hover:text-white transition-colors">Browse Profiles</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl mb-4">Support</h3>
            <ul className="space-y-2 text-pink-100">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-pink-100">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@asaannikah.pk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-pink-500 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl mb-2">Stay Updated</h3>
            <p className="text-pink-100 mb-4">Subscribe to our newsletter for latest updates and success stories</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-pink-200"
              />
              <Button className="bg-white text-pink-600 hover:bg-pink-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-500 pt-8 text-center text-pink-100">
          <p>&copy; 2024 Two Rings Official. All rights reserved. Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}