type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function PopularVerbsSwitch({ checked, onChange }: CustomSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-200
        ${checked ? "bg-neutral-800" : "bg-neutral-400"}
        cursor-pointer
        hover:scale-105
        hover:shadow-lg`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
          ${checked ? "translate-x-6" : "translate-x-0"} `}
      />
    </button>
  );
}
