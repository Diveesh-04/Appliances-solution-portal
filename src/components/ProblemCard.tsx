import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ChevronRight } from 'lucide-react';

interface ProblemCardProps {
  applianceId: string;
  problemId: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: string;
  stepCount: number;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export const ProblemCard = ({
  applianceId,
  problemId,
  title,
  description,
  difficulty,
  timeEstimate,
  stepCount,
}: ProblemCardProps) => {
  return (
    <Link to={`/solution/${applianceId}/${problemId}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-[var(--shadow-hover)] border-border">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="group-hover:text-primary transition-colors text-lg">
              {title}
            </CardTitle>
            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge className={difficultyColors[difficulty]} variant="secondary">
              {difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {timeEstimate}
            </div>
            <span className="text-sm text-muted-foreground">
              {stepCount} steps
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
