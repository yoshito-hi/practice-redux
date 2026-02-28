import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { deleteTodo, type Todo, toggleTodo } from "@/features/todos/todoSlice";
import { useAppDispatch } from "@/hooks/use-redux";

interface TodoItemProps {
	todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
	const dispatch = useAppDispatch();

	const handleToggle = () => {
		dispatch(toggleTodo(todo.id));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
		toast.success("タスクを削除しました");
	};

	return (
		<li className="flex items-center justify-between p-3 bg-card border rounded-lg shadow-sm group transition-all hover:shadow-md">
			<div className="flex items-center gap-3">
				<Checkbox
					checked={todo.completed}
					onCheckedChange={handleToggle}
					id={`todo-${todo.id}`}
				/>
				<label
					htmlFor={`todo-${todo.id}`}
					className={`text-sm font-medium leading-none cursor-pointer transition-all ${
						todo.completed
							? "line-through text-muted-foreground opacity-70"
							: ""
					}`}
				>
					{todo.text}
				</label>
			</div>
			<Button
				variant="ghost"
				size="icon"
				onClick={handleDelete}
				className="opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive hover:bg-destructive/10 transition-opacity"
			>
				<Trash2 className="w-4 h-4" />
			</Button>
		</li>
	);
};
