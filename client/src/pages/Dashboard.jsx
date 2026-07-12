import DashboardStats from "../components/dashboard/DashboardStats";
import FleetChart from "../components/dashboard/FleetChart";
import FleetStatus from "../components/dashboard/FleetStatus";
import RecentTrips from "../components/dashboard/RecentTrips";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-500 mt-1">
          Welcome to TransitOps Smart Transport Operations Platform
        </p>
      </div>

      <DashboardStats />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FleetChart />
        </div>

        <FleetStatus />
      </div>

      <RecentTrips />
    </div>
  );
}