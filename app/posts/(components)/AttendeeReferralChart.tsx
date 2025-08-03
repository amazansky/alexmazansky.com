"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export const EmergentAttendeeReferralChart = () => {
  const data = [
    { name: "Student Club", value: 119, color: "var(--color-solarized-blue)" },
    {
      name: "Word of Mouth",
      value: 103,
      color: "var(--color-solarized-green)",
    },
    { name: "Flyer", value: 96, color: "var(--color-solarized-red)" },
    { name: "LinkedIn", value: 51, color: "var(--color-solarized-violet)" },
    { name: "Email", value: 35, color: "var(--color-solarized-yellow)" },
    { name: "Course", value: 34, color: "var(--color-solarized-cyan)" },
    { name: "Instagram", value: 24, color: "var(--color-solarized-orange)" },
    { name: "Other", value: 20, color: "var(--color-solarized-magenta)" },
  ];

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg font-mono text-sm">
          <p className="text-foreground">
            <span className="font-medium">{payload[0].name}:</span>{" "}
            {payload[0].value} ({((payload[0].value / total) * 100).toFixed(1)}
            %)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 font-mono text-sm">
      {payload.map((entry: any, index: number) => (
        <span key={index} className="flex items-center">
          <span
            className="w-3 h-3 rounded-full mr-2 inline-block"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-foreground">
            {entry.value}: {data.find((d) => d.name === entry.value)?.value}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full my-8">
      <h3 className="text-xl font-medium text-center mb-4 text-foreground font-mono">
        <strong>Emergent 2025</strong>
        <br />
        Interested Attendees by Referral Source
      </h3>
      <ResponsiveContainer width="100%" height={400} className="font-mono">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            dataKey="value"
            label={({ name, value, percent }) => `${name}`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
