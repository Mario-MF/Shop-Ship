/* eslint-disable @next/next/no-img-element -- static exports from Figma, sized explicitly */
import type { Asset } from "@/lib/assets";
import { assets } from "@/lib/assets";

type ImgProps = {
  asset: Asset;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function Img({ asset, className, alt, priority }: ImgProps) {
  return (
    <img
      src={asset.src}
      width={asset.w}
      height={asset.h}
      alt={alt ?? asset.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}

export function Chevron({ className = "h-[9px] w-[5px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 5 9" fill="none" aria-hidden className={className}>
      <path d="M.75.75 4.25 4.5.75 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type PillProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "navy" | "black" | "white" | "outline";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  navy: "bg-navy text-white border-white hover:bg-[#2a2a66]",
  black: "bg-black text-white border-white hover:bg-[#222]",
  white: "bg-white text-black border-white hover:bg-[#f1f1f1]",
  outline: "bg-transparent text-white border-white hover:bg-white/10",
};

const sizes = {
  sm: "h-[38px] px-[18px] gap-[6px] text-[12px] font-sans font-medium",
  md: "h-[52px] px-6 gap-2 text-[16px] font-inter font-medium",
};

/** Rounded call-to-action used across the page ("ShipBee Now >", "Order Now >"). */
export function PillLink({ href = "#", children, variant = "navy", size = "md", className = "" }: PillProps) {
  return (
    <a
      href={href}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      <Chevron className={size === "sm" ? "h-[7px] w-[4px]" : "h-[9px] w-[5px]"} />
    </a>
  );
}

/** "SHIPBEE + Connected" co-brand lockup. */
export function BrandLockup({
  dark = false,
  scale = "sm",
  className = "",
}: {
  dark?: boolean;
  scale?: "sm" | "md" | "lg";
  className?: string;
}) {
  const h = { sm: "h-[23px]", md: "h-[31px]", lg: "h-[34px]" }[scale];
  const h2 = { sm: "h-[27px]", md: "h-[37px]", lg: "h-[41px]" }[scale];
  return (
    <div className={`flex items-center gap-[6px] ${className}`}>
      <Img asset={dark ? assets.logoShipbeeWhite : assets.logoShipbee} className={`${h} w-auto`} />
      <span className={`font-inter text-[14px] ${dark ? "text-white" : "text-[#2b2b2b]"}`}>+</span>
      <Img asset={dark ? assets.logoConnectedWhite : assets.logoConnected} className={`${h2} w-auto`} />
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
  dark = false,
  className = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mx-auto flex max-w-[860px] flex-col items-center gap-4 text-center ${className}`}>
      <h2 className={`text-[28px] leading-tight font-semibold sm:text-[40px] ${dark ? "text-white" : "text-black"}`}>{title}</h2>
      {subtitle && (
        <p className={`max-w-[652px] text-[16px] sm:text-[20px] ${dark ? "text-[#d7d7d7]" : "text-black"}`}>{subtitle}</p>
      )}
    </div>
  );
}
