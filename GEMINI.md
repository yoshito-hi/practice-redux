# プロジェクト概要: practice-redux

このファイルは Gemini CLI 用のコンテキストガイドラインです。

## 技術スタック
- **Frontend Framework**: React 19 (Vite)
- **Language**: TypeScript
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Linting/Formatting**: Biome
- **API Client**: Axios
- **Package Manager**: npm

## 基本指示
- **言語**: すべての回答およびコミュニケーションは**日本語**で行ってください。
- **コードスタイル**: 
    - Biome の設定に従ってください。
    - 関数コンポーネントはアロー関数を優先してください。
    - TypeScript の型定義を厳格に行ってください。
- **ディレクトリ構成**:
    - `src/components/ui`: shadcn/ui コンポーネント
    - `src/features`: 機能ごとの Redux slice やコンポーネント（今後作成予定）
    - `src/store`: Redux ストア設定（今後作成予定）

## 開発フロー
- 新しい機能を追加する際は、Redux Toolkit を使用した状態管理を検討してください。
- フォーマットやリントには `npm run check` または `npm run format` を使用してください。
