export default function CheckInfo({
  tooltip,
  titleH,
  valueOf,
  nameOf,
  onChange,
}) {
  return (
    <div>
      <h3 className="mt-2 -mb-1 ml-2">{titleH}</h3>
      <input
        type={nameOf === "maxGuests" ? "number" : "text"}
        placeholder={tooltip}
        value={valueOf}
        name={nameOf}
        onChange={onChange}
      />
    </div>
  );
}
