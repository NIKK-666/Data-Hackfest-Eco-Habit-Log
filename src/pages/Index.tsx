import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TreePine, Recycle, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-950 flex items-center justify-center">
        <div className="text-center">
          <Leaf className="h-8 w-8 animate-spin text-emerald-600 mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-950">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="h-12 w-12 text-emerald-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              EcoLog
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your daily eco-friendly habits and build a sustainable lifestyle with AI-powered insights
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">
              🌱 Make Every Day Count
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Small Actions, Big Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of eco-warriors making a difference one habit at a time. 
              Track your progress, earn points, and get personalized AI tips for a greener tomorrow.
            </p>
            
            <div className="space-y-4">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground">Welcome back, {user?.name}!</p>
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => navigate('/dashboard')}
                      className="gradient-button hover-glow"
                      size="lg"
                    >
                      Go to Dashboard
                    </Button>
                    <Button 
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      variant="outline"
                      size="lg"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  onClick={() => loginWithRedirect()}
                  className="gradient-button hover-glow"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Login to Start Your Eco Journey'}
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="nature-card">
              <CardHeader className="pb-3">
                <Recycle className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-lg">Daily Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Log 6 eco habits daily and watch your impact grow
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card">
              <CardHeader className="pb-3">
                <TreePine className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-lg">AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get personalized tips powered by Google Gemini AI
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card">
              <CardHeader className="pb-3">
                <Heart className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-lg">Gamification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn points, build streaks, and celebrate wins
                </p>
              </CardContent>
            </Card>

            <Card className="nature-card">
              <CardHeader className="pb-3">
                <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle className="text-lg">Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visual dashboard showing your eco journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            ✨ Features
          </Badge>
          <h3 className="text-3xl font-bold mb-8">Everything You Need for Sustainable Living</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto">
                <Recycle className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold">Habit Tracking</h4>
              <p className="text-muted-foreground">
                Simple checkboxes for 6 key eco habits: recycling, transport, energy, meals, reusables, and water
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto">
                <TreePine className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold">AI-Powered Tips</h4>
              <p className="text-muted-foreground">
                Receive personalized eco-friendly suggestions based on your habits from Google Gemini AI
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold">Gamified Experience</h4>
              <p className="text-muted-foreground">
                Earn points, maintain streaks, and celebrate your progress with beautiful visual feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;