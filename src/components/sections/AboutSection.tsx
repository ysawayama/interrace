import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title */}
          <div>
            <p className="text-sm text-[#ff3769] mb-2">About us</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">私たちについて</h2>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm leading-relaxed text-[#414141] mb-8">
              InterRaceは、採用をより高度に広範囲に捉えた「タレントアクイジション」の専門家集団です。
              顧客企業がタレントアクイジション機能を獲得するための支援を通して、企業成長と、日本を元気にする。
              それが私たちの存在意義です。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#414141] hover:text-[#ff3769] transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center border border-[#414141] rounded-full">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
