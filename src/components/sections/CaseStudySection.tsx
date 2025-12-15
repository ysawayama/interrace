import Link from "next/link";

const caseStudies = [
  {
    company: "FUNDINNO",
    logo: "/images/photos/business-person-01.jpg",
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    slug: "fundinno",
  },
  {
    company: "FUNDINNO",
    logo: "/images/photos/business-meeting.jpg",
    description: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    slug: "fundinno-2",
  },
];

export default function CaseStudySection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-[#ff3769] mb-2">Case Study</p>
          <h2 className="text-3xl lg:text-4xl font-bold">事例紹介</h2>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={`/case-study/${study.slug}`}
              className="group block bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="h-16 flex items-center justify-center mb-6 bg-[#f4f4f4] rounded">
                  <span className="text-xl font-bold text-[#64cfe5]">{study.company}</span>
                </div>
                <p className="text-sm text-[#414141] mb-4">{study.description}</p>
                <p className="text-xs text-[#9b9b9b]">株式会社{study.company}さま</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
          >
            事例一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
