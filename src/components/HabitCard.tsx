import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Habit {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
}

interface HabitCardProps {
  habit: Habit;
  isCompleted: boolean;
  onToggle: (habitId: string) => void;
}

export const HabitCard = ({ habit, isCompleted, onToggle }: HabitCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(habit.id);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <Card className={`p-4 transition-all duration-300 hover:shadow-card hover:scale-[1.02] ${
      isCompleted ? 'bg-gradient-card border-success shadow-glow' : 'bg-card hover:bg-gradient-subtle'
    } ${isAnimating ? 'animate-pulse-eco' : ''}`}>
      <div className="flex items-center space-x-4">
        <div className={`text-3xl transition-transform duration-300 ${
          isCompleted ? 'animate-bounce-gentle' : ''
        }`}>
          {habit.icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`font-semibold transition-colors duration-300 ${
              isCompleted ? 'text-success' : 'text-foreground'
            }`}>
              {habit.title}
            </h3>
            <div className="flex items-center space-x-3">
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                isCompleted 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                +{habit.points} pts
              </span>
              <Checkbox
                checked={isCompleted}
                onCheckedChange={handleToggle}
                className="w-5 h-5"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {habit.description}
          </p>
        </div>
      </div>
    </Card>
  );
};