import Image from "next/image";
import Link from "next/link";

export default function RecruitSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #00c378 0%, #4fd8a3 50%, #6ee6ff 100%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="max-w-xl">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-white/80 mb-2">Recruit</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">採用情報</h2>
          </div>

          {/* Content */}
          <p className="text-sm text-white/90 leading-relaxed mb-8">
            タレントアクイジションのプロフェッショナルとして<br />
            キャリアを歩みませんか。
          </p>

          {/* CTA */}
          <Link
            href="/recruit"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium bg-white text-[#00c378] rounded-full hover:bg-gray-100 transition-colors"
          >
            採用情報を見る
          </Link>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[300px] opacity-30">
        <Image
          src="/images/hero/hero-x-cyan-purple.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
