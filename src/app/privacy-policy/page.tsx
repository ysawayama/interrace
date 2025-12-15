import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. 個人情報の定義",
    content: `本プライバシーポリシーにおいて、個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）をいいます。`
  },
  {
    title: "2. 個人情報の収集方法",
    content: `当社は、お客様が当社のサービスをご利用いただく際に、お名前、メールアドレス、電話番号、会社名などの個人情報をお伺いすることがあります。これらの情報は、お問い合わせへの対応、サービスの提供、およびサービス向上のために使用いたします。`
  },
  {
    title: "3. 個人情報の利用目的",
    content: `当社は、収集した個人情報を以下の目的で利用いたします。

・お問い合わせへの対応
・当社サービスの提供および運営
・当社サービスに関するご案内
・サービス向上のための調査・分析
・その他上記に付随する業務`
  },
  {
    title: "4. 個人情報の第三者提供",
    content: `当社は、以下の場合を除き、お客様の同意を得ることなく、個人情報を第三者に提供することはありません。

・法令に基づく場合
・人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき`
  },
  {
    title: "5. 個人情報の安全管理",
    content: `当社は、個人情報の紛失、破壊、改ざんおよび漏洩などを防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。`
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content: `お客様がご自身の個人情報の開示、訂正、または削除を希望される場合は、当社までお問い合わせください。ご本人様確認の上、合理的な期間内に対応いたします。`
  },
  {
    title: "7. Cookieの使用について",
    content: `当社のウェブサイトでは、お客様の利便性向上のためCookieを使用しています。Cookieとは、ウェブサイトがお客様のコンピュータに送信する小さなテキストファイルです。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。`
  },
  {
    title: "8. プライバシーポリシーの変更",
    content: `当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更があった場合は、当ウェブサイト上でお知らせいたします。`
  },
  {
    title: "9. お問い合わせ窓口",
    content: `本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。

株式会社InterRace
東京都渋谷区
メール：info@interrace.co.jp`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; プライバシーポリシー</p>
            <p className="text-sm text-[#ff3769] mb-2">Privacy Policy</p>
            <h1 className="text-4xl lg:text-5xl font-bold">プライバシーポリシー</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-4 lg:px-8">
            <p className="text-sm text-[#414141] leading-relaxed mb-12">
              株式会社InterRace（以下「当社」といいます。）は、当社が提供するサービスにおいて、
              お客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg font-bold mb-4">{section.title}</h2>
                  <p className="text-sm text-[#414141] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-right">
              <p className="text-sm text-[#9b9b9b]">
                制定日：2021年4月1日<br />
                最終改定日：2023年4月1日<br />
                株式会社InterRace
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
