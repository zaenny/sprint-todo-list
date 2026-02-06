interface CheckboxEmptyIconProps {
  className?: string;
}

const CheckboxEmptyIcon = ({
  className = 'w-32 h-32',
}: CheckboxEmptyIconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle
      cx="16"
      cy="16"
      r="15"
      fill="#FEFCE8"
      stroke="#0F172A"
      strokeWidth="2"
    />
  </svg>
);

export default CheckboxEmptyIcon;
