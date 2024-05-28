export default function Perk({ children, icon }) {
  return (
    <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
      <input type="checkbox" />
      {icon}
      <span>{children}</span>
    </label>
  );
}
