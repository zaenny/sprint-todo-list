interface CheckboxCheckedIconProps {
  className?: string;
}

const CheckboxCheckedIcon = ({
  className = 'w-32 h-32',
}: CheckboxCheckedIconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#7C3AED" />
    <path
      d="M8 16.2857L13.8182 22L24 12"
      stroke="#FEFCE8"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckboxCheckedIcon;
