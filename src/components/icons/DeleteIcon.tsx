interface DeleteIconProps {
  className?: string;
}

const DeleteIcon = ({ className = 'w-4 h-4' }: DeleteIconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DeleteIcon;
