import { Img, BrandLockup } from "./ui";
import { LinkSearch } from "./LinkSearch";
import { Icon } from "./Icon";
import { assets, type Asset } from "@/lib/assets";

const floatingProducts: {
  asset: Asset;
  name: string;
  price: string;
  className: string;
  rotate: string;
}[] = [
  { asset: assets.productWatch, name: "Apple Watch", price: "$ 399", className: "left-[17%] top-[126px]", rotate: "-rotate-[4.6deg]" },
  { asset: assets.productCamera, name: "Canon R7", price: "$ 1,399", className: "-left-[1%] top-[296px]", rotate: "-rotate-[8deg]" },
  { asset: assets.productShoe, name: "Puma Future 7", price: "$ 1,399", className: "left-[15.5%] top-[448px]", rotate: "rotate-[7.1deg]" },
  { asset: assets.productPerfume, name: "Hugo Boss", price: "$ 99", className: "left-[81%] top-[174px]", rotate: "rotate-[5.4deg]" },
];

const globeFlags = [
  { asset: assets.flagUsa, className: "left-[23%] top-[52%]" },
  { asset: assets.flagKuwait, className: "left-[46%] top-[62%]" },
  { asset: assets.flagChina, className: "left-[65%] top-[47%]" },
  { asset: assets.flagAustralia, className: "left-[63%] top-[86%]" },
];

const trust = [
  { icon: <Icon name="package" className="size-[18px]" />, text: "Over 12 million packages" },
  { icon: <Icon name="usersLine" className="size-[22px]" />, text: "More than 60,000 clients" },
  { icon: <Icon name="lock" className="size-[19px]" />, text: "Safe packaging" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-mist pt-[150px] pb-[120px] lg:min-h-[742px] lg:pt-[158px]">
      {/* Soft orange glows */}
      <div aria-hidden className="pointer-events-none absolute -top-[180px] -right-[260px] -z-10 size-[460px] sm:-top-[260px] sm:-right-[220px] sm:size-[820px] rounded-full bg-[radial-gradient(circle,rgba(232,81,34,0.55)_0%,rgba(244,140,100,0.35)_35%,transparent_68%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute top-[40px] -left-[260px] -z-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,81,34,0.18),transparent_65%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute top-[460px] left-[44%] -z-10 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7),transparent_65%)] blur-2xl" />

      {/* Floating product cards (desktop) */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden lg:block">
        {floatingProducts.map((p) => (
          <div key={p.name} className={`absolute ${p.className}`}>
            <div className={`${p.rotate} animate-float`}>
              <ProductCard {...p} />
            </div>
          </div>
        ))}

        <div className="absolute top-[258px] left-[57.8%] w-[661px] rotate-[2.76deg]">
          <div className="relative h-[401px]">
            <Img asset={assets.heroGlobe} className="absolute top-[38px] left-[56px] h-auto w-[536px] rotate-[23.84deg] object-contain" />
            {globeFlags.map((f) => (
              <Img
                key={f.asset.alt}
                asset={f.asset}
                className={`absolute size-[41px] rounded-full object-cover shadow-[0_2px_6px_rgba(0,0,0,0.15)] ${f.className}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1332px] flex-col items-center gap-8 px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <BrandLockup />
          <h1 className="text-[34px] leading-[1.25] font-medium text-[#181818] sm:text-[50px]">
            Shop <em className="font-bold text-navy">Worldwide</em>.
            <br />
            We&apos;ll <em className="font-bold text-flame">Deliver</em> the Rest.
          </h1>
          <p className="max-w-[806px] text-[16px] text-[#242424] sm:text-[18px]">
            Shop from your favorite stores around the world while ShipBee and Connected handle the journey from
            checkout to your doorstep.
          </p>
        </div>

        <LinkSearch />

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trust.map((t) => (
            <li key={t.text} className="flex items-center gap-2 font-inter text-[13px] font-medium text-[#383838]">
              <span className="text-[#383838]">{t.icon}</span>
              {t.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Curved white bottom edge */}
      <div aria-hidden className="absolute -bottom-[118px] left-1/2 h-[199px] w-[138%] -translate-x-1/2 rounded-[50%] bg-white" />
    </section>
  );
}

function ProductCard({ asset, name, price }: { asset: Asset; name: string; price: string }) {
  return (
    <div className="w-[104px] overflow-hidden rounded-[9px] bg-[#f6f6f6] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="flex h-[72px] items-center justify-center">
        <Img asset={asset} className="h-[66px] w-auto object-contain" alt="" />
      </div>
      <div className="flex flex-col gap-[5px] p-[9px] text-left text-[#303030]">
        <div>
          <p className="text-[10px] font-semibold">{name}</p>
          <p className="text-[9px]">{price}</p>
        </div>
        <p className="text-[6.5px] font-semibold text-success">Free shipping</p>
      </div>
    </div>
  );
}
