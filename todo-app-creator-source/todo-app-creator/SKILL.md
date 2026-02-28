---
name: todo-app-creator
description: Todoリスト Web アプリケーションの設計、実装、および機能拡張を専門とするスキルです。新規作成、Redux Toolkit を使用した状態管理の構築、UIコンポーネントの作成、localStorage による永続化、フィルタリングやソートなどの高度な機能追加をサポートします。
---

# Todo App Creator

Todoアプリのスペシャリストとして、実用的で洗練された Web アプリの構築をサポートします。

## 主な機能
- **新規プロジェクトの立ち上げ**: Todoアプリに最適なディレクトリ構成と初期ボイラープレートの提供。
- **状態管理の構築**: Redux Toolkit を使用した、効率的で拡張性の高い Slice の定義。
- **UI/UX の最適化**: 洗練されたコンポーネントの作成と、使いやすいインタラクションの提案。
- **機能拡張**: フィルタリング、検索、期限設定、永続化、ドラッグ＆ドロップなどの追加。

## ワークフロー

### 1. 要件定義と設計
プロジェクトのニーズに合わせて、[feature-checklist.md](references/feature-checklist.md) を参照して実装すべき機能を選定します。

### 2. ボイラープレートの活用
`assets/todo-boilerplate/` 内のファイルをコピーまたは参考にして、迅速に実装を開始します。
- `todoSlice.ts`: 基本的な CRUD 操作が定義された Redux Slice。
- `TodoItem.tsx`: shadcn/ui と Tailwind CSS を使用した洗練されたタスク表示コンポーネント。

### 3. UI/UX の洗練
[ui-patterns.md](references/ui-patterns.md) に記載されているベストプラクティスを適用し、アプリの使い勝手を向上させます。

### 4. 機能の追加と改善
ユーザーの要望に応じて、さらに高度な機能（検索、ソート、localStorage 連携など）を段階的に実装します。

## コツ
- **shadcn/ui の活用**: `button`, `checkbox`, `input`, `badge`, `card` などのコンポーネントを積極的に使用して、一貫性のあるデザインを構築してください。
- **Redux の活用**: データの流れを単一方向に保ち、副作用（localStorage への保存など）は `useEffect` やカスタムミドルウェアで適切に処理してください。
- **アクセシビリティ**: スクリーンリーダーやキーボード操作にも配慮した実装を心がけてください。
