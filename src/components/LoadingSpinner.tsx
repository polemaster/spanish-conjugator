interface LoadingSpinnerProps {
  size?: string; // e.g., 'h-8 w-8'
  color?: string; // e.g., 'border-blue-500'
  className?: string; // To add any extra custom classes
  text?: string;
}

export function LoadingSpinner({
  size = "h-8 w-8", // Default size
  color = "border-blue-500", // Default color
  className = "",
  text = "",
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-center flex-col gap-4">
      <div
        className={`
          ${size}
          ${color}
          border-4
          border-solid
          border-t-transparent
          rounded-full
          animate-spin
          ${className}
        `}
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p>{text}</p>
    </div>
  );
}
