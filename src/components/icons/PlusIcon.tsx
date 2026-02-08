interface PlusIconProps {
  className?: string;
}

const PlusIcon = ({ className = 'w-full h-full' }: PlusIconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8L14 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 14L8 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default PlusIcon;
