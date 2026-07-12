const vehicles = [
  {
    name: "Available",
    value: 25,
    color: "bg-green-500",
  },
  {
    name: "On Trip",
    value: 8,
    color: "bg-blue-500",
  },
  {
    name: "Maintenance",
    value: 3,
    color: "bg-orange-500",
  },
  {
    name: "Retired",
    value: 2,
    color: "bg-red-500",
  },
];

export default function FleetStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <h2 className="text-lg font-semibold mb-5">
        Fleet Status
      </h2>

      <div className="space-y-5">
        {vehicles.map((vehicle) => (
          <div key={vehicle.name}>
            <div className="flex justify-between mb-2">
              <span>{vehicle.name}</span>
              <span className="font-semibold">
                {vehicle.value}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${vehicle.color} h-2 rounded-full`}
                style={{
                  width: `${vehicle.value * 4}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}