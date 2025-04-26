
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CheckInOutForm: React.FC = () => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Label htmlFor="check-in" className="mb-2 block">Check-in</Label>
        <Input
          id="check-in"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex-1">
        <Label htmlFor="check-out" className="mb-2 block">Check-out</Label>
        <Input
          id="check-out"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CheckInOutForm;
