import { Img } from "./ui";
import { categoryImages } from "@/lib/assets";

const categories = [
  "Fashion & Apparel",
  "Electronics & Gadgets",
  "Beauty & Personal Care",
  "Shoes & Accessories",
  "Home & Living",
  "Toys & Baby Products",
  "Gaming & Entertainment",
  "Snacks & Specialty Foods",
  "Health & Wellness",
  "Books & Office Supplies",
].map((name, i) => ({ name, image: categoryImages[i] }));

export function Categories() {
  return (
    <section className="flex flex-col items-center gap-8 pt-[100px] pb-[60px] lg:pt-[120px]">
      <div className="flex flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-[28px] font-semibold text-navy sm:text-[40px]">Millions of Products, One Journey</h2>
        <p className="max-w-[448px] text-[16px] text-navy sm:text-[20px]">
          Fashion, tech, beauty, home, and so much more—all just a few clicks away.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[15px] py-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  // The list is rendered twice so the marquee can loop seamlessly.
  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <ul
        className={`flex w-max gap-[26px] pr-[26px] group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[...categories, ...categories].map((c, i) => (
          <li key={i} aria-hidden={i >= categories.length || undefined}>
            <a
              href="#"
              tabIndex={i >= categories.length ? -1 : undefined}
              className="flex items-center gap-[9px] rounded-[12px] border border-[#f1f1f1] bg-[#fdfdfd] p-[7px] pr-5 drop-shadow-[0_3px_1.6px_rgba(185,185,185,0.1)] transition-colors hover:border-[#e6e2dd]"
            >
              <span className="flex h-[86px] w-[101px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-[#f5f5f5]">
                <Img asset={c.image} className="h-[62px] w-[83px] object-contain" alt="" />
              </span>
              <span className="text-[17px] whitespace-nowrap text-black">{c.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
