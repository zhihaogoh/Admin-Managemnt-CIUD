import { ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  { value: 25 },
  { value: 28 },
  { value: 26 },
  { value: 35 },
  { value: 48 },
  { value: 52 },
  { value: 38 },
  { value: 29 },
  { value: 34 },
  { value: 55 },
];
export default function Charts() {
  return (
    <>
      <div style={{ width: "100%", height: 60 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
          >
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              fill="#eff6ff"
              fillOpacity={1}
              dot={false}
              activeDot={false}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
