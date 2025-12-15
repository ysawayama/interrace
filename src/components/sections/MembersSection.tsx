import Image from "next/image";
import Link from "next/link";

const members = [
  { name: "國本 弦", role: "代表取締役" },
  { name: "二上 浩美", role: "取締役" },
  { name: "森 万里子", role: "コンサルタント" },
  { name: "田中 太郎", role: "コンサルタント" },
  { name: "山田 花子", role: "コンサルタント" },
  { name: "佐藤 一郎", role: "コンサルタント" },
];

export default function MembersSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10">
        <Image
          src="/images/members/members-x-design.png"
          alt=""
          fill
          className="object-contain opacity-50"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-[#ff3769] mb-2">Member</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">メンバー</h2>
          <p className="text-sm text-[#9b9b9b]">
            経験豊かなプロフェッショナルをご紹介します。
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
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
              <p className="text-sm font-medium">{member.name}</p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/about#members"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
          >
            メンバー紹介ページを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
