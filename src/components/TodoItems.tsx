import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

type TodoItemProps = {
  id: number;
  text: string;
  isComplete: boolean;
  onDelete: (id: number) => void;
};

export default function TodoItems({ id, text, isComplete, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <TiTick className="w-7 " />
        <p className={`ml-4 text-[17px] ${isComplete ? "line-through text-slate-400" : "text-slate-700"}`}>
          {text}
        </p>
      </div>
      <MdDelete onClick={() => onDelete(id)} className="text-xl text-red-500 cursor-pointer" />
    </div>
  );
}