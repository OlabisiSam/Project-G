import { useState } from "react";

export function Select({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ value, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full border border-gray-300 px-4 py-2 rounded-lg bg-white text-left ${className}`}
    >
      {value || "Select..."}
    </button>
  );
}

export function SelectContent({ open, children, className = "" }) {
  if (!open) return null;

  return (
    <ul className={`absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg ${className}`}>
      {children}
    </ul>
  );
}

export function SelectItem({ children, onClick, className = "" }) {
  return (
    <li
      onClick={onClick}
      className={`px-4 py-2 hover:bg-blue-100 cursor-pointer ${className}`}
    >
      {children}
    </li>
  );
}

export function SelectValue({ value }) {
  return <span>{value}</span>;
}
