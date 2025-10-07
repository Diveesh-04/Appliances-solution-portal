import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  warning?: string;
}

export const StepCard = ({ stepNumber, title, description, warning }: StepCardProps) => {
  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            {stepNumber}
          </div>
          <CardTitle className="text-xl pt-1">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pl-14">
        <p className="text-foreground/90 mb-4">{description}</p>
        {warning && (
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{warning}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};
