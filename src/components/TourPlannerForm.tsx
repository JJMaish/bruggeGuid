
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar } from "lucide-react";
import CheckInOutForm from "@/components/CheckInOutForm";
import InterestsSelector from "@/components/InterestsSelector";

const TourPlannerForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [preferences, setPreferences] = useState({
    childFriendly: false,
    accessibility: false,
    guidedTours: false,
    privateTours: false,
    groupSize: 'small',
    budget: 'medium',
    pace: 'moderate'
  });
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Tour planning request submitted!",
      description: "We're preparing your custom tour plan.",
    });
    setTimeout(() => navigate('/my-plan'), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      {/* When are you visiting section */}
      <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-brugge">When are you visiting?</h2>
        <CheckInOutForm />
      </div>

      {/* Preferences section */}
      <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-brugge">Your Preferences</h2>
        
        {/* Interests */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">What interests you?</h3>
          <InterestsSelector
            interests={[
              { id: 'history', label: 'History & Culture', icon: 'history' },
              { id: 'food', label: 'Food & Dining', icon: 'food' },
              { id: 'art', label: 'Art & Museums', icon: 'culture' },
              { id: 'nature', label: 'Nature & Parks', icon: 'nature' },
              { id: 'shopping', label: 'Shopping', icon: 'shopping' },
              { id: 'nightlife', label: 'Nightlife', icon: 'nightlife' }
            ]}
            selectedInterests={selectedInterests}
            onInterestChange={(id) => {
              setSelectedInterests(prev => 
                prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
              );
            }}
          />
        </div>

        {/* Tour Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-transform hover:scale-[1.02]">
              <div>
                <Label>Child Friendly</Label>
                <p className="text-sm text-gray-500">Include activities for children</p>
              </div>
              <Switch 
                checked={preferences.childFriendly}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, childFriendly: checked }))}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-transform hover:scale-[1.02]">
              <div>
                <Label>Accessibility Needed</Label>
                <p className="text-sm text-gray-500">Wheelchair accessible routes</p>
              </div>
              <Switch 
                checked={preferences.accessibility}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, accessibility: checked }))}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-transform hover:scale-[1.02]">
              <div>
                <Label>Guided Tours</Label>
                <p className="text-sm text-gray-500">Include professional guides</p>
              </div>
              <Switch 
                checked={preferences.guidedTours}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, guidedTours: checked }))}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg transition-transform hover:scale-[1.02]">
              <div>
                <Label>Private Tours</Label>
                <p className="text-sm text-gray-500">Exclusive private experiences</p>
              </div>
              <Switch 
                checked={preferences.privateTours}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, privateTours: checked }))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Preferences */}
      <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-brugge">Tour Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Group Size</Label>
            <div className="space-y-2">
              {['small', 'medium', 'large'].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={preferences.groupSize === size}
                    onCheckedChange={() => setPreferences(prev => ({ ...prev, groupSize: size }))}
                  />
                  <Label htmlFor={`size-${size}`} className="capitalize">{size} Group</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Budget Range</Label>
            <div className="space-y-2">
              {['budget', 'medium', 'luxury'].map((budget) => (
                <div key={budget} className="flex items-center space-x-2">
                  <Checkbox
                    id={`budget-${budget}`}
                    checked={preferences.budget === budget}
                    onCheckedChange={() => setPreferences(prev => ({ ...prev, budget: budget }))}
                  />
                  <Label htmlFor={`budget-${budget}`} className="capitalize">{budget}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tour Pace</Label>
            <div className="space-y-2">
              {['relaxed', 'moderate', 'active'].map((pace) => (
                <div key={pace} className="flex items-center space-x-2">
                  <Checkbox
                    id={`pace-${pace}`}
                    checked={preferences.pace === pace}
                    onCheckedChange={() => setPreferences(prev => ({ ...prev, pace: pace }))}
                  />
                  <Label htmlFor={`pace-${pace}`} className="capitalize">{pace}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <Button
          type="submit"
          size="lg"
          className="bg-brugge text-white hover:bg-brugge-light transition-all duration-300 hover:scale-105"
        >
          Plan My Tour
        </Button>
      </div>
    </form>
  );
};

export default TourPlannerForm;
