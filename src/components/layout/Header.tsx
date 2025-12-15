"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "私たちについて", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "事例紹介", href: "/case-study" },
  { label: "ナレッジ", href: "/knowledge" },
  { label: "お知らせ", href: "/news" },
  { label: "採用情報", href: "/recruit" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#414141] hover:text-[#ff3769] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact/document"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full"
              style={{ background: "linear-gradient(135deg, #ff3769 0%, #e56182 100%)" }}
            >
              資料請求
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full"
              style={{ background: "linear-gradient(135deg, #a519ff 0%, #6ee6ff 100%)" }}
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-[#414141] transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-[#414141] transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[#414141] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-[1280px] mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-[#414141] border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/contact/document"
                className="w-full py-3 text-center text-sm font-medium text-white rounded-full"
                style={{ background: "linear-gradient(135deg, #ff3769 0%, #e56182 100%)" }}
              >
                資料請求
              </Link>
              <Link
                href="/contact"
                className="w-full py-3 text-center text-sm font-medium text-white rounded-full"
                style={{ background: "linear-gradient(135deg, #a519ff 0%, #6ee6ff 100%)" }}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Colorful XXX mark */}
      <g>
        {/* First X */}
        <path d="M4 4L12 16L4 28" stroke="#ff3769" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4L4 16L12 28" stroke="#ffe600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Second X */}
        <path d="M16 4L24 16L16 28" stroke="#00c378" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 4L16 16L24 28" stroke="#64cfe5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Third X */}
        <path d="M28 4L36 16L28 28" stroke="#a519ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 4L28 16L36 28" stroke="#af61e2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* InterRace text */}
      <text x="44" y="22" fontFamily="var(--font-ubuntu), Ubuntu, sans-serif" fontSize="18" fontWeight="500" fill="#414141">
        InterRace
      </text>
    </svg>
  );
}
