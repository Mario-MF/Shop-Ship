import { Icon } from "./Icon";

const stats = [
  { value: "150+", label: "Global Destinations", icon: <Icon name="world" className="size-full" /> },
  { value: "8,000+", label: "International Stores", icon: <Icon name="store" className="size-full" /> },
  { value: "3M+", label: "Successful Deliveries", icon: <Icon name="packageCheck" className="size-full" /> },
  { value: "400K+", label: "Active Shoppers", icon: <Icon name="usersRound" className="size-full" /> },
];

export function Stats() {
  return (
    <section aria-label="ShipBee in numbers" className="relative z-10 -mt-[30px] px-4 sm:px-6">
      <dl className="mx-auto grid max-w-[1263px] grid-cols-2 gap-[21px] lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-start justify-center gap-[10px] rounded-[7.5px] bg-white p-[9px] text-ink">
            <span className="size-10 shrink-0 sm:size-[50px]">{s.icon}</span>
            <div className="flex flex-col gap-[6.5px] text-left">
              <dt className="order-2 text-[13px] font-medium whitespace-nowrap sm:text-[16px]">{s.label}</dt>
              <dd className="order-1 font-alexandria text-[22px] leading-[1.2] font-bold sm:text-[26.4px]">{s.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
