import Button from '@/components/common/Button';
import CheckIcon from '@/components/icons/CheckIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import PlusIcon from '@/components/icons/PlusIcon';

export default function Home() {
  return (
    <>
      <h1>TEST</h1>
      <div className="flex justify-center gap-10">
        <Button
          variant="addActive"
          size="large"
          state="active"
          icon={<PlusIcon />}
        >
          추가하기
        </Button>
        <Button variant="addDefault" size="large" icon={<PlusIcon />} disabled>
          추가하기
        </Button>
        <Button variant="addActive" size="small" icon={<PlusIcon />}></Button>

        <Button variant="delete" size="large" icon={<DeleteIcon />}>
          삭제
        </Button>
        <Button variant="editActive" size="large" icon={<CheckIcon />}>
          수정 완료
        </Button>
        <Button variant="editDefault" size="large" icon={<CheckIcon />}>
          수정 완료
        </Button>
      </div>
    </>
  );
}
