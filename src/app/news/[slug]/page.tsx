import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const newsData: Record<string, { date: string; title: string; content: string }> = {
  "seminar-2023-04": {
    date: "2023.04.15",
    title: "セミナーを開催しました。",
    content: `この度、採用戦略に関するセミナーを開催いたしました。

多くの企業様にご参加いただき、誠にありがとうございました。

セミナーでは、以下のテーマについてお話しさせていただきました。

■ セミナー内容
・タレントアクイジションとは何か
・採用市場の最新トレンド
・成功する採用戦略の立て方
・RPOサービスの活用方法

今後もこのようなセミナーを定期的に開催してまいりますので、ご興味のある方はお気軽にお問い合わせください。

次回セミナーの開催情報は、当サイトおよびメールマガジンにてお知らせいたします。`
  },
  "website-renewal": {
    date: "2023.03.15",
    title: "コーポレートサイトをリニューアルしました。",
    content: `この度、InterRaceのコーポレートサイトをリニューアルいたしました。

より分かりやすく、使いやすいサイトを目指し、デザインと構成を一新いたしました。

■ リニューアルのポイント
・サービス内容をより詳しく掲載
・事例紹介ページの充実
・スマートフォン対応の強化
・お問い合わせフォームの改善

今後とも、InterRaceをよろしくお願いいたします。`
  }
};

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = newsData[params.slug] || newsData["seminar-2023-04"];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[800px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; お知らせ &gt; {news.title}</p>
            <p className="text-sm text-[#ff3769] mb-4">News</p>
            <p className="text-sm text-[#9b9b9b] mb-4">{news.date}</p>
            <h1 className="text-2xl lg:text-3xl font-bold">{news.title}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-4 lg:px-8">
            <div className="prose prose-sm max-w-none">
              <div className="text-sm text-[#414141] leading-relaxed whitespace-pre-line">
                {news.content}
              </div>
            </div>

            {/* Back to List */}
            <div className="text-center mt-16 pt-8 border-t border-gray-100">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
              >
                一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
