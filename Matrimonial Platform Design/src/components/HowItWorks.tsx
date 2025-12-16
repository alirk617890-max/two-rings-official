import { UserPlus, Search, MessageCircle, Heart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Register for free and create a detailed profile with your preferences and requirements.',
    step: '01',
  },
  {
    icon: Search,
    title: 'Search & Filter',
    description: 'Use our advanced search filters to find profiles that match your criteria.',
    step: '02',
  },
  {
    icon: MessageCircle,
    title: 'Connect & Communicate',
    description: 'Send interest and communicate with potential matches in a secure environment.',
    step: '03',
  },
  {
    icon: Heart,
    title: 'Find Your Match',
    description: 'Build a connection and take the first step towards your beautiful journey together.',
    step: '04',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your life partner in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-pink-200" />
              )}
              
              <div className="relative bg-white p-6 rounded-xl border-2 border-pink-100 hover:shadow-lg transition-shadow text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                
                <div className="bg-pink-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto mt-4">
                  <step.icon className="h-8 w-8 text-pink-600" />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
