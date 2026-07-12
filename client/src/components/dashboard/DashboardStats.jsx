import {
  Truck,
  Route,
  Users,
  Activity,
} from "lucide-react";

import KPICard from "./KPICard";

export default function DashboardStats() {
  const stats = [
    {
      title: "Active Vehicles",
      value: 32,
      icon: <Truck size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Active Trips",
      value: 14,
      icon: <Route size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Drivers On Duty",
      value: 18,
      icon: <Users size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Fleet Utilization",
      value: "82%",
      icon: <Activity size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <KPICard key={item.title} {...item} />
      ))}
    </div>
  );
}