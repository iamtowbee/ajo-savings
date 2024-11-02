import React from "react";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";

interface MemberProps {
  members: {
    id: number;
    name: string;
    tier: number;
    amount: number;
    interset: number;
  }[];
}

const tierNames = ["Normie", "Noob", "Degen"];

const MemberList: React.FC<MemberProps> = ({ members }) => {
  if (members.length === 0)
    return <h2 className="text-center text-lg py-2.5">No members yet.</h2>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Member List</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Interest</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{tierNames[member.tier]}</TableCell>
                <TableCell>{member.amount.toLocaleString()} Naira</TableCell>
                <TableCell>{member.interset.toLocaleString()} Naira</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MemberList;
