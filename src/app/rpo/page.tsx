import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  { title: "人材要件定義", description: "採用ターゲットの明確化と要件定義" },
  { title: "集客施策改善", description: "求人媒体やエージェント活用の最適化" },
  { title: "選考プロセス改善", description: "選考フローの設計と改善提案" },
  { title: "選考データ管理/採用レポート設計", description: "データに基づいた採用活動の可視化" },
  { title: "面接主催/選考イベント運営代行", description: "説明会や選考イベントの企画運営" },
  { title: "媒体サポートレーニング", description: "採用担当者のスキルアップ支援" },
  { title: "ダイレクトソーシング", description: "スカウト活動の代行・支援" },
  { title: "オウンドメディアリクルーティング", description: "自社採用サイトの構築・運用支援" },
];

const solutionSteps = [
  { title: "事業成長を見据えた", items: ["理念・ビジョン", "事業計画", "要員計画", "戦略策定・実行"] },
  { title: "人材採用の\nトータルソリューション", items: ["人材要件定義", "ターゲット設定", "選考プロセス設計", "集客チャネル選定", "定着活躍支援", "効果測定", "社内体制づくり", "候補者対応"] },
  { title: "ベンダーフリー\n採用チャネルの最適化", items: ["採用メディア", "人材紹介会社", "採用特設サイト", "リファラル", "SNS", "専門業界メディア", "デジタルマーケティング"] },
];

export default function RpoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[50%] h-full -z-10"
            style={{
              background: "linear-gradient(135deg, #ff3769 0%, #a519ff 100%)",
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; サービス &gt; RPO</p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">RPO（採用最適化の伴走）</h1>
            <p className="text-lg lg:text-xl max-w-xl">
              戦略立案から施策設計・実行まで、<br />
              各領域に特化したプロフェッショナルが伴走し、<br />
              採用成功にコミットする。
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-b border-gray-200 sticky top-20 bg-white z-40">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="flex gap-8 text-sm overflow-x-auto">
              <a href="#problem" className="py-4 whitespace-nowrap hover:text-[#ff3769] transition-colors">課題</a>
              <a href="#solution" className="py-4 whitespace-nowrap hover:text-[#ff3769] transition-colors">ソリューション</a>
              <a href="#feature" className="py-4 whitespace-nowrap hover:text-[#ff3769] transition-colors">特長</a>
              <a href="#services" className="py-4 whitespace-nowrap hover:text-[#ff3769] transition-colors">提供サービス</a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-[#ff3769] mb-2">Problem</p>
              <h2 className="text-2xl lg:text-3xl font-bold">課題</h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                採用が複雑化し難易度が上がっているが、<br />
                それに対する打ち手と人員が見つからない。
              </p>
              <p className="text-sm text-[#9b9b9b] leading-relaxed">
                採用手法が多様化する中で、求職者の志向も変化しています。そして企業側の採用難易度は上がり、専門性が求められるようになっています。
                しかし、多くの企業では採用担当者のリソースが限られており、すべての領域に対応することが難しい状況にあります。
              </p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-[#ff3769] mb-2">Solution</p>
              <h2 className="text-2xl lg:text-3xl font-bold">ソリューション</h2>
            </div>
            <div className="max-w-3xl mb-12">
              <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                一人で解決することができない採用課題には、それぞれの領域の<br />
                プロフェッショナルの力を掛け合わせるソリューションがいちばん効果的。
              </p>
              <p className="text-sm text-[#9b9b9b] leading-relaxed">
                こうした課題に対して、お客様と連携するメンバーを中心とした「プロジェクトチーム」を組成し、採用成功にむけて伴走します。
                「採用」は「契約」と同じくらい責任を伴う「管轄」を、自社ではなく「複数の力」で行う。そして、
                貴社の課題解決に最適なチームを組成し、一緒に成功に導きます。
              </p>
            </div>

            {/* Solution Diagram */}
            <div className="bg-white p-8 rounded-lg">
              <div className="relative">
                <Image
                  src="/images/diagrams/rpo-solution-diagram.png"
                  alt="RPOソリューション図"
                  width={1000}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature */}
        <section id="feature" className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-[#ff3769] mb-2">Feature</p>
              <h2 className="text-2xl lg:text-3xl font-bold">特長</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6">
                  アカウントマネージャーによる<br />
                  プロジェクトの最適化。
                </h3>
                <p className="text-sm text-[#9b9b9b] leading-relaxed">
                  採用プロジェクトは何かと課題が発生します。専門性を持つチームにより「課題のタイムリーな解決」ができ、採用の成功へと導いていきます。
                  プロジェクトを俯瞰してアカウントマネージャーが、「採用」と「経営」をつなぐ役割を担い、
                  プロジェクト全体を推進していきます。
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/photos/seminar-scene.jpg"
                  alt="アカウントマネージャー"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-[#ff3769] mb-2">Our Service</p>
              <h2 className="text-2xl lg:text-3xl font-bold">提供サービス</h2>
            </div>

            <div className="max-w-3xl mb-12">
              <p className="text-lg font-medium leading-relaxed">
                貴社の課題に最適なチームを組成し、採用成功をスピーディに実現。
                戦略から運用まで、部分的なご支援、全体的なご支援、いずれの形でもご支援可能です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#ff3769]">★</span>
                    <h4 className="font-bold text-sm">{service.title}</h4>
                  </div>
                  <p className="text-xs text-[#9b9b9b]">{service.description}</p>
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
