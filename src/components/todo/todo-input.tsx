import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo } from "@/features/todos/todoSlice";
import { useAppDispatch } from "@/hooks/use-redux";

export const TodoInput = () => {
	const [text, setText] = useState("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim()) {
			dispatch(addTodo(text));
			setText("");
			toast.success("タスクを追加しました");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2">
			<Input
				placeholder="新しいタスクを入力..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="flex-1"
			/>
			<Button type="submit" disabled={!text.trim()}>
				<PlusCircle className="w-4 h-4 mr-2" />
				追加
			</Button>
		</form>
	);
};
