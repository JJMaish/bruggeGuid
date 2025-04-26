
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Category {
  id: string;
  name: string;
}

interface FilterBarProps {
  categories: Category[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  totalCount: number;
}

const RestaurantsFilterBar: React.FC<FilterBarProps> = ({
  categories,
  currentFilter,
  onFilterChange,
  totalCount,
}) => {
  return (
    <div className="bg-white shadow-sm sticky top-16 z-30">
      <div className="container mx-auto py-4 flex flex-col md:flex-row md:justify-between md:items-center px-4">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {categories.map(category => (
                  <DropdownMenuItem
                    key={category.id}
                    className={`cursor-pointer ${currentFilter === category.id ? 'bg-brugge text-white' : ''}`}
                    onClick={() => onFilterChange(category.id)}
                  >
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-sm text-gray-500">
            Showing: {currentFilter === 'all' ? 'All Restaurants' : categories.find(c => c.id === currentFilter)?.name}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{totalCount} restaurants found</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsFilterBar;
