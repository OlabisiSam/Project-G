export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-2xl transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  