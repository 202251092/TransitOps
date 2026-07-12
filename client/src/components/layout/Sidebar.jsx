import {
  LayoutDashboard,
  Truck,
  Users,
  Map,
  Wrench,
  Wallet,
  BarChart3,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";

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
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6 text-2xl font-bold">
        TransitOps
      </div>

      <nav className="flex-1 p-3 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
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

      {/* Logout Button */}

      <div className="border-t border-slate-700 p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}