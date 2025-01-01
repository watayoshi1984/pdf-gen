# プロジェクト構造

## ルートディレクトリ
```
StylishFormPDFGenerator/
├── app/                    # Next.js 13のApp Routerディレクトリ
│   ├── globals.css        # グローバルスタイル定義
│   ├── layout.tsx        # アプリケーションのレイアウト定義（PWA対応）
│   └── page.tsx          # メインページのコンポーネント
│
├── components/            # Reactコンポーネント
│   ├── ui/              # 共通UIコンポーネント
│   │   ├── button.tsx   # ボタンコンポーネント
│   │   ├── dialog.tsx   # ダイアログコンポーネント
│   │   ├── scroll-area.tsx # スクロールエリアコンポーネント
│   │   ├── toast.tsx    # トースト通知コンポーネント
│   │   ├── toaster.tsx  # トースト通知管理コンポーネント
│   │   ├── tooltip.tsx  # ツールチップコンポーネント
│   │   └── use-toast.ts # トースト通知フック
│   │
│   ├── AppBar.tsx       # アプリケーションヘッダー
│   ├── EmailDialog.tsx  # メール送信用ダイアログ
│   ├── FavoriteButton.tsx # お気に入り登録ボタン（PWA/ブックマーク）
│   ├── FormContent.tsx  # フォームのメインコンテンツ
│   ├── PDFGenerator.tsx # PDF生成機能
│   ├── PreviewDialog.tsx # プレビュー表示用ダイアログ
│   └── Sidebar.tsx      # サイドバーコンポーネント（ホバー説明付き）
│
├── lib/                  # ユーティリティ関数
│   └── utils.ts         # 共通ユーティリティ関数（スタイル結合など）
│
├── public/               # 静的ファイル
│   └── icons/           # アプリケーションアイコン
│       ├── icon.svg     # SVGアイコン
│       ├── icon-192x192.png # PWA用アイコン（小）
│       └── icon-512x512.png # PWA用アイコン（大）
│
├── types/                # TypeScript型定義
│   └── html2pdf.d.ts    # HTML to PDF変換ライブラリの型定義
│
├── utils/                # ユーティリティ機能
│   └── emailSender.ts   # メール送信機能
│
├── .env.production      # 本番環境用環境変数
├── manifest.json        # PWAマニフェスト設定
├── next.config.js       # Next.js設定（PWA対応）
├── package.json         # プロジェクト依存関係
├── postcss.config.js    # PostCSS設定
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── wrangler.toml        # Cloudflare Pages設定
```

## 主要コンポーネントの説明

### アプリケーション構造
- `app/layout.tsx`: アプリケーション全体のレイアウトを定義、PWA対応とトースト通知の設定
- `app/page.tsx`: メインページのコンポーネント、フォーム入力とPDF生成の中心
- `app/globals.css`: グローバルスタイルシート、アニメーションとテーマ設定

### コンポーネント
#### 共通UIコンポーネント
- `button.tsx`: 再利用可能なボタンコンポーネント（バリアント対応）
- `dialog.tsx`: モーダルダイアログコンポーネント
- `scroll-area.tsx`: カスタムスクロールエリアコンポーネント
- `toast.tsx`: トースト通知コンポーネント
- `tooltip.tsx`: ツールチップコンポーネント
- `use-toast.ts`: トースト通知管理用カスタムフック

#### アプリケーション固有のコンポーネント
- `AppBar.tsx`: アプリケーションのヘッダーバー、タイトルとナビゲーション
- `EmailDialog.tsx`: PDFをメールで送信するためのダイアログ
- `FavoriteButton.tsx`: お気に入り登録ボタン（PC/スマホで動作が異なる）
- `FormContent.tsx`: フォーム入力のメインコンテンツ
- `PDFGenerator.tsx`: HTML to PDF変換機能
- `PreviewDialog.tsx`: 生成したPDFのプレビュー表示とお気に入り登録
- `Sidebar.tsx`: サイドバーのナビゲーション（ホバーで説明表示）

### PWA対応
- `manifest.json`: PWAのマニフェスト設定
- `public/icons/`: PWA用のアイコンセット
- `next.config.js`: PWA対応の設定（next-pwa）

### ユーティリティ
- `lib/utils.ts`: 共通で使用するユーティリティ関数（スタイル結合など）
- `utils/emailSender.ts`: メール送信機能の実装

### 型定義
- `types/html2pdf.d.ts`: HTML to PDF変換ライブラリの型定義

### 設定ファイル
- `next.config.js`: Next.jsの設定（静的エクスポート、PWA対応）
- `wrangler.toml`: Cloudflare Pagesのデプロイ設定
- `tailwind.config.js`: UIスタイリングのカスタマイズ設定
- `postcss.config.js`: CSSプロセッサーの設定
- `tsconfig.json`: TypeScriptのコンパイル設定

## 主要機能
1. フォーム入力とPDF生成
   - 美しいフォームデザイン
   - PDFプレビュー
   - PDFダウンロード
   - メール送信

2. PWAとお気に入り機能
   - PCの場合：ブックマーク登録
   - スマホの場合：PWAとしてホーム画面に追加
   - アプリケーションアイコン（192x192, 512x512）

3. サイドバーナビゲーション
   - お知らせ
   - 使い方
   - よくある質問
   - 問合せ
   - ホバーで詳細説明表示

4. UI/UX機能
   - トースト通知
   - ツールチップ
   - モーダルダイアログ
   - カスタムスクロールエリア
   - アニメーション効果 