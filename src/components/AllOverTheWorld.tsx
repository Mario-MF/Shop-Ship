import { Img, BrandLockup, PillLink } from "./ui";
import { assets } from "@/lib/assets";

const flags = [
  assets.flagUsa,
  assets.flagUae,
  assets.flagSingapore,
  assets.flagKorea,
  assets.flagUk,
  assets.flagJordan,
  assets.flagTurkey,
  assets.flagChina,
  assets.flagKuwait,
  assets.flagAustralia,
  assets.flagQatar,
];

export function AllOverTheWorld() {
  return (
    <section className="bg-white px-4 py-[45px] sm:px-6 lg:px-[116px]">
      <div className="mx-auto flex max-w-[1405px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex shrink-0 flex-col gap-3 lg:w-[376px]">
          <BrandLockup scale="lg" />
          <div className="mt-3 pl-[5px]">
            <h2 className="text-[28px] font-semibold text-black sm:text-[32px]">All over the world</h2>
            <p className="mt-3 text-[18px] text-[#323232]">Together Always Faster</p>
          </div>
          <PillLink variant="black" size="sm" className="mt-2 self-start">
            ShipBee Now
          </PillLink>
        </div>

        <div
          aria-label="Countries we ship from"
          className="group relative min-w-0 flex-1 overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        >
          <ul className="flex w-max animate-marquee gap-[52px] pr-[52px] group-hover:[animation-play-state:paused]">
            {[...flags, ...flags].map((f, i) => (
              <li key={i} aria-hidden={i >= flags.length || undefined}>
                <Img asset={f} className="size-[72px] rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.12)] sm:size-[91px]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
