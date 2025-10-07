import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface ApplianceCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  problemCount: number;
}

export const ApplianceCard = ({ id, name, icon, description, problemCount }: ApplianceCardProps) => {
  return (
    <Link to={`/appliance/${id}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-[var(--shadow-hover)] border-border">
        <CardHeader>
          <div className="text-5xl mb-3">{icon}</div>
          <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
            {name}
            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {problemCount} common {problemCount === 1 ? 'problem' : 'problems'}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
