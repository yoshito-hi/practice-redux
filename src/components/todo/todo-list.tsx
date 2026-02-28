import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/hooks/use-redux";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
	const { items, filter } = useAppSelector((state) => state.todos);

	const filteredTodos = items.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	if (filteredTodos.length === 0) {
		return (
			<div className="text-center py-10 text-muted-foreground">
				{filter === "all"
					? "タスクはありません。新しいタスクを追加しましょう！"
					: filter === "active"
						? "未完了のタスクはありません。"
						: "完了したタスクはありません。"}
			</div>
		);
	}

	return (
		<ScrollArea className="h-[400px] pr-4">
			<ul className="space-y-3">
				{filteredTodos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</ScrollArea>
	);
};
