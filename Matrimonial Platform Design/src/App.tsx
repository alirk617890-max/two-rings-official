import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilters } from './components/SearchFilters';
import { ProfileGrid } from './components/ProfileGrid';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

export interface Profile {
  id: string;
  name: string;
  age: number;
  city: string;
  profession: string;
  education: string;
  image: string;
  gender: 'male' | 'female';
  height: string;
  religion: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [filters, setFilters] = useState({
    gender: '',
    ageMin: '',
    ageMax: '',
    city: '',
    education: '',
  });

  if (isAdminMode) {
    return <AdminPanel onExit={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <Hero />
      <SearchFilters filters={filters} setFilters={setFilters} />
      <ProfileGrid filters={filters} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}