import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProblemCard } from '@/components/ProblemCard';
import { appliances } from '@/data/appliances';
import { ArrowLeft, Wrench } from 'lucide-react';

const AppliancePage = () => {
  const { applianceId } = useParams();
  const appliance = appliances.find((a) => a.id === applianceId);

  if (!appliance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Appliance Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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

      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Appliances
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{appliance.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{appliance.name}</h1>
              <p className="text-xl text-muted-foreground mt-2">{appliance.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-6">Common Problems & Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appliance.problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              applianceId={appliance.id}
              problemId={problem.id}
              title={problem.title}
              description={problem.description}
              difficulty={problem.difficulty}
              timeEstimate={problem.timeEstimate}
              stepCount={problem.steps.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliancePage;
