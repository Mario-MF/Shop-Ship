import { Img } from "./ui";
import { assets } from "@/lib/assets";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-5 z-30 px-4 sm:px-6 lg:px-[95px]">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1322px] items-center justify-between rounded-[15px] bg-black p-3"
      >
        <a href="#" className="flex w-[201px] items-center pl-1" aria-label="ShipBee home">
          <Img asset={assets.logoShipbeeWhite} className="h-[25px] w-auto" priority />
        </a>
        <div className="flex items-center gap-[14px]">
          <a href="#" lang="ar" className="hidden items-center gap-[6px] font-inter text-[14px] font-semibold text-white sm:flex">
            <Img asset={assets.flagQatar} className="size-4 rounded-sm object-cover" alt="" />
            Arabic
          </a>
          <a
            href="#"
            className="rounded-[15px] bg-white px-[18px] py-3 font-inter text-[14px] font-medium whitespace-nowrap text-black transition-colors hover:bg-[#f1f1f1] sm:text-[16px]"
          >
            Log in <span aria-hidden className="mx-1">|</span> Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
