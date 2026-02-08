interface ImageUploadIconProps {
  className?: string;
}

const ImageUploadIcon = ({ className = 'w-18 h-18' }: ImageUploadIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 12L21 12"
      stroke="#64748B"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M12 21L12 3"
      stroke="#64748B"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default ImageUploadIcon;
