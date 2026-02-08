import TextField from '@/components/common/TextField';
import Button from '@/components/common/Button';
import PlusIcon from '@/components/icons/PlusIcon';

export interface TodoFormProps {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SyntheticEvent) => void;
}

const TodoForm = ({ inputValue, onChange, onSubmit }: TodoFormProps) => {
  return (
    <div className="w-full">
      <form className="flex gap-10" onSubmit={onSubmit}>
        <TextField
          placeholder="할 일을 입력하세요"
          name="name"
          variant="search"
          value={inputValue}
          onChange={onChange}
        />
        <Button
          variant={inputValue.trim() ? 'addActive' : 'addDefault'}
          size="add"
          icon={<PlusIcon />}
        >
          추가하기
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
