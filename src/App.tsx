import { TodoFilters } from "@/components/todo/todo-filters";
import { TodoInput } from "@/components/todo/todo-input";
import { TodoList } from "@/components/todo/todo-list";
import { TodoStats } from "@/components/todo/todo-stats";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
	return (
		<div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
			<div className="max-w-xl mx-auto space-y-8">
				<Card className="shadow-xl border-t-4 border-t-primary">
					<CardHeader>
						<CardTitle className="text-3xl font-bold text-center tracking-tight">
							Redux Todo
						</CardTitle>
						<CardDescription className="text-center text-muted-foreground">
							Redux Toolkit と shadcn/ui で構築されたタスク管理
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<TodoInput />

						<div className="space-y-4">
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
								<h2 className="text-lg font-semibold">タスク一覧</h2>
								<TodoFilters />
							</div>
							<Separator />
							<TodoList />
						</div>

						<TodoStats />
					</CardContent>
				</Card>
			</div>
			<Toaster position="bottom-right" richColors />
		</div>
	);
};

export default App;
