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
type ChartProps = {
  data: {
    name: string;
    total: number;
    count: number;
  }[];
};

const data = [
  { name: "Course A", total: 120 },
  { name: "Course B", total: 80 },
  { name: "Course C", total: 50 },
  { name: "Course D", total: 150 },
];

const Chart = ( { data }: ChartProps) => {
  return (
    <Card className="p-4">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
