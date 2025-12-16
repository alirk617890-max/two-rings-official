import { CheckCircle, XCircle, Trash2, MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Profile } from '../App';

interface ProfileManagementProps {
  profiles: Profile[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onDelete: (id: string) => void;
  showActions: boolean;
}

export function ProfileManagement({
  profiles,
  onApprove,
  onReject,
  onDelete,
  showActions,
}: ProfileManagementProps) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No profiles to display</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl border border-pink-100 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-32 h-32 rounded-lg object-cover border-2 border-pink-200"
              />
            </div>

            {/* Profile Details */}
            <div className="flex-grow space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl text-gray-900">{profile.name}</h3>
                  <p className="text-gray-600">{profile.age} years old • {profile.gender}</p>
                </div>
                <Badge
                  className={
                    profile.status === 'approved'
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : profile.status === 'rejected'
                      ? 'bg-red-100 text-red-700 border-red-200'
                      : 'bg-orange-100 text-orange-700 border-orange-200'
                  }
                >
                  {profile.status.charAt(0).toUpperCase() + profile.status.slice(1)}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-2">
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
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4 text-pink-500" />
                  <span>Registered: {profile.createdAt}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-pink-100">
                <span className="text-sm text-gray-600">Height: {profile.height}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600">Religion: {profile.religion}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex md:flex-col gap-2 md:min-w-[120px]">
              {showActions && profile.status === 'pending' && (
                <>
                  <Button
                    onClick={() => onApprove(profile.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    onClick={() => onReject(profile.id)}
                    variant="outline"
                    className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </>
              )}
              <Button
                onClick={() => onDelete(profile.id)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
