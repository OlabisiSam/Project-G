export function Slider({ min = 0, max = 100, value, onChange, className = "" }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`w-full accent-blue-600 ${className}`}
    />
  );
}
