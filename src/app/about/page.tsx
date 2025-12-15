import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const members = [
  { name: "國本 弦", role: "代表取締役", description: "リクルート出身。HR領域での経験を活かし、企業の人材戦略を支援。" },
  { name: "二上 浩美", role: "取締役", description: "人材業界20年以上の経験。採用戦略のプロフェッショナル。" },
  { name: "森 万里子", role: "シニアコンサルタント", description: "大手企業の採用支援を多数手がける。" },
  { name: "田中 太郎", role: "コンサルタント", description: "IT業界専門のリクルーター。" },
  { name: "山田 花子", role: "コンサルタント", description: "金融・コンサル業界を得意とする。" },
  { name: "佐藤 一郎", role: "コンサルタント", description: "スタートアップ採用のスペシャリスト。" },
  { name: "鈴木 美咲", role: "コンサルタント", description: "新卒採用・インターン設計が専門。" },
  { name: "高橋 健", role: "コンサルタント", description: "製造業・メーカー採用に強み。" },
];

const companyInfo = [
  { label: "会社名", value: "株式会社InterRace" },
  { label: "設立", value: "2021年4月" },
  { label: "代表者", value: "國本 弦" },
  { label: "所在地", value: "東京都渋谷区" },
  { label: "事業内容", value: "タレントアクイジション支援、RPO、人材紹介、PMOサービス" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-sm text-[#ff3769] mb-2">About us</p>
            <h1 className="text-4xl lg:text-5xl font-bold">私たちについて</h1>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/photos/business-meeting.jpg"
                  alt="ミーティング風景"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-sm text-[#ff3769] mb-2">Purpose</p>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">存在目的</h2>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  経営戦略に人事戦略を紐づけ、<br />
                  企業の成長に寄与し、日本を元気にする。
                </p>
                <p className="text-sm text-[#9b9b9b] leading-relaxed">
                  人材を「資本」と捉え創出価値を最大化していく人材戦略へと見直しが求められる時代。
                  今こそタレントアクイジション機能の強化が、日本においても強く求められています。
                  日本の企業が世界で戦えるよう、私たちは人材戦略の側面から支援します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-[#ff3769] mb-2">Feature</p>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">特長</h2>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  私たちは、<br />
                  企業成長にコミットする戦略採用ファームです。
                </p>
                <p className="text-sm text-[#9b9b9b] leading-relaxed">
                  採用をより高度に、広範囲に捉えた「タレントアクイジション」の専門家集団として、
                  単なる採用代行ではなく、経営戦略に紐づいた人材戦略の立案から実行まで、
                  一気通貫でご支援します。手を動かすことで成果を出す、結果の出るプロ集団です。
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/photos/hero-business-scene.jpg"
                  alt="ビジネスシーン"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-[#ff3769] mb-2">Message</p>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">代表メッセージ</h2>

              <div className="mb-8">
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  「はたらく」は進化する。<br />
                  持続的な成長を求めるプロフェッショナル<br />
                  企業パートナーとして。
                </p>
              </div>

              <div className="text-sm text-[#414141] leading-relaxed space-y-4">
                <p>
                  企業を取り巻く環境は、テクノロジーの進化、グローバル化、働き方の多様化により、
                  かつてないスピードで変化しています。このような時代において、
                  企業の持続的な成長を実現するためには、優秀な人材の獲得と活躍が不可欠です。
                </p>
                <p>
                  私たちInterRaceは、「タレントアクイジション」という概念を日本に根付かせ、
                  企業の人材戦略を経営戦略と連動させることで、真の企業価値向上に貢献します。
                  採用のプロフェッショナルとして、お客様の成長に寄り添い、
                  共に未来を創造していきたいと考えています。
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#f4f4f4] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9b9b9b]">代表取締役</p>
                  <p className="font-medium">國本 弦</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <p className="text-sm text-[#ff3769] mb-2">Service Area</p>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">サービス領域</h2>
              <p className="text-xl font-medium">
                最適人材の充足により、<br />
                企業の事業成長を支える。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#ff3769] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RPO</span>
                </div>
                <h3 className="font-bold mb-2">RPO</h3>
                <p className="text-sm text-[#9b9b9b]">採用業務の代行・最適化</p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#00c378] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AGENT</span>
                </div>
                <h3 className="font-bold mb-2">AGENT</h3>
                <p className="text-sm text-[#9b9b9b]">人材紹介・マッチング</p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#64cfe5] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">内定後</span>
                </div>
                <h3 className="font-bold mb-2">内定後</h3>
                <p className="text-sm text-[#9b9b9b]">オンボーディング支援</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Members */}
        <section id="members" className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <p className="text-sm text-[#ff3769] mb-2">Member</p>
              <h2 className="text-2xl lg:text-3xl font-bold">メンバー</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#f4f4f4] overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-[#9b9b9b]">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-[#9b9b9b] mb-1">{member.role}</p>
                  <p className="text-sm font-medium mb-2">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <p className="text-sm text-[#ff3769] mb-2">Company Profile</p>
              <h2 className="text-2xl lg:text-3xl font-bold">会社概要</h2>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row border-b border-gray-100 last:border-b-0"
                >
                  <div className="md:w-1/4 px-6 py-4 bg-[#f4f4f4] font-medium text-sm">
                    {item.label}
                  </div>
                  <div className="md:w-3/4 px-6 py-4 text-sm">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
