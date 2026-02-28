import { Button } from "@/components/ui/button";
import { setFilter, type TodoFilter } from "@/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";

export const TodoFilters = () => {
	const dispatch = useAppDispatch();
	const currentFilter = useAppSelector((state) => state.todos.filter);

	const filters: { label: string; value: TodoFilter }[] = [
		{ label: "すべて", value: "all" },
		{ label: "未完了", value: "active" },
		{ label: "完了済み", value: "completed" },
	];

	return (
		<div className="flex gap-2">
			{filters.map((filter) => (
				<Button
					key={filter.value}
					variant={currentFilter === filter.value ? "default" : "outline"}
					size="sm"
					onClick={() => dispatch(setFilter(filter.value))}
					className="flex-1 sm:flex-none"
				>
					{filter.label}
				</Button>
			))}
		</div>
	);
};
