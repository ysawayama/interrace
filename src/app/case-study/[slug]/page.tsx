import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const caseStudyData = {
  "fundinno-1": {
    company: "FUNDINNO",
    title: "採用人数が増える企業のフェーズの変わり目にこそ、プロの力を借りて採用力を高める機会に。",
    interviewee: "執行役員 採用統括部長",
    intervieweeName: "山田 太郎",
    logo: "FUNDINNO",
    sections: [
      {
        heading: "事業拡大で採用の質と数がより求められるフェーズへ",
        content: `一般的にご理解いただける話は、どのような背景で採用課題を持つに至ったかというお話です。

弊社は、ビジネスの拡大に伴って、採用課題も成長の一因となりますが、特にエンジニアの採用と資金調達により、上の期待度が違い状態になりました。新しいプロダクトの開発と既存サービスの拡充を進めながら、コーポレートメンバーの採用もスピードを求められるフェーズに入りました。

そして、どのような顧客戦略を持つかによって、結果、繊細化された採用戦略の実行が求められるようになりました。

この状況、限定人数の採用担当者で、採用戦略から施策設計、実行まで確実に動体を回していくには無理があり、その中、柔軟かつ一気に対応できるプロの力を必要としました。そこで、InterRaceさんにお声がけをしました。`
      },
      {
        heading: "採用マーケットと自社の強み・弱みを把握した上で採用戦略を描けた。",
        content: `一緒にやり始めてまずは、採用市場の現状分析から、弊社に対する求職者感覚も確認、そのうえで、弊社がどういったポジショニングで市場の求職者にアプローチしていくかを議論しました。

一番変わったことは、そうした、採用市場、競争優位性、認知方法など、採りにいくエンジニアに対して、採用戦略を体系的に考えられるようになったということです。何となく感覚で採用活動をやっていたところから、採用をマーケティングと同じように考えるという設計思想に変わることができたので、手探り感なく施策に向き合えるようになったと思います。

InterRaceさんのサポートがはじまってからは、どんな人材に対して、求人媒体の書き方でどのように訴求していくのかを細かく設計しながら、媒体運用についてもご支援いただき、非常に心強く感じています。エージェント対策についても対面してレクチャーいただき、少しずつですがエージェント経由での応募も増えてきていて、PDCAをまわす体制を確立できたと思っています。`
      },
      {
        heading: "採用のプロの力を借りることで、採用力とスピードが圧倒的に変化。",
        content: `一般的に採用には、どのような形で取り組まれますか。しかも採用の素人が試行錯誤しながら、大きな時間をかけて成果をようやく出していくという形になりがちです。

InterRaceさんのご支援で、プロの知見をタイムリーにいただくことで、かなりスピーディにPDCAを回して、採用課題の解決に向かえていると感じています。言い換えれば、内製化を早めることができたと思います。

一採用運営サービスの導入は、確かにコストがかかることかもしれません。ただ、プロの力を借りるのと社内で試行錯誤するのとでは、成功までのスピード感が段違いです。`
      }
    ]
  }
};

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudyData["fundinno-1"]; // Default to first case study

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-white to-[#f4f4f4]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <p className="text-xs text-[#9b9b9b] mb-4">HOME &gt; 事例紹介 &gt; {study.company}</p>
            <p className="text-sm text-[#ff3769] mb-4">Case Study</p>
            <h1 className="text-2xl lg:text-3xl font-bold mb-6 max-w-2xl">
              {study.title}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-sm text-[#9b9b9b]">
                株式会社{study.company}<br />
                {study.interviewee}
              </p>
              <div className="ml-auto">
                <div className="bg-white px-8 py-4 rounded shadow-sm">
                  <span className="text-xl font-bold text-[#64cfe5]">{study.logo}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-4 lg:px-8">
            {study.sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-xl lg:text-2xl font-bold mb-6">{section.heading}</h2>
                <div className="text-sm text-[#414141] leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>

                {/* Interview Image (between sections) */}
                {index === 0 && (
                  <div className="my-12 grid md:grid-cols-2 gap-4">
                    <div className="relative h-[250px] bg-[#f4f4f4] rounded-lg overflow-hidden">
                      <Image
                        src="/images/photos/business-person-01.jpg"
                        alt="インタビュー風景"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[250px] bg-[#f4f4f4] rounded-lg overflow-hidden">
                      <Image
                        src="/images/photos/business-meeting.jpg"
                        alt="インタビュー風景"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Back to List */}
            <div className="text-center mt-16">
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium border border-[#414141] rounded-full hover:bg-[#414141] hover:text-white transition-colors"
              >
                一覧を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
