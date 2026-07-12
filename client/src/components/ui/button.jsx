export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-white transition hover:bg-yellow-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}