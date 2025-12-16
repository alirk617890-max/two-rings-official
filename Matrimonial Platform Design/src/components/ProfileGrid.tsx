import { ProfileCard } from './ProfileCard';
import type { Profile } from '../App';

interface ProfileGridProps {
  filters: {
    gender: string;
    ageMin: string;
    ageMax: string;
    city: string;
    education: string;
  };
}

// Mock data for demonstration
const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    age: 26,
    city: 'Karachi',
    profession: 'Software Engineer',
    education: 'Masters in Computer Science',
    image: 'https://images.unsplash.com/photo-1734865812496-b2fe2e1a56ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'female',
    height: '5\'4"',
    religion: 'Islam - Sunni',
  },
  {
    id: '2',
    name: 'Ahmed Ali',
    age: 29,
    city: 'Lahore',
    profession: 'Business Owner',
    education: 'MBA',
    image: 'https://images.unsplash.com/photo-1630921465299-a78bec886479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWtpc3RhbmklMjBtYW58ZW58MXx8fHwxNzY1ODYxNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'male',
    height: '5\'10"',
    religion: 'Islam - Sunni',
  },
  {
    id: '3',
    name: 'Fatima Ahmed',
    age: 24,
    city: 'Islamabad',
    profession: 'Doctor',
    education: 'MBBS',
    image: 'https://images.unsplash.com/photo-1764641697973-1e55796073bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG11c2xpbSUyMGJyaWRlfGVufDF8fHx8MTc2NTg2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'female',
    height: '5\'3"',
    religion: 'Islam - Sunni',
  },
  {
    id: '4',
    name: 'Hassan Raza',
    age: 31,
    city: 'Karachi',
    profession: 'Civil Engineer',
    education: 'Bachelors in Engineering',
    image: 'https://images.unsplash.com/photo-1630921465299-a78bec886479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWtpc3RhbmklMjBtYW58ZW58MXx8fHwxNzY1ODYxNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'male',
    height: '6\'0"',
    religion: 'Islam - Sunni',
  },
  {
    id: '5',
    name: 'Zainab Malik',
    age: 27,
    city: 'Lahore',
    profession: 'Teacher',
    education: 'Masters in Education',
    image: 'https://images.unsplash.com/photo-1734865812496-b2fe2e1a56ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWtpc3RhbmklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTg2MTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'female',
    height: '5\'5"',
    religion: 'Islam - Sunni',
  },
  {
    id: '6',
    name: 'Usman Tariq',
    age: 28,
    city: 'Rawalpindi',
    profession: 'Banker',
    education: 'Masters in Finance',
    image: 'https://images.unsplash.com/photo-1630921465299-a78bec886479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWtpc3RhbmklMjBtYW58ZW58MXx8fHwxNzY1ODYxNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gender: 'male',
    height: '5\'9"',
    religion: 'Islam - Sunni',
  },
];

export function ProfileGrid({ filters }: ProfileGridProps) {
  // Simple filtering logic
  const filteredProfiles = mockProfiles.filter((profile) => {
    if (filters.gender && filters.gender === 'bride' && profile.gender !== 'female') return false;
    if (filters.gender && filters.gender === 'groom' && profile.gender !== 'male') return false;
    if (filters.ageMin && profile.age < parseInt(filters.ageMin)) return false;
    if (filters.ageMax && profile.age > parseInt(filters.ageMax)) return false;
    if (filters.city && profile.city.toLowerCase() !== filters.city.toLowerCase()) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Featured Profiles</h2>
          <p className="text-xl text-gray-600">
            Discover verified profiles of individuals seeking their life partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No profiles found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
