# InterRace プロジェクト引き継ぎ

## プロジェクト概要
InterRace（人材採用ファーム）のコーポレートサイト
- **技術スタック**: Next.js 14 (App Router) + TailwindCSS v4 + TypeScript
- **リポジトリ**: https://github.com/ysawayama/interrace
- **本番URL**: Vercelでデプロイ済み（URLはVercelダッシュボードで確認）

## 現在の状態

### 完了済み
- [x] 全9ページの実装完了
  - HOME (`/`)
  - 私たちについて (`/about`)
  - サービス (`/services`)
  - RPO (`/rpo`)
  - 事例紹介 (`/case-study`, `/case-study/[slug]`)
  - お知らせ (`/news`, `/news/[slug]`)
  - ナレッジ (`/knowledge`)
  - 採用情報 (`/recruit`)
  - プライバシーポリシー (`/privacy-policy`)
- [x] レスポンシブ対応（モバイル/デスクトップ）
- [x] GitHubプッシュ完了
- [x] Vercelデプロイ完了

### 未実装・今後の課題
- [ ] お問い合わせフォーム（`/contact`）- 現在は各ページからリンクのみ
- [ ] ナレッジ詳細ページ（`/knowledge/[slug]`）
- [ ] メンバー写真の差し替え（現在はプレースホルダー）
- [ ] SEO対応（メタデータ、OGP画像）
- [ ] Google Analytics導入
- [ ] ビルドエラーの解消（`npm run build`で警告あり、devは問題なし）

## ローカル開発の再開方法

```bash
cd /Users/saway/ZEAMI/PixelBridge/InterRace/interrace
npm run dev
# http://localhost:3000 で確認
```

## ディレクトリ構造

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト（フォント設定）
│   ├── page.tsx        # HOMEページ
│   ├── globals.css     # デザイントークン
│   ├── about/
│   ├── services/
│   ├── rpo/
│   ├── case-study/
│   ├── news/
│   ├── knowledge/
│   ├── recruit/
│   └── privacy-policy/
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # ナビゲーション
│   │   └── Footer.tsx  # フッター
│   └── sections/       # HOMEページ用セクション
└── lib/
```

## デザインリソース

- **デザインカンプ**: `/Users/saway/ZEAMI/PixelBridge/InterRace/デザインカンプ/20230306_jpeg/`
- **抽出済み素材**: `/Users/saway/ZEAMI/PixelBridge/InterRace/assets/organized/`
- **デザイントークン**: `/Users/saway/ZEAMI/PixelBridge/InterRace/assets/design-tokens.json`

## 注意事項

1. **TailwindCSS v4**: `@theme inline`ディレクティブを使用。従来の`tailwind.config.ts`形式とは異なる
2. **画像パス**: `public/images/`配下に配置。`/images/xxx.jpg`でアクセス
3. **フォント**: Noto Sans JP（日本語）+ Ubuntu（英語・数字）

## GitHubへの変更反映

```bash
git add .
git commit -m "変更内容"
git push origin main
# Vercelが自動でデプロイ
```
