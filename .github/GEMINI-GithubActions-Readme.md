# Gemini CLI GitHub Actions 連携ガイド

このディレクトリには、Gemini CLI を GitHub Actions と連携させるための設定ファイルが格納されています。Gemini CLI は、コードレビュー、Issue の自動トリアージ、およびメンテナーからの直接的な指示に基づいたタスク実行を自律的に行います。

## 🚀 ワークフロー概要

主なワークフローの構成は以下の通りです。

### 1. Gemini Dispatch (`gemini-dispatch.yml`)
すべての Gemini CLI 操作の入り口となるコントローラーです。
- **トリガー**: Issue/PR の作成、コメントの投稿、レビューの送信。
- **役割**: コメント内容（例: `@gemini-cli /review`）を解析し、適切なサブワークフロー（Review, Triage, Invoke 等）を呼び出します。

### 2. Gemini Review (`gemini-review.yml`)
プルリクエストの自動コードレビューを実行します。
- **実行内容**: `gemini-review.toml` のプロンプトに基づき、修正箇所の論理性、セキュリティ、効率性、保守性をチェックします。
- **フィードバック**: PR 上に直接インラインコメントとサマリーを投稿します。重要度（🔴🟠🟡🟢）に応じた指摘を行います。

### 3. Gemini Triage (`gemini-triage.yml` / `gemini-scheduled-triage.yml`)
Issue の自動分類とラベル付けを行います。
- **オンデマンド**: `@gemini-cli /triage` コメントで即時実行。
- **スケジュール**: 1時間ごとに未分類の Issue をスキャンして自動実行。
- **実行内容**: タイトルと本文から適切なラベル（bug, enhancement 等）を判断し、理由を添えてラベルを付与します。

### 4. Gemini Invoke (`gemini-invoke.yml`)
メンテナーからの自由な指示を実行します。
- **実行方法**: `@gemini-cli [実行したい指示]` とコメントします。
- **役割**: 調査、コード修正の提案、ドキュメント作成など、コンテキストに応じた柔軟なタスク実行を支援します。

---

## 🛠 利用可能なコマンド (メンテナー向け)

Issue や Pull Request のコメント欄で以下のコマンドを使用することで、Gemini CLI を操作できます。
※実行にはリポジトリの `OWNER`, `MEMBER`, または `COLLABORATOR` 権限が必要です。

| コマンド | 対象 | 内容 |
| :--- | :--- | :--- |
| `@gemini-cli /review [コンテキスト]` | PR | PR のコードレビューを開始します。 |
| `@gemini-cli /triage` | Issue | Issue の自動トリアージを実行します。 |
| `@gemini-cli /approve` | PR/Issue | 提案された実行計画（Plan of Action）を承認し、実行に移します。 |
| `@gemini-cli [自由な指示]` | 両方 | 指示内容に基づいた調査や作業を Gemini CLI に依頼します。 |

---

## ⚙️ 仕組み

- **プロンプト定義**: `commands/` ディレクトリ内の `.toml` ファイルに、Gemini CLI の役割（Persona）や制約事項が定義されています。
- **MCP (Model Context Protocol)**: `gemini-invoke` や `gemini-review` では、GitHub MCP サーバーを使用して GitHub API と安全にやり取りを行います。
- **セキュリティ**:
    - すべての外部入力は「信頼できないデータ」として扱われます。
    - シェルのコマンド置換（`$(...)`）の禁止など、インジェクション対策が施されています。
    - 実行計画（Plan of Action）の提示と承認フローにより、意図しない破壊的変更を防止します。

---
*注意: `gemini-plan-execute.yml` は `dispatch` から参照されていますが、現在このリポジトリ内には配置されていません（外部参照または準備中の可能性があります）。*
