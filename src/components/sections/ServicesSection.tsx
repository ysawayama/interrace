import Link from "next/link";

const services = [
  {
    title: "タレントアクイジション支援",
    description: "経営戦略起点での人材調達戦略の立案、採用や外部調達にとらわれない「人材調達」全般の企画〜実行までをご支援します。",
    href: "/services",
  },
  {
    title: "RPO（採用最適化の伴走）",
    description: "貴社の課題に最適なチームを組成し、採用成功をスピーディに実現します。戦略から運用まで、部分的なご支援、全体的なご支援、いずれの形でもご支援可能です。",
    href: "/rpo",
  },
  {
    title: "専門リクルーター・採用プロのご紹介",
    description: "業務委託あるいは人材紹介の適した方法で、貴社採用ターゲットや業社課題に最適なリクルーターをご紹介いたします。",
    href: "/services",
  },
  {
    title: "人材紹介サービス",
    description: "様々な業種業界、候補者ターゲットに対応してきた専門リクルーター陣だからこそ、貴社の事業成長に今必要な人材を、的確にご紹介いたします。",
    href: "/services",
  },
  {
    title: "PMOサービス",
    description: "様々なテーマに応じて内外から最適人材を調達し、プロジェクトを組成することで課題解決につなげます。社内調達や採用が難しいテーマでご利用頂いております。",
    href: "/services",
  },
];

const personalServices = [
  {
    title: "転職・キャリア相談サービス",
    description: "ご志向や強みを丁寧にヒアリングした上で納得感のある転職をご支援します。転職をまだお考えでない方でも経験豊富なコンサルタントがキャリア形成に伴走します。",
    href: "/services",
  },
  {
    title: "プロリクルーター支援サービス",
    description: "案件のご紹介、リクルーターとしての専門性の強化、キャリアアップ、横のつながりの提供など、様々な側面からリクルーターの皆さまを支援しております。",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f4f4f4]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-[#ff3769] mb-2">Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">サービス</h2>
          <p className="text-sm text-[#9b9b9b] max-w-2xl">
            InterRaceは採用の専門家として、最適なタレントアクイジションソリューションを提供しています。
            手を動かすことで成果を出す、結果の出るプロ集団として、様々な形でご支援します。
          </p>
        </div>

        {/* Business Services */}
        <div className="mb-16">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff3769] rounded-full"></span>
            企業向けサービス
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-3">{service.title}</h4>
                <p className="text-sm text-[#9b9b9b] mb-4 line-clamp-3">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block px-4 py-2 text-xs border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
                >
                  MORE
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Services */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00c378] rounded-full"></span>
            個人向サービス
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {personalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-3">{service.title}</h4>
                <p className="text-sm text-[#9b9b9b] mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block px-4 py-2 text-xs border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
                >
                  MORE
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
          >
            サービスラインナップを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
