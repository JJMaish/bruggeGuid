
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Interest {
  id: string;
  label: string;
  icon: string;
}

interface InterestsSelectorProps {
  interests: Interest[];
  selectedInterests: string[];
  onInterestChange: (interest: string) => void;
}

const InterestsSelector = ({ interests, selectedInterests, onInterestChange }: InterestsSelectorProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {interests.map((interest) => (
        <div 
          key={interest.id}
          className="flex items-center space-x-3 p-3 rounded-lg border hover:border-brugge transition-colors duration-200 hover:bg-gray-50"
        >
          <Checkbox 
            id={interest.id}
            checked={selectedInterests.includes(interest.id)}
            onCheckedChange={() => onInterestChange(interest.id)}
            className="transition-transform duration-200 hover:scale-110"
          />
          <Label 
            htmlFor={interest.id}
            className="text-sm cursor-pointer hover:text-brugge transition-colors duration-200"
          >
            {interest.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default InterestsSelector;
