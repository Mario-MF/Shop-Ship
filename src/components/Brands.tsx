import { Img, PillLink } from "./ui";
import { brandLogos } from "@/lib/assets";

const rows = [brandLogos.slice(0, 9), brandLogos.slice(9, 18), brandLogos.slice(18, 27)];

export function Brands() {
  return (
    <section id="brands" className="flex flex-col items-center gap-8 px-4 py-[60px] sm:px-6">
      <div className="flex max-w-[614px] flex-col items-center gap-8 text-center text-navy">
        <h2 className="text-[28px] leading-[1.35] font-semibold sm:text-[40px]">Your Favorite Brands Are Closer Than Ever</h2>
        <p className="text-[16px] sm:text-[20px]">
          Explore trusted international brands and retailers, and enjoy a seamless shopping experience from checkout to
          delivery.
        </p>
      </div>

      <div className="flex w-full max-w-[1332px] flex-col items-center gap-[35px]">
        {/* Desktop: three rows of nine with hairline dividers, as in the design */}
        <div className="hidden w-full flex-col gap-[31px] lg:flex">
          {rows.map((row, r) => (
            <ul key={r} className="flex items-center justify-between">
              {row.map((logo, i) => (
                <li key={`${r}-${i}`} className="contents">
                  {i > 0 && <span aria-hidden className="h-[26px] w-px bg-[#d9d9d9]" />}
                  <Img asset={logo} className="h-[62px] w-[94px] object-contain" />
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Smaller screens: simple grid */}
        <ul className="grid w-full grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5 lg:hidden">
          {brandLogos.map((logo, i) => (
            <li key={i} className="flex justify-center">
              <Img asset={logo} className="h-[50px] w-[84px] object-contain" />
            </li>
          ))}
        </ul>

        <PillLink variant="navy" className="!h-[45px] !px-[21px] !text-[14px]">
          More Brands
        </PillLink>
      </div>
    </section>
  );
}
