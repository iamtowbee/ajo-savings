"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Props {
  members: {
    id: number;
    name: string;
    tier: number;
    amount: number;
    interset: number;
  }[];
  onWithdraw(id: number): void;
}

const Withdrawal: React.FC<Props> = ({ members, onWithdraw }) => {
  const [selectedMember, setSelectedMember] = useState("");

  const handleWithdraw = () => {
    if (selectedMember) {
      onWithdraw(parseInt(selectedMember));
      setSelectedMember("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Withdraw Funds</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="member">Select Member</Label>
          <Select value={selectedMember} onValueChange={setSelectedMember}>
            <SelectTrigger id="member" className="mt-1">
              <SelectValue placeholder="Select a member" />
            </SelectTrigger>
            <SelectContent>
              {members.map((member) => (
                <SelectItem key={member.id} value={member.id.toString()}>
                  {member.name} (Tier {member.tier})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handleWithdraw}
          disabled={!selectedMember}
          className="w-full"
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default Withdrawal;
