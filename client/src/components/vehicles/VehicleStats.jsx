import Card from "../ui/Card";

export default function VehicleStats({ vehicles }) {
  const total = vehicles.length;
  const available = vehicles.filter(v => v.status === "Available").length;
  const trip = vehicles.filter(v => v.status === "On Trip").length;
  const maintenance = vehicles.filter(
    v => v.status === "Maintenance"
  ).length;

  const stats = [
    { title: "Total Vehicles", value: total },
    { title: "Available", value: available },
    { title: "On Trip", value: trip },
    { title: "Maintenance", value: maintenance },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {stats.map((item) => (
        <Card key={item.title}>
          <p className="text-sm text-gray-500">{item.title}</p>
          <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
        </Card>
      ))}
    </div>
  );
}