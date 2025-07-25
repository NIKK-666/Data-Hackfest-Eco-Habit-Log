import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HabitCard } from "@/components/HabitCard";
import { StatsCard } from "@/components/StatsCard";
import { AITipCard } from "@/components/AITipCard";
import { Leaf, Trophy, Zap, Target } from "lucide-react";

interface Habit {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
}

const dailyHabits: Habit[] = [
  {
    id: "recycle",
    title: "Recycled Items",
    description: "Separated and recycled bottles, cans, or paper",
    icon: "♻️",
    points: 10,
  },
  {
    id: "transport",
    title: "Eco-Friendly Transport",
    description: "Walked, biked, or used public transport",
    icon: "🚴",
    points: 15,
  },
  {
    id: "energy",
    title: "Saved Electricity",
    description: "Turned off lights or unplugged devices",
    icon: "💡",
    points: 10,
  },
  {
    id: "plant-meal",
    title: "Plant-Based Meal",
    description: "Enjoyed a vegetarian or vegan meal",
    icon: "🥗",
    points: 12,
  },
  {
    id: "reusable",
    title: "Used Reusables",
    description: "Brought reusable bags, bottles, or containers",
    icon: "🌿",
    points: 8,
  },
  {
    id: "water",
    title: "Saved Water",
    description: "Took shorter showers or fixed leaks",
    icon: "💧",
    points: 10,
  },
];

const Dashboard = () => {
  const [completedHabits, setCompletedHabits] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(7);

  const toggleHabit = (habitId: string) => {
    setCompletedHabits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(habitId)) {
        newSet.delete(habitId);
      } else {
        newSet.add(habitId);
      }
      return newSet;
    });
  };

  const totalPoints = Array.from(completedHabits).reduce((sum, habitId) => {
    const habit = dailyHabits.find(h => h.id === habitId);
    return sum + (habit?.points || 0);
  }, 0);

  const completionRate = Math.round((completedHabits.size / dailyHabits.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-gradient-primary shadow-eco">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-primary-foreground">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 animate-bounce-gentle" />
              <h1 className="text-4xl font-bold">EcoLog</h1>
            </div>
            <p className="text-xl opacity-90">Track your daily eco-friendly habits</p>
            <p className="text-lg opacity-75 mt-2">Make every day count for our planet 🌍</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Today's Points"
            value={totalPoints}
            icon="⭐"
            description={`${completedHabits.size} habits completed`}
            variant="success"
          />
          <StatsCard
            title="Current Streak"
            value={`${streak} days`}
            icon="🔥"
            description="Keep it going!"
            variant="accent"
          />
          <StatsCard
            title="Completion Rate"
            value={`${completionRate}%`}
            icon="📊"
            description="Today's progress"
          />
          <StatsCard
            title="Eco Level"
            value="Green Hero"
            icon="🏆"
            description="Level 3"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Habits */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                <Target className="w-6 h-6" />
                <span>Today's Eco Habits</span>
              </h2>
              <Button 
                variant="eco" 
                size="sm"
                onClick={() => setCompletedHabits(new Set())}
              >
                Reset Day
              </Button>
            </div>
            
            <div className="space-y-4">
              {dailyHabits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  isCompleted={completedHabits.has(habit.id)}
                  onToggle={toggleHabit}
                />
              ))}
            </div>

            {completedHabits.size === dailyHabits.length && (
              <div className="mt-6 p-6 bg-gradient-eco rounded-lg text-center text-success-foreground shadow-glow">
                <div className="text-4xl mb-2 animate-bounce-gentle">🎉</div>
                <h3 className="text-xl font-bold mb-2">Perfect Day Complete!</h3>
                <p>You've completed all your eco habits today. Amazing work!</p>
              </div>
            )}
          </div>

          {/* AI Tips & Weekly Overview */}
          <div className="space-y-6">
            <AITipCard
              tip="Great job on recycling! Try composting organic waste this week to reduce landfill impact by up to 30%."
              completedHabits={Array.from(completedHabits).map(id => 
                dailyHabits.find(h => h.id === id)?.title || id
              )}
            />
            
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Quick Actions</span>
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  📊 View Weekly Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🎯 Set Custom Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🌱 Find New Habits
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🤝 Share Progress
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4">This Week's Impact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CO₂ Saved:</span>
                  <span className="font-medium">12.4 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Water Saved:</span>
                  <span className="font-medium">45 liters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Waste Diverted:</span>
                  <span className="font-medium">2.1 kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;