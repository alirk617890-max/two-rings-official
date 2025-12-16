import { MapPin, Briefcase, GraduationCap, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Profile } from '../App';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-pink-100">
      {/* Profile Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-green-500 text-white border-0">Verified</Badge>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl text-gray-900">{profile.name}</h3>
            <p className="text-gray-600">{profile.age} years old</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4 text-pink-500" />
            <span>{profile.city}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="h-4 w-4 text-pink-500" />
            <span>{profile.profession}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="h-4 w-4 text-pink-500" />
            <span>{profile.education}</span>
          </div>
        </div>

        <div className="border-t border-pink-100 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Height:</span>
            <span className="text-gray-900">{profile.height}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Religion:</span>
            <span className="text-gray-900">{profile.religion}</span>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white">
            <Heart className="h-4 w-4 mr-2" />
            Interested
          </Button>
          <Button variant="outline" className="flex-1 border-pink-300 text-pink-600 hover:bg-pink-50">
            <MessageCircle className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
