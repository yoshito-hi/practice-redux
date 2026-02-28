import { Todo } from './todoSlice';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-sm font-medium leading-none cursor-pointer ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </li>
  );
};
