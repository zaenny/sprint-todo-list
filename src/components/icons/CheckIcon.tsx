interface CheckIconProps {
  className?: string;
}

const CheckIcon = ({ className = 'w-4 h-4' }: CheckIconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path
      d="M2 7L6.5 11.5L14 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;
