import { Button } from './ui/button';
import { Heart, Shield, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-pink-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
              Pakistan's Trusted Matrimonial Platform
            </div>
            <h1 className="text-5xl md:text-6xl text-gray-900">
              Find Your Perfect
              <span className="text-pink-600"> Life Partner</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join thousands of Pakistani Muslims in their journey to find a compatible match for nikah. 
              Safe, secure, and guided by Islamic values.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6">
                Register Now - It's Free
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6">
                Browse Profiles
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-pink-100">
              <div>
                <div className="text-3xl text-pink-600">50K+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div>
                <div className="text-3xl text-pink-600">10K+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl text-pink-600">100%</div>
                <div className="text-gray-600">Verified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2NTg2MTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy couple"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-2 border-pink-100">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-gray-900">100% Verified</div>
                  <div className="text-sm text-gray-500">Secure Platform</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border-2 border-pink-100">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-gray-900">Active Community</div>
                  <div className="text-sm text-gray-500">50,000+ Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
