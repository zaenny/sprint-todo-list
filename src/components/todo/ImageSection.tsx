import Image from 'next/image';
import emptyImg from '@/assets/image/emptyImg.png';
import Button from '../common/Button';
import ImageEditIcon from '../icons/ImageEditIcon';
import ImageUploadIcon from '../icons/ImageUploadIcon';
interface ImageSectionProps {
  imageUrl?: string | null;
  onImageChange?: () => void;
  className?: string;
}
const ImageSection = ({
  imageUrl,
  onImageChange,
  className,
}: ImageSectionProps) => {
  return (
    <div
      className={`rounded-24 relative min-h-320 overflow-hidden ${className}`}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          fill
          alt="할 일 이미지"
          className="object-cover"
        />
      ) : (
        <div className="rounded-24 absolute inset-0 flex items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50">
          <Image src={emptyImg} width={60} height={60} alt="이미지 없음" />
        </div>
      )}

      <Button
        className="absolute right-16 bottom-16"
        icon={imageUrl ? <ImageEditIcon /> : <ImageUploadIcon />}
        size="imageUpload"
        variant={imageUrl ? 'imageEdit' : 'imageUpload'}
        onClick={onImageChange}
      />
    </div>
  );
};

export default ImageSection;
