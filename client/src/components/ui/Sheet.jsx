import { useState } from "react";

export function Sheet({ children }) {
  return <div>{children}</div>;
}

export function SheetTrigger({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export function SheetContent({ open, onClose, children, className = "" }) {
  if (!open) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end`}>
      <div className={`bg-white w-80 p-6 h-full shadow-lg z-50 ${className}`}>
        <button onClick={onClose} className="mb-4 text-right text-red-500 font-bold">
          ✕ Close
        </button>
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function SheetTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function SheetDescription({ children }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}
