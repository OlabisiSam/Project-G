export function Checkbox({ className = "", ...props }) {
    return (
      <input
        type="checkbox"
        className={`form-checkbox text-blue-600 rounded-md w-5 h-5 ${className}`}
        {...props}
      />
    );
  }
  