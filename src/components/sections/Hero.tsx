import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Diagonal Background */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full -z-10"
        style={{
          background: "linear-gradient(135deg, #4fd8a3 0%, #d2f000 100%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="relative z-10">
            <p className="text-sm text-[#414141] mb-4">任せられるプロがいる。</p>
            <h1 className="mb-6">
              <span
                className="block text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight"
                style={{ fontFamily: "var(--font-ubuntu), Ubuntu, sans-serif" }}
              >
                We are<br />
                <span className="text-[#00c378]">Talent Acquisition</span><br />
                Farm
              </span>
            </h1>
            <p className="text-sm text-[#9b9b9b]">
              企業成長にコミットするタレントアクイジションファーム
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/hero/hero-x-green-yellow.png"
                alt="InterRace Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
