import { Img, BrandLockup, PillLink } from "./ui";
import { assets } from "@/lib/assets";

export function InternationalStores() {
  return (
    <section className="px-4 pt-[100px] pb-10 sm:px-6 lg:pt-[120px]">
      <div className="mx-auto grid max-w-[1332px] items-center gap-12 lg:grid-cols-[minmax(0,629px)_minmax(0,619px)] lg:justify-between">
        <div className="flex flex-col gap-3">
          <BrandLockup />
          <div className="flex flex-col gap-[22px]">
            <h2 className="max-w-[600px] text-[26px] leading-[1.35] font-semibold text-navy sm:text-[32px]">
              Shop from your favorite international stores.
            </h2>
            <p className="max-w-[629px] text-[16px] text-[#474747]">
              Shop from your favorite international stores with ease. Discover products from around the world, and
              enjoy a smooth shopping experience from checkout to delivery.
            </p>
            <PillLink variant="navy" className="self-start">
              Order Now
            </PillLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[619/456] w-full max-w-[619px]">
          <Img asset={assets.container} className="absolute top-[26%] left-1/2 h-auto w-[83.5%] -translate-x-1/2" />
          <Badge className="top-[7.7%] right-0 animate-float">150+ Destinations</Badge>
          <Badge className="top-[79%] left-[7%] animate-float [animation-delay:1.5s]">Ship Worldwide</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`absolute rounded-full bg-midnight px-7 py-[10.5px] text-[14px] font-medium whitespace-nowrap text-white drop-shadow-[0_0_2.5px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}
