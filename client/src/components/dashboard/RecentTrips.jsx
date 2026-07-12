const trips = [
  {
    id: "TR-001",
    vehicle: "Van-01",
    driver: "Alex",
    status: "Completed",
  },
  {
    id: "TR-002",
    vehicle: "Truck-03",
    driver: "John",
    status: "On Trip",
  },
  {
    id: "TR-003",
    vehicle: "Mini Bus",
    driver: "Emma",
    status: "Pending",
  },
];

export default function RecentTrips() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <h2 className="text-lg font-semibold mb-4">
        Recent Trips
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3">Trip</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id} className="border-b">
              <td className="py-3">{trip.id}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.driver}</td>
              <td>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}