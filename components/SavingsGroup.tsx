"use client";
import React, { useState, useEffect } from "react";
import RegisterForm from "@/components/RegisterForm";
import MemberList from "./MemberList";
import SavigsDashboard from "./SavigsDashboard";
import Withdrawal from "./Withdrawal";

export interface Member {
  id: number;
  name: string;
  tier: number;
  amount: number;
  interset: number;
}

const SavingsGroup = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [totalSavings, setTotalSavings] = useState(0);

  useEffect(() => {
    const newTotalSavings = members.reduce(
      (sum, member) => sum + member.amount,
      0
    );
    setTotalSavings(newTotalSavings);
  }, [members]);

  const addMember = (newMember: Member) => {
    setMembers([...members, newMember]);
  };

  const removeMember = (memberId: number) => {
    setMembers(members.filter((member) => member.id != memberId));
  };

  return (
    <div>
      <RegisterForm onAddMember={addMember} members={members} />
      <SavigsDashboard
        totalSavings={totalSavings}
        memberCount={members.length}
      />
      <MemberList members={members} />
      <Withdrawal members={members} onWithdraw={removeMember} />
    </div>
  );
};

export default SavingsGroup;
