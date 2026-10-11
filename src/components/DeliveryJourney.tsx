import { Img, PillLink, SectionHeading } from "./ui";
import { Icon } from "./Icon";
import { assets, type Asset } from "@/lib/assets";

type Feature = {
  title: string;
  text: string;
  points: string[];
  image: Asset;
  imageClass: string;
};

const featured: Feature = {
  title: "Shop & Ship Worldwide",
  text: "Discover your favorite brands from around the world while we handle the international shipping journey—making global shopping simple, secure, and seamless.",
  points: ["Shop from global brands", "Worldwide shipping network", "Secure package handling", "Fast international transit"],
  image: assets.cardMacbook,
  imageClass: "",
};

const features: Feature[] = [
  {
    title: "Live Tracking",
    text: "Stay connected with your order from the moment it leaves the store until it reaches your door.",
    points: ["Real-time shipment updates", "Track every delivery milestone", "Instant status notifications", "Complete shipment visibility"],
    image: assets.cardPhone,
    imageClass: "absolute right-0 bottom-0 w-[46%] max-w-[300px]",
  },
  {
    title: "Fast Delivery",
    text: "Your orders are delivered quickly and safely, with reliable service you can count on.",
    points: ["Quick delivery times", "Reliable doorstep delivery", "Safe handling", "Express options"],
    image: assets.cardPlane,
    imageClass: "absolute -right-[10%] bottom-[6%] w-[95%] max-w-[600px]",
  },
  {
    title: "Trusted Service",
    text: "Shop with confidence knowing every order is handled with care by a team that has your back.",
    points: ["Safe & secure handling", "Trusted logistics partners", "Reliable delivery service", "Dedicated customer support"],
    image: assets.cardBox,
    imageClass: "absolute right-[2%] bottom-0 w-[45%] max-w-[296px]",
  },
  {
    title: "Transparent Pricing",
    text: "Know exactly what you pay before you order, with every cost shown clearly upfront.",
    points: ["Clear upfront pricing", "No hidden fees", "Easy cost breakdown", "Pay with confidence"],
    image: assets.cardCart,
    imageClass: "absolute right-0 bottom-0 w-[48%] max-w-[320px]",
  },
];

export function DeliveryJourney() {
  return (
    <section id="services" className="rounded-t-[40px] bg-charcoal px-2 pt-20 pb-20 sm:px-4">
      <SectionHeading
        dark
        title="Built for Every Delivery Journey"
        subtitle="Enjoy a smarter way to shop from your favorite stores worldwide, with every step handled for you."
        className="px-2"
      />

      <div className="mx-auto mt-[54px] flex max-w-[1480px] flex-col gap-6 rounded-[30px] bg-white p-4 sm:p-6 lg:px-[73px] lg:py-8">
        {/* Featured card */}
        <article className="relative grid overflow-hidden rounded-[15px] bg-cream lg:min-h-[490px] lg:grid-cols-[734px_1fr]">
          <Glow className="-top-10 -right-10 size-[180px]" />
          <FeatureText feature={featured} large />
          <div className="relative flex items-center justify-center px-4 pb-8 lg:pr-[100px] lg:pb-0">
            <Img asset={featured.image} className="h-auto w-full max-w-[553px]" />
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-[26px]">
          {features.map((f) => (
            <article key={f.title} className="relative min-h-[520px] overflow-hidden rounded-[15px] bg-cream lg:min-h-[553px]">
              <Glow className="-right-10 -bottom-10 size-[200px]" />
              <FeatureText feature={f} />
              <Img asset={f.image} className={`h-auto ${f.imageClass}`} />
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-[74px] flex max-w-[1120px] flex-col items-center gap-4 px-2 text-center">
        <h2 className="text-[28px] font-semibold text-white sm:text-[40px]">The World Is Your Marketplace</h2>
        <p className="max-w-[852px] text-[16px] text-[#d7d7d7] sm:text-[20px]">
          Wherever your favorite brands are, we&apos;ll help you get them delivered with a simple, reliable shopping
          experience—all in one trusted journey.
        </p>
      </div>
    </section>
  );
}

function FeatureText({ feature, large = false }: { feature: Feature; large?: boolean }) {
  return (
    <div className={`relative z-10 flex flex-col justify-center gap-4 p-6 sm:p-8 ${large ? "lg:pr-[160px]" : "max-w-[400px]"}`}>
      <h3 className="text-[22px] font-semibold text-black sm:text-[26px]">{feature.title}</h3>
      <p className="max-w-[490px] text-[14px] text-[#3f3737]">{feature.text}</p>
      <ul className="flex flex-col gap-[14px]">
        {feature.points.map((p) => (
          <li key={p} className="flex items-center gap-1 text-[14px] text-black">
            <Icon name="checkFill" className="size-5 text-[#2bd9a6]" />
            {p}
          </li>
        ))}
      </ul>
      <PillLink variant="black" size="sm" className="self-start">
        ShipBee Now
      </PillLink>
    </div>
  );
}

function Glow({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(232,81,34,0.35),transparent_65%)] blur-2xl ${className}`}
    />
  );
}
