"use client";
import React, { useState, useEffect } from "react";
import RegisterForm from "@/components/RegisterForm";
import MemberList from "./MemberList";

interface Member {
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
    return () => {};
  }, [members]);

  const addMember = (newMember: Member) => {
    setMembers([...members, newMember]);
  };

  const removeMember = (memberId: number) => {
    setMembers(members.filter((member) => member.id != memberId));
  };

  return (
    <div>
      <RegisterForm onAddMember={addMember} />

      <MemberList members={members} />
    </div>
  );
};

export default SavingsGroup;
