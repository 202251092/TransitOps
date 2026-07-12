export default function KPICard({
  title,
  value,
  icon,
  color = "bg-blue-500",
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center justify-between hover:shadow-md transition">
      <div>
        <p className="text-sm text-gray-500">{title}</p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white`}
      >
        {icon}
      </div>
    </div>
  );
}