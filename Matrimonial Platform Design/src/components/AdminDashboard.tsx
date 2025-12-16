import { useState } from 'react';
import { Heart, LogOut, Users, Clock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ProfileManagement } from './ProfileManagement';
import type { Profile } from '../App';

interface AdminDashboardProps {
  onLogout: () => void;
  onExit: () => void;
}

// Mock profiles data with different statuses
const initialProfiles: Profile[] = [
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
    status: 'approved',
    createdAt: '2024-12-10',
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
    status: 'pending',
    createdAt: '2024-12-15',
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
    status: 'pending',
    createdAt: '2024-12-14',
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
    status: 'approved',
    createdAt: '2024-12-08',
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
    status: 'pending',
    createdAt: '2024-12-16',
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
    status: 'approved',
    createdAt: '2024-12-12',
  },
];

export function AdminDashboard({ onLogout, onExit }: AdminDashboardProps) {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);

  const pendingProfiles = profiles.filter(p => p.status === 'pending');
  const approvedProfiles = profiles.filter(p => p.status === 'approved');
  const rejectedProfiles = profiles.filter(p => p.status === 'rejected');

  const handleApprove = (id: string) => {
    setProfiles(profiles.map(p => 
      p.id === id ? { ...p, status: 'approved' as const } : p
    ));
  };

  const handleReject = (id: string) => {
    setProfiles(profiles.map(p => 
      p.id === id ? { ...p, status: 'rejected' as const } : p
    ));
  };

  const handleDelete = (id: string) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onExit}
                className="text-gray-600 hover:text-pink-600"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Button>
              <div className="h-6 w-px bg-pink-200" />
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white fill-white" />
                </div>
                <div>
                  <h1 className="text-xl text-gray-900">Admin Dashboard</h1>
                  <p className="text-sm text-gray-600">Two Rings Official</p>
                </div>
              </div>
            </div>

            <Button
              onClick={onLogout}
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600">Total Profiles</h3>
              <Users className="h-8 w-8 text-pink-600" />
            </div>
            <p className="text-3xl text-gray-900">{profiles.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600">Pending</h3>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-3xl text-gray-900">{pendingProfiles.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600">Approved</h3>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900">{approvedProfiles.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600">Rejected</h3>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900">{rejectedProfiles.length}</p>
          </div>
        </div>

        {/* Profile Management Tabs */}
        <div className="bg-white rounded-xl shadow-md border border-pink-100 p-6">
          <Tabs defaultValue="pending" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="pending" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
                Pending ({pendingProfiles.length})
              </TabsTrigger>
              <TabsTrigger value="approved" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
                Approved ({approvedProfiles.length})
              </TabsTrigger>
              <TabsTrigger value="rejected" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
                Rejected ({rejectedProfiles.length})
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">
                All Profiles ({profiles.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pending">
              <ProfileManagement
                profiles={pendingProfiles}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                showActions={true}
              />
            </TabsContent>

            <TabsContent value="approved">
              <ProfileManagement
                profiles={approvedProfiles}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                showActions={false}
              />
            </TabsContent>

            <TabsContent value="rejected">
              <ProfileManagement
                profiles={rejectedProfiles}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                showActions={false}
              />
            </TabsContent>

            <TabsContent value="all">
              <ProfileManagement
                profiles={profiles}
                onApprove={handleApprove}
                onReject={handleReject}
                onDelete={handleDelete}
                showActions={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
