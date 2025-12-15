import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    slug: "talent-acquisition-basics",
    category: "タレントアクイジション",
    title: "タレントアクイジションとは？採用との違いを解説",
    date: "2023.04.01",
    description: "タレントアクイジションの基本概念と、従来の採用活動との違いについて詳しく解説します。",
  },
  {
    slug: "rpo-benefits",
    category: "RPO",
    title: "RPO導入のメリットと成功のポイント",
    date: "2023.03.15",
    description: "RPO（採用代行）を導入することで得られるメリットと、成功させるためのポイントを紹介します。",
  },
  {
    slug: "interview-techniques",
    category: "採用ノウハウ",
    title: "優秀な人材を見極める面接テクニック",
    date: "2023.03.01",
    description: "面接で候補者の本質を見極めるためのテクニックとポイントを解説します。",
  },
  {
    slug: "employer-branding",
    category: "採用ブランディング",
    title: "採用ブランディングの重要性と実践方法",
    date: "2023.02.15",
    description: "優秀な人材に選ばれる企業になるための採用ブランディング戦略について解説します。",
  },
];

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; ナレッジ</p>
            <p className="text-sm text-[#ff3769] mb-2">Knowledge</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">ナレッジ</h1>
            <p className="text-sm text-[#9b9b9b] max-w-xl">
              タレントアクイジションや採用に関する知見・ノウハウを発信しています。
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/knowledge/${article.slug}`}
                  className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-[#ff3769] to-[#a519ff] opacity-80" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs px-3 py-1 bg-[#f4f4f4] rounded-full">{article.category}</span>
                      <span className="text-xs text-[#9b9b9b]">{article.date}</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-[#ff3769] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#9b9b9b] line-clamp-2">{article.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
