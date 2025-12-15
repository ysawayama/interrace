import Link from "next/link";

const footerNavItems = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "事例紹介", href: "/case-study" },
  { label: "ナレッジ", href: "/knowledge" },
  { label: "お知らせ", href: "/news" },
  { label: "採用情報", href: "/recruit" },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="bg-[#f4f4f4] py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Document Request */}
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#414141" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">資料請求</h3>
              <p className="text-sm text-[#9b9b9b] mb-6">
                InterRaceサービス資料をダウンロードいただけます。<br />
                RPOサービス、人材紹介エージェントをお探しの方は<br />
                ぜひご一読ください。
              </p>
              <Link
                href="/contact/document"
                className="inline-block px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
              >
                資料ダウンロード
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#414141" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">お問い合わせ</h3>
              <p className="text-sm text-[#9b9b9b] mb-6">
                お客様のタレントアクイジション課題の解決を全力で<br />
                サポートします。お気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 text-center">
        <p className="text-3xl lg:text-4xl font-medium mb-6">
          任せられるプロがいる。
        </p>
        <Logo />
      </section>

      {/* Footer Navigation */}
      <section className="bg-[#414141] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Nav Links */}
            <nav className="flex flex-wrap gap-6">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-[#ff3769] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact/document"
                className="px-6 py-2.5 text-sm font-medium border border-white rounded-full hover:bg-white hover:text-[#414141] transition-colors"
              >
                資料請求
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 text-sm font-medium border border-white rounded-full hover:bg-white hover:text-[#414141] transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-600">
            <FooterLogo />
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <span>Copyright© 2021 InterRace Inc. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3L9 12L3 21" stroke="#ff3769" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3L3 12L9 21" stroke="#ffe600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 3L21 12L15 21" stroke="#00c378" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 3L15 12L21 21" stroke="#64cfe5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27 3L33 12L27 21" stroke="#a519ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M33 3L27 12L33 21" stroke="#af61e2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-lg font-medium" style={{ fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif" }}>
        InterRace
      </span>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L8 10L2 18" stroke="#ff3769" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 2L2 10L8 18" stroke="#ffe600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2L20 10L14 18" stroke="#00c378" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 2L14 10L20 18" stroke="#64cfe5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 2L32 10L26 18" stroke="#a519ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 2L26 10L32 18" stroke="#af61e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-base font-medium text-white" style={{ fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif" }}>
        InterRace
      </span>
    </div>
  );
}
