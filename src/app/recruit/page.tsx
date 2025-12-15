import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const positions = [
  {
    title: "採用コンサルタント",
    type: "正社員",
    location: "東京",
    description: "クライアント企業の採用課題解決に向けたコンサルティング業務を担当していただきます。",
  },
  {
    title: "RPOプロジェクトマネージャー",
    type: "正社員",
    location: "東京",
    description: "RPOプロジェクトの全体管理、クライアントとの折衝、チームマネジメントを担当していただきます。",
  },
  {
    title: "リクルーター",
    type: "正社員 / 業務委託",
    location: "リモート可",
    description: "クライアント企業の採用代行業務（スカウト、面接調整、候補者対応など）を担当していただきます。",
  },
];

const values = [
  { title: "成長機会", description: "多様なクライアント・プロジェクトを通じて、幅広いスキルと経験を積むことができます。" },
  { title: "プロフェッショナル集団", description: "採用のプロフェッショナルが集まる環境で、高いレベルで切磋琢磨できます。" },
  { title: "柔軟な働き方", description: "リモートワークやフレックスタイムなど、柔軟な働き方を推進しています。" },
];

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(135deg, #00c378 0%, #4fd8a3 50%, #6ee6ff 100%)",
            }}
          />
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-white">
            <p className="text-xs opacity-80 mb-4">HOME &gt; 採用情報</p>
            <p className="text-sm opacity-80 mb-2">Recruit</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">採用情報</h1>
            <p className="text-lg lg:text-xl max-w-xl opacity-90">
              タレントアクイジションのプロフェッショナルとして<br />
              キャリアを歩みませんか。
            </p>
          </div>
        </section>

        {/* Message */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                採用のプロとして、<br />
                企業の成長を支える仕事
              </h2>
              <p className="text-sm text-[#9b9b9b] leading-relaxed">
                InterRaceは、「タレントアクイジション」という新しい概念を日本に根付かせ、
                企業の人材戦略を支援するプロフェッショナル集団です。
                私たちは、採用を通じて企業の成長に貢献し、日本を元気にすることを目指しています。
                志を同じくする仲間を募集しています。
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm text-[#ff3769] mb-2">Why InterRace</p>
              <h2 className="text-2xl lg:text-3xl font-bold">InterRaceで働く魅力</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#ff3769] to-[#a519ff] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-[#9b9b9b]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positions */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <p className="text-sm text-[#ff3769] mb-2">Open Positions</p>
              <h2 className="text-2xl lg:text-3xl font-bold">募集職種</h2>
            </div>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{position.title}</h3>
                      <p className="text-sm text-[#9b9b9b] mb-3">{position.description}</p>
                      <div className="flex gap-4 text-xs">
                        <span className="px-3 py-1 bg-[#f4f4f4] rounded-full">{position.type}</span>
                        <span className="px-3 py-1 bg-[#f4f4f4] rounded-full">{position.location}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-block px-6 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors text-center"
                    >
                      応募する
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#414141] text-white text-center">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              一緒に働きませんか？
            </h2>
            <p className="text-sm opacity-80 mb-8 max-w-xl mx-auto">
              まずはカジュアルにお話ししましょう。<br />
              ご興味のある方は、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-sm font-medium bg-white text-[#414141] rounded-full hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
