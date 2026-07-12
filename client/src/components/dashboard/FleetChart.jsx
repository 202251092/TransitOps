import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", trips: 12 },
  { day: "Tue", trips: 18 },
  { day: "Wed", trips: 15 },
  { day: "Thu", trips: 22 },
  { day: "Fri", trips: 19 },
  { day: "Sat", trips: 10 },
  { day: "Sun", trips: 8 },
];

export default function FleetChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 h-96">
      <h2 className="text-lg font-semibold mb-5">
        Fleet Activity
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="trips"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}