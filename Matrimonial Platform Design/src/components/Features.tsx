import { Shield, Users, Search, Lock, CheckCircle, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% Verified Profiles',
    description: 'All profiles are manually verified by our team to ensure authenticity and safety.',
  },
  {
    icon: Lock,
    title: 'Privacy & Security',
    description: 'Your personal information is protected with advanced security measures.',
  },
  {
    icon: Search,
    title: 'Advanced Matching',
    description: 'Find compatible matches based on your preferences, values, and requirements.',
  },
  {
    icon: Users,
    title: 'Large Community',
    description: 'Join 50,000+ verified members actively looking for their life partner.',
  },
  {
    icon: CheckCircle,
    title: 'Islamic Values',
    description: 'Platform designed with Islamic principles and values at its core.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you in your journey.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Why Choose AsaanNikah?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a safe, secure, and halal way to find your perfect life partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl border border-pink-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
