import { BrandLockup, PillLink } from "./ui";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/icons";

const contacts: { icon: IconName; label: string; href: string }[] = [
  { icon: "mail", label: "info@shipbee.io", href: "mailto:info@shipbee.io" },
  { icon: "call", label: "+974 5050 7461", href: "tel:+97450507461" },
  { icon: "location", label: "Doha, Qatar", href: "https://maps.google.com/?q=Doha,Qatar" },
];

const menu = ["Home", "New Request", "Track your request", "Help", "FAQs"];

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "twitter", label: "X (Twitter)", href: "#" },
  { icon: "facebook", label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer>
      {/* Final call to action */}
      <section className="flex flex-col items-center gap-8 rounded-t-[50px] bg-night px-4 py-20 text-center">
        <h2 className="text-[30px] leading-tight font-medium text-white sm:text-[48px]">
          Your Global Shopping Journey Starts Here
        </h2>
        <p className="max-w-[843px] text-[16px] font-medium text-[#dadada] sm:text-[20px]">
          Shop from your favorite stores around the world, and we&apos;ll deliver your orders right to your doorstep.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <PillLink variant="white">ShipBee Now</PillLink>
          <PillLink variant="outline" href="#how-it-works">
            How It Works
          </PillLink>
        </div>
      </section>

      <div className="bg-black px-4 pt-12 pb-[15px] text-white sm:px-6 lg:px-[116px]">
        <div className="mx-auto flex max-w-[1232px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <BrandLockup dark scale="md" />
            <p className="text-[16px] text-[#acacac]">We Make It Easy, Quick And Effortless</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="flex items-center gap-[9px] text-[16px] hover:underline sm:text-[18px]">
                  <span className="flex size-[38px] items-center justify-center rounded-full bg-white text-black">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="w-full border-[#2a2a2a]" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-[38px] gap-y-2 text-[16px] leading-normal">
              {menu.map((m) => (
                <li key={m}>
                  <a href="#" className="hover:underline">
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
                >
                  <Icon name={s.icon} className="size-6" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <StoreBadge icon="apple" store="App Store" />
            <StoreBadge icon="googlePlay" store="Play Store" />
          </div>

          <div className="mt-6 flex w-full flex-col items-center gap-4 text-[14px] leading-normal sm:flex-row sm:justify-between">
            <p>© 2026 ShipBee. Proudly created by Codereels.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <Icon name="headset" className="size-6" />
                Help Center
              </a>
              <button type="button" className="flex items-center gap-1 font-inter font-semibold">
                <Icon name="flagUk" className="size-[18px]" />
                English
                <Icon name="arrowDown" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StoreBadge({ icon, store }: { icon: IconName; store: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-[6px] rounded-[28px] border border-white/90 bg-black px-[10px] py-[6px] leading-none"
    >
      <Icon name={icon} className="size-[22px]" />
      <span className="flex flex-col">
        <span className="text-[8.6px] font-medium">Available soon on</span>
        <span className="text-[17px] font-medium tracking-[-0.06em]">{store}</span>
      </span>
    </a>
  );
}
