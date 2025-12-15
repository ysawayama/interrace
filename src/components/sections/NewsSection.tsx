import Link from "next/link";

const newsItems = [
  {
    date: "2023.04.01",
    title: "セミナーを開催しました。",
    slug: "seminar-2023",
  },
  {
    date: "2023.04.01",
    title: "セミナーを開催しました。",
    slug: "seminar-2023-2",
  },
  {
    date: "2023.04.01",
    title: "コーポレートサイトをリニューアルしました。",
    slug: "website-renewal",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f4f4f4]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-[#ff3769] mb-2">News</p>
          <h2 className="text-3xl lg:text-4xl font-bold">ニュース</h2>
        </div>

        {/* News List */}
        <div className="bg-white rounded-lg overflow-hidden mb-12">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={`/news/${item.slug}`}
              className="flex items-center gap-6 px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-[#f4f4f4] transition-colors"
            >
              <span className="text-sm text-[#9b9b9b] whitespace-nowrap">{item.date}</span>
              <span className="text-sm text-[#414141]">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
          >
            ニュース一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
