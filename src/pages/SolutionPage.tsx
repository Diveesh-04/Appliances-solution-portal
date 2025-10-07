import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StepCard } from '@/components/StepCard';
import { appliances } from '@/data/appliances';
import { ArrowLeft, Clock, Wrench, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const SolutionPage = () => {
  const { applianceId, problemId } = useParams();
  const appliance = appliances.find((a) => a.id === applianceId);
  const problem = appliance?.problems.find((p) => p.id === problemId);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  if (!appliance || !problem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const toggleStepCompletion = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const progress = Math.round((completedSteps.size / problem.steps.length) * 100);

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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to={`/appliance/${applianceId}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {appliance.name}
          </Button>
        </Link>

        {/* Problem Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{appliance.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{problem.title}</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">{problem.description}</p>

          <div className="flex items-center gap-3 flex-wrap">
            <Badge className={difficultyColors[problem.difficulty]} variant="secondary">
              {problem.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{problem.timeEstimate}</span>
            </div>
            <span className="text-muted-foreground">
              {problem.steps.length} steps
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 p-6 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Progress</span>
            <span className="text-sm text-muted-foreground">
              {completedSteps.size} of {problem.steps.length} steps completed
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Solution</h2>
          {problem.steps.map((step) => (
            <div key={step.id} className="relative">
              <div
                className="cursor-pointer"
                onClick={() => toggleStepCompletion(step.id)}
              >
                <StepCard
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  warning={step.warning}
                />
              </div>
              {completedSteps.has(step.id) && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {completedSteps.size === problem.steps.length && (
          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100">All Steps Completed!</h3>
                <p className="text-green-700 dark:text-green-200">
                  Great job! If the problem persists, consider contacting a professional technician.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Safety Notice */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-accent">⚠️</span>
            Safety First
          </h3>
          <p className="text-muted-foreground text-sm">
            Always prioritize safety when working with appliances. If you're unsure about any step or if the problem involves electrical work, gas lines, or refrigerant, contact a licensed professional. Disconnect power before servicing electrical appliances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
