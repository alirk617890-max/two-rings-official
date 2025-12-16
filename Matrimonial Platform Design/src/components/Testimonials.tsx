import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sana & Ali',
    city: 'Karachi',
    quote: 'We found each other on AsaanNikah and couldn\'t be happier. The platform made it so easy to connect with someone who shares our values. Alhamdulillah!',
    rating: 5,
  },
  {
    name: 'Hira & Faisal',
    city: 'Lahore',
    quote: 'AsaanNikah provided us with a safe and halal way to find our life partners. The verification process gave us peace of mind. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amna & Bilal',
    city: 'Islamabad',
    quote: 'The best matrimonial platform in Pakistan! We appreciated the Islamic values and the supportive team. May Allah bless this service.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from couples who found their perfect match through AsaanNikah
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl border border-pink-100 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-pink-200" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-pink-500 fill-pink-500" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t border-pink-100 pt-4">
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
