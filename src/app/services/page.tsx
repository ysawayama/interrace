import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const businessServices = [
  {
    title: "タレントアクイジション支援",
    description: "経営戦略起点での人材調達戦略の立案、採用や外部調達にとらわれない「人材調達」全般の企画〜実行までをご支援します。",
    href: "/services/talent-acquisition",
    colors: ["#ff3769", "#ffe600", "#00c378", "#64cfe5"],
  },
  {
    title: "RPO（採用最適化の伴走）",
    description: "貴社の課題に最適なチームを組成し、採用成功をスピーディに実現します。戦略から運用まで、部分的なご支援、全体的なご支援、いずれの形でもご支援可能です。",
    href: "/rpo",
    colors: ["#a519ff", "#6ee6ff", "#d2f000", "#ff3769"],
  },
  {
    title: "専門リクルーター・採用プロのご紹介",
    description: "業務委託あるいは人材紹介の適した方法で、貴社採用ターゲットや業社課題に最適なリクルーターをご紹介いたします。",
    href: "/services/recruiter",
    colors: ["#00c378", "#64cfe5", "#ff3769", "#ffe600"],
  },
  {
    title: "人材紹介サービス",
    description: "様々な業種業界、候補者ターゲットに対応してきた専門リクルーター陣だからこそ、貴社の事業成長に今必要な人材を、的確にご紹介いたします。",
    href: "/services/staffing",
    colors: ["#64cfe5", "#a519ff", "#ffe600", "#00c378"],
  },
  {
    title: "PMOサービス",
    description: "様々なテーマに応じて内外から最適人材を調達し、プロジェクトを組成することで課題解決につなげます。社内調達や採用が難しいテーマでご利用頂いております。",
    href: "/services/pmo",
    colors: ["#ffe600", "#ff3769", "#a519ff", "#64cfe5"],
  },
];

const personalServices = [
  {
    title: "転職・キャリア相談サービス",
    description: "ご志向や強みを丁寧にヒアリングした上で納得感のある転職をご支援します。転職をまだお考えでない方でも経験豊富なコンサルタントがキャリア形成に伴走します。",
    href: "/services/career",
    colors: ["#ff3769", "#a519ff", "#00c378", "#ffe600"],
  },
  {
    title: "プロリクルーター支援サービス",
    description: "案件のご紹介、リクルーターとしての専門性の強化、キャリアアップ、横のつながりの提供など、様々な側面からリクルーターの皆さまを支援しております。",
    href: "/services/pro-recruiter",
    colors: ["#64cfe5", "#d2f000", "#ff3769", "#a519ff"],
  },
];

function ServiceIllustration({ colors }: { colors: string[] }) {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person icons arranged in X pattern */}
      <g>
        {/* Top left */}
        <circle cx="40" cy="30" r="20" fill={colors[0]} opacity="0.9" />
        <circle cx="40" cy="22" r="8" fill="white" />
        <path d="M28 42C28 36 33 32 40 32C47 32 52 36 52 42" stroke="white" strokeWidth="3" fill="none" />

        {/* Top right */}
        <circle cx="160" cy="30" r="20" fill={colors[1]} opacity="0.9" />
        <circle cx="160" cy="22" r="8" fill="white" />
        <path d="M148 42C148 36 153 32 160 32C167 32 172 36 172 42" stroke="white" strokeWidth="3" fill="none" />

        {/* Center */}
        <circle cx="100" cy="60" r="25" fill={colors[2]} opacity="0.9" />
        <circle cx="100" cy="50" r="10" fill="white" />
        <path d="M85 75C85 67 91 62 100 62C109 62 115 67 115 75" stroke="white" strokeWidth="3" fill="none" />

        {/* Bottom left */}
        <circle cx="40" cy="90" r="18" fill={colors[3]} opacity="0.9" />
        <circle cx="40" cy="83" r="7" fill="white" />
        <path d="M29 100C29 95 34 91 40 91C46 91 51 95 51 100" stroke="white" strokeWidth="2.5" fill="none" />

        {/* Bottom right */}
        <circle cx="160" cy="90" r="18" fill={colors[0]} opacity="0.7" />
        <circle cx="160" cy="83" r="7" fill="white" />
        <path d="M149 100C149 95 154 91 160 91C166 91 171 95 171 100" stroke="white" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; サービス</p>
            <p className="text-sm text-[#ff3769] mb-2">Services</p>
            <h1 className="text-4xl lg:text-5xl font-bold">サービス</h1>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-b border-gray-200">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="flex gap-8 text-sm">
              <a href="#business" className="py-4 border-b-2 border-[#ff3769] text-[#ff3769] font-medium">
                企業向けサービス
              </a>
              <a href="#personal" className="py-4 border-b-2 border-transparent hover:text-[#ff3769] transition-colors">
                個人向サービス
              </a>
            </div>
          </div>
        </section>

        {/* Business Services */}
        <section id="business" className="py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold">
                企業向けサービス
                <span className="text-sm font-normal text-[#ff3769] ml-4">To Business</span>
              </h2>
            </div>

            <div className="space-y-16">
              {businessServices.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-sm text-[#9b9b9b] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-block px-6 py-2.5 text-sm border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
                    >
                      MORE
                    </Link>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <ServiceIllustration colors={service.colors} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Services */}
        <section id="personal" className="py-16 lg:py-24 bg-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold">
                個人向サービス
                <span className="text-sm font-normal text-[#00c378] ml-4">To Customer</span>
              </h2>
            </div>

            <div className="space-y-16">
              {personalServices.map((service, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-sm text-[#9b9b9b] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-block px-6 py-2.5 text-sm border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
                    >
                      MORE
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <ServiceIllustration colors={service.colors} />
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
