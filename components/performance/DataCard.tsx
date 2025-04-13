"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";

type DataCardProps = {
  value: number;
  label: string;
  shouldFormat?: boolean;
};


const data = [
  { name: "Jan", total: 400 },
  { name: "Feb", total: 700 },
  { name: "Mar", total: 900 },
  { name: "Apr", total: 300 },
  { name: "May", total: 1200 },
];

const DataCard = ({ value, label, shouldFormat }: DataCardProps) => {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Bar dataKey="total" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DataCard;
