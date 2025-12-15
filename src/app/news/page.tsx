import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const newsItems = [
  { date: "2023.04.15", title: "セミナーを開催しました。", slug: "seminar-2023-04" },
  { date: "2023.04.01", title: "セミナーを開催しました。", slug: "seminar-2023-04-01" },
  { date: "2023.03.15", title: "コーポレートサイトをリニューアルしました。", slug: "website-renewal" },
  { date: "2023.03.01", title: "新サービスを開始しました。", slug: "new-service" },
  { date: "2023.02.15", title: "オフィス移転のお知らせ", slug: "office-relocation" },
  { date: "2023.02.01", title: "年末年始休業のお知らせ", slug: "year-end-holiday" },
  { date: "2023.01.15", title: "新メンバーが加入しました。", slug: "new-member" },
  { date: "2023.01.01", title: "新年のご挨拶", slug: "new-year-greeting" },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; お知らせ</p>
            <p className="text-sm text-[#ff3769] mb-2">News</p>
            <h1 className="text-4xl lg:text-5xl font-bold">お知らせ</h1>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              {newsItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/news/${item.slug}`}
                  className="flex items-center gap-6 px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-[#f4f4f4] transition-colors"
                >
                  <span className="text-sm text-[#9b9b9b] whitespace-nowrap">{item.date}</span>
                  <span className="text-sm text-[#414141]">{item.title}</span>
                  <span className="ml-auto text-[#9b9b9b]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-10 h-10 flex items-center justify-center bg-[#414141] text-white rounded-full text-sm">1</span>
              <span className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-100 cursor-pointer">2</span>
              <span className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full text-sm hover:bg-gray-100 cursor-pointer">3</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
