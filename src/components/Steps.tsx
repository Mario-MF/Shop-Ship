"use client";

import { useEffect, useState } from "react";
import { Img } from "./ui";
import { assets, logo, type Asset } from "@/lib/assets";

const steps = [
  { emoji: "🛍", title: "Shop", text: "Browse your favorite international stores and add your items to the cart." },
  { emoji: "🔗", title: "Copy Your Link", text: "Copy the product link and paste it into ShipBee to place your request." },
  { emoji: "💳", title: "Checkout", text: "Review your request and pay securely, with shipping costs shown upfront." },
  { emoji: "✈️", title: "We Ship", text: "We'll bring your package to Qatar and prepare it for final delivery." },
];

// Positions are percentages of the 1420 × 772 container in the Figma frame.
const floaters: { asset: Asset; style: React.CSSProperties; delay?: string }[] = [
  { asset: logo("playstation", "PlayStation"), style: { left: "4.4%", top: "-3.8%", width: "6.3%" } },
  { asset: assets.floatController, style: { left: "6.4%", top: "5.3%", width: "13.1%" }, delay: "0.4s" },
  { asset: logo("nike", "Nike"), style: { left: "12%", top: "40%", width: "7.9%" } },
  { asset: assets.floatJersey, style: { left: "-11.2%", top: "27%", width: "25%" }, delay: "1s" },
  { asset: assets.floatKeyboard, style: { left: "5.2%", top: "66.6%", width: "14.6%" }, delay: "1.6s" },
  { asset: logo("amazon", "Amazon"), style: { left: "16.7%", top: "91.4%", width: "8.9%" } },
  { asset: logo("new-balance", "New Balance"), style: { left: "77.8%", top: "5.2%", width: "8.9%" } },
  { asset: assets.floatSneaker, style: { left: "85.1%", top: "0%", width: "17.8%" }, delay: "0.8s" },
  { asset: logo("apple", "Apple"), style: { left: "89.8%", top: "40.3%", width: "7.5%" } },
  { asset: assets.floatAirpods, style: { left: "77.9%", top: "46.5%", width: "12.5%" }, delay: "1.2s" },
  { asset: assets.floatCoat, style: { left: "80.5%", top: "51.6%", width: "28.9%" }, delay: "2s" },
  { asset: logo("shopee", "Shopee"), style: { left: "80.7%", top: "84.3%", width: "8.9%" } },
];

export function Steps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % steps.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="how-it-works" className="relative overflow-x-clip px-4 py-16 sm:px-6 lg:py-0">
      <div className="relative mx-auto max-w-[1420px] lg:h-[772px]">
        {/* Soft peach glow behind the steps */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[7%] bottom-0 blur-[100px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #fff9f8 11%, rgba(255,214,202,0.5) 32%, rgba(242,238,254,0.8) 57%, rgba(0,0,0,0) 80%)",
          }}
        />

        <div aria-hidden className="absolute inset-0 hidden lg:block">
          {floaters.map(({ asset, style, delay }) => (
            <div key={asset.src} className="absolute" style={style}>
              <div className="animate-float" style={{ animationDelay: delay }}>
                <Img asset={asset} className="h-auto w-full object-contain" alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center gap-10 lg:pt-[30px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[28px] font-semibold text-black sm:text-[40px]">Global Shopping Made Simple</h2>
            <p className="text-[18px] text-black sm:text-[20px]">Shop. Ship. Delivered.</p>
          </div>

          <ol
            className="flex w-full max-w-[730px] flex-col items-center gap-6 sm:gap-[33px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title} className={`w-full transition-all duration-500 ${on ? "max-w-[730px]" : "max-w-[670px]"}`}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setPaused(true)}
                    aria-current={on ? "step" : undefined}
                    className={`relative flex w-full items-center gap-[14px] rounded-[12px] bg-white text-left transition-all duration-500 ${
                      on ? "py-[14px] pr-9 pl-6 shadow-[0_10px_30px_rgba(232,81,34,0.08)]" : "py-[13px] pr-8 pl-[23px]"
                    }`}
                  >
                    <span aria-hidden className={`shrink-0 transition-all duration-500 ${on ? "text-[40px]" : "text-[36px]"}`}>
                      {s.emoji}
                    </span>
                    <span aria-hidden className={`w-px shrink-0 self-stretch bg-[#e3e3e3]`} />
                    <span className="flex min-w-0 flex-col gap-[10px]">
                      <span className={`italic transition-all duration-500 ${on ? "text-[22px] font-semibold" : "text-[19px] font-medium"}`}>
                        {s.title}
                      </span>
                      <span className={`text-ink transition-all duration-500 ${on ? "text-[16.5px]" : "text-[15.3px]"}`}>{s.text}</span>
                    </span>
                    <span
                      aria-hidden
                      className={`absolute top-3 right-6 text-[32px] font-semibold text-[#071a3c] italic transition-opacity duration-500 ${on ? "opacity-100" : "opacity-0"}`}
                    >
                      {i + 1}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
