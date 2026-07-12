import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <Bell className="w-5 h-5 cursor-pointer" />

        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
          NP
        </div>
      </div>
    </header>
  );
}