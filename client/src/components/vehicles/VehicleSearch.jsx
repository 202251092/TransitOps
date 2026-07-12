import Input from "../ui/Input";

export default function VehicleSearch({
  value,
  onChange,
}) {
  return (
    <Input
      placeholder="Search by registration, name or driver..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}