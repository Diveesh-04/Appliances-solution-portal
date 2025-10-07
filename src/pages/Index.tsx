import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ApplianceCard } from '@/components/ApplianceCard';
import { appliances } from '@/data/appliances';
import { Search, Wrench } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-appliances.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppliances = appliances.filter(appliance =>
    appliance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appliance.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Wrench className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Appliance Problem Solution</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <img src={heroImage} alt="Home Appliances" className="w-full h-full object-cover scale-110" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Fix Your Home Appliances
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          Step-by-step troubleshooting guides for common appliance problems. Get expert solutions in minutes.
        </p>
        <div className="max-w-xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for an appliance..."
            className="pl-10 bg-card text-foreground border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
            </div>
            <Button variant="secondary" size="lg">
          Search
            </Button>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Appliances Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-3">Browse by Appliance</h3>
          <p className="text-lg text-muted-foreground">
            Select an appliance to see common problems and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAppliances.map((appliance) => (
            <ApplianceCard
              key={appliance.id}
              id={appliance.id}
              name={appliance.name}
              icon={appliance.icon}
              description={appliance.description}
              problemCount={appliance.problems.length}
            />
          ))}
        </div>

        {filteredAppliances.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No appliances found matching "{searchQuery}"
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Appliance Problem Solution. All rights reserved.</p>
            <p className="mt-2 text-sm">
              For professional repairs or emergencies, always consult a certified technician.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
