import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-semibold">
        TransitOps
      </h1>

      <div className="flex items-center gap-4">
        <Search className="h-5 w-5 cursor-pointer" />
        <Bell className="h-5 w-5 cursor-pointer" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold">
          NP
        </div>
      </div>
    </header>
  );
}