export default function Input({
  className = "",
  ...props
}) {
  return (
    <input
      className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
      {...props}
    />
  );
}