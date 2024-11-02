"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Member } from "./SavingsGroup";

interface RegisterProps {
  onAddMember(member: any): void;
  members: Member[];
}

const RegisterForm: React.FC<RegisterProps> = ({ onAddMember, members }) => {
  const [name, setName] = useState("");
  const [tier, setTier] = useState("");

  const tiers = [
    { id: 0, amount: 10000, interset: 0.05 },
    { id: 1, amount: 20000, interset: 0.1 },
    { id: 2, amount: 30000, interset: 0.2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !tier) return;
    if (members.map((member) => member.name == name)) {
      alert("Duplicate user!");
      return;
    }

    const selectedTier = tiers.find((t) => t.id === parseInt(tier));
    if (!selectedTier) return;

    const newMember = {
      id: Date.now(),
      name,
      tier: selectedTier.id,
      amount: selectedTier.amount,
      interset: selectedTier.amount * selectedTier.interset,
    };

    onAddMember(newMember);
    setName("");
    setTier("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          required
          className="mt-1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="tier">Savings Tier</Label>
        <Select value={tier} onValueChange={setTier}>
          <SelectTrigger id="tier" className="mt-1">
            <SelectValue placeholder="Select a tier" />
          </SelectTrigger>
          <SelectContent>
            {tiers.map((t) => (
              <SelectItem key={t.id} value={t.id.toString()}>
                Tier {t.id}: {t.amount} Naira ({t.interset * 100}% interest)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
