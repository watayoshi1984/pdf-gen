# プロジェクト構造

## ルートディレクトリ
```
StylishFormPDFGenerator/
├── app/                    # Next.js 13のApp Routerディレクトリ
│   ├── globals.css        # グローバルスタイル定義
│   ├── layout.tsx        # アプリケーションのレイアウト定義
│   └── page.tsx          # メインページのコンポーネント
│
├── components/            # Reactコンポーネント
│   ├── ui/              # 共通UIコンポーネント
│   ├── AppBar.tsx       # アプリケーションヘッダー
│   ├── EmailDialog.tsx  # メール送信用ダイアログ
│   ├── FormContent.tsx  # フォームのメインコンテンツ
│   ├── PDFGenerator.tsx # PDF生成機能
│   ├── PreviewDialog.tsx # プレビュー表示用ダイアログ
│   └── Sidebar.tsx      # サイドバーコンポーネント
│
├── lib/                  # ユーティリティ関数
│   └── utils.ts         # 共通ユーティリティ関数
│
├── types/                # TypeScript型定義
│   └── html2pdf.d.ts    # HTML to PDF変換ライブラリの型定義
│
├── utils/                # ユーティリティ機能
│   └── emailSender.ts   # メール送信機能
│
├── .env.production      # 本番環境用環境変数
├── next.config.js       # Next.js設定
├── package.json         # プロジェクト依存関係
├── postcss.config.js    # PostCSS設定
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── wrangler.toml        # Cloudflare Pages設定
```

## 主要コンポーネントの説明

### アプリケーション構造
- `app/layout.tsx`: アプリケーション全体のレイアウトを定義
- `app/page.tsx`: メインページのコンポーネント、フォーム入力とPDF生成の中心
- `app/globals.css`: グローバルスタイルシート

### コンポーネント
- `AppBar.tsx`: アプリケーションのヘッダーバー、タイトルとナビゲーション
- `EmailDialog.tsx`: PDFをメールで送信するためのダイアログ
- `FormContent.tsx`: フォーム入力のメインコンテンツ
- `PDFGenerator.tsx`: HTML to PDF変換機能
- `PreviewDialog.tsx`: 生成したPDFのプレビュー表示
- `Sidebar.tsx`: サイドバーのナビゲーション

### ユーティリティ
- `lib/utils.ts`: 共通で使用するユーティリティ関数
- `utils/emailSender.ts`: メール送信機能の実装

### 型定義
- `types/html2pdf.d.ts`: HTML to PDF変換ライブラリの型定義

### 設定ファイル
- `next.config.js`: Next.jsの設定（静的エクスポート設定など）
- `wrangler.toml`: Cloudflare Pagesのデプロイ設定
- `tailwind.config.js`: UIスタイリングのカスタマイズ設定
- `postcss.config.js`: CSSプロセッサーの設定
- `tsconfig.json`: TypeScriptのコンパイル設定 