import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const caseStudies = [
  {
    slug: "fundinno-1",
    company: "FUNDINNO",
    logo: "FUNDINNO",
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    hasImage: false,
  },
  {
    slug: "fundinno-2",
    company: "FUNDINNO",
    logo: "FUNDINNO",
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    hasImage: false,
  },
  {
    slug: "startup-a",
    company: "スタートアップA社",
    logo: null,
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    hasImage: true,
  },
  {
    slug: "enterprise-b",
    company: "FUNDINNO",
    logo: "FUNDINNO",
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    hasImage: false,
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; 事例紹介</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">事例紹介</h1>
            <p className="text-sm text-[#ff3769]">Case Study</p>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-study/${study.slug}`}
                  className="group block bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Logo/Image Area */}
                  <div className="h-48 flex items-center justify-center bg-[#f4f4f4]">
                    {study.hasImage ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="1">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-[#64cfe5]">{study.logo}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-[#414141] mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <p className="text-xs text-[#9b9b9b]">
                      株式会社{study.company}さま
                    </p>
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
