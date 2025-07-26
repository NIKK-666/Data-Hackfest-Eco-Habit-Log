import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { useState } from "react";

interface AITipCardProps {
  tip: string;
  onRefresh?: () => void;
}

const sampleTips = [
  "Try using a reusable water bottle today - you'll save money and reduce plastic waste!",
  "Consider walking or biking for trips under 2 miles. Your body and the planet will thank you!",
  "Unplug electronics when not in use. This simple habit can reduce your energy bill by 10%.",
  "Choose one plant-based meal today. It's a delicious way to lower your carbon footprint!",
  "Bring reusable bags on your next shopping trip - many stores offer discounts for eco-friendly shoppers!",
];

export const AITipCard = ({ tip: initialTip, onRefresh }: AITipCardProps) => {
  const [tip, setTip] = useState(initialTip);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    
    // Simulate AI tip generation
    setTimeout(() => {
      const randomTip = sampleTips[Math.floor(Math.random() * sampleTips.length)];
      setTip(randomTip);
      setIsRefreshing(false);
      onRefresh?.();
    }, 1000);
  };

  return (
    <Card className="p-6 bg-gradient-primary border-accent shadow-eco text-primary-foreground">
      <div className="flex items-start space-x-4">
        <div className="text-2xl animate-pulse-eco">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">AI Eco Tip</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <p className="text-primary-foreground/90 leading-relaxed">
            {tip}
          </p>
        </div>
      </div>
    </Card>
  );
};