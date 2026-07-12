import {
  LayoutDashboard,
  Truck,
  Users,
  Map,
  Wrench,
  Wallet,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Vehicles", path: "/vehicles", icon: Truck },
  { name: "Drivers", path: "/drivers", icon: Users },
  { name: "Trips", path: "/trips", icon: Map },
  { name: "Maintenance", path: "/maintenance", icon: Wrench },
  { name: "Expenses", path: "/expenses", icon: Wallet },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        TransitOps
      </div>

      <nav className="p-3 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}