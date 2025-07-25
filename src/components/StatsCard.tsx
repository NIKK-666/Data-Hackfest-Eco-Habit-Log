import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  description: string;
  variant?: 'default' | 'success' | 'accent';
}

export const StatsCard = ({ title, value, icon, description, variant = 'default' }: StatsCardProps) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-eco border-success shadow-glow text-success-foreground';
      case 'accent':
        return 'bg-gradient-primary border-accent shadow-eco text-primary-foreground';
      default:
        return 'bg-gradient-card border-border shadow-card';
    }
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:scale-[1.02] ${getCardStyles()}`}>
      <div className="flex items-center space-x-4">
        <div className="text-3xl animate-bounce-gentle">
          {icon}
        </div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${
            variant === 'default' ? 'text-muted-foreground' : 'opacity-80'
          }`}>
            {title}
          </p>
          <p className={`text-2xl font-bold ${
            variant === 'default' ? 'text-foreground' : ''
          }`}>
            {value}
          </p>
          <p className={`text-xs ${
            variant === 'default' ? 'text-muted-foreground' : 'opacity-70'
          }`}>
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};