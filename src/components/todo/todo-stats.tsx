import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clearCompleted } from "@/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";

export const TodoStats = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state) => state.todos.items);
	const activeCount = todos.filter((t) => !t.completed).length;
	const completedCount = todos.length - activeCount;

	const handleClearCompleted = () => {
		if (completedCount > 0) {
			dispatch(clearCompleted());
			toast.success("完了済みタスクを削除しました");
		}
	};

	return (
		<div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
			<div className="flex gap-4">
				<div className="flex items-center gap-1">
					<span>残り:</span>
					<Badge variant="secondary" className="font-mono">
						{activeCount}
					</Badge>
				</div>
				<div className="flex items-center gap-1">
					<span>完了:</span>
					<Badge variant="outline" className="font-mono">
						{completedCount}
					</Badge>
				</div>
			</div>
			{completedCount > 0 && (
				<Button
					variant="ghost"
					size="sm"
					onClick={handleClearCompleted}
					className="text-xs h-8 hover:text-destructive transition-colors"
				>
					完了済みを削除
				</Button>
			)}
		</div>
	);
};
