import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SearchFiltersProps {
  filters: {
    gender: string;
    ageMin: string;
    ageMax: string;
    city: string;
    education: string;
  };
  setFilters: (filters: any) => void;
}

export function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  return (
    <section id="profiles" className="py-12 bg-white border-b border-pink-100">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100">
          <h2 className="text-3xl text-gray-900 mb-6 text-center">Find Your Perfect Match</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            <Select
              value={filters.gender}
              onValueChange={(value) => setFilters({ ...filters, gender: value })}
            >
              <SelectTrigger className="border-pink-200 focus:ring-pink-500">
                <SelectValue placeholder="Looking for" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bride">Bride</SelectItem>
                <SelectItem value="groom">Groom</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.ageMin}
              onValueChange={(value) => setFilters({ ...filters, ageMin: value })}
            >
              <SelectTrigger className="border-pink-200 focus:ring-pink-500">
                <SelectValue placeholder="Age From" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.ageMax}
              onValueChange={(value) => setFilters({ ...filters, ageMax: value })}
            >
              <SelectTrigger className="border-pink-200 focus:ring-pink-500">
                <SelectValue placeholder="Age To" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.city}
              onValueChange={(value) => setFilters({ ...filters, city: value })}
            >
              <SelectTrigger className="border-pink-200 focus:ring-pink-500">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                <SelectItem value="faisalabad">Faisalabad</SelectItem>
                <SelectItem value="multan">Multan</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
                <SelectItem value="quetta">Quetta</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
