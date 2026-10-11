"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const tabs = {
  request: { label: "New Request", placeholder: "https://www.amazon.com/", action: "Paste Link", name: "url" },
  track: { label: "Track Order", placeholder: "Enter your tracking number", action: "Track", name: "tracking" },
} as const;

type Tab = keyof typeof tabs;

/** Hero form: paste a product link to start a request, or switch to tracking an order. */
export function LinkSearch() {
  const [tab, setTab] = useState<Tab>("request");
  const t = tabs[tab];

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div role="tablist" aria-label="What would you like to do?" className="flex gap-[10px] rounded-full bg-white p-1">
        {(Object.keys(tabs) as Tab[]).map((key) => (
          <button
            key={key}
            role="tab"
            type="button"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`rounded-full px-4 py-1 text-[12px] text-black transition-colors ${tab === key ? "bg-[#eaeaea]" : "hover:bg-[#f5f5f5]"}`}
          >
            {tabs[key].label}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-[60px] w-full max-w-[500px] items-center justify-between gap-2 rounded-full bg-white py-1 pr-1 pl-5"
      >
        <label htmlFor="hero-input" className="sr-only">
          {tab === "request" ? "Product link" : "Tracking number"}
        </label>
        <input
          id="hero-input"
          key={tab}
          name={t.name}
          type={tab === "request" ? "url" : "text"}
          placeholder={t.placeholder}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-black outline-none placeholder:text-[#9a9a9a]"
        />
        <button
          type="submit"
          className="flex h-full shrink-0 items-center gap-2 rounded-full bg-navy px-5 font-inter text-[13px] font-medium text-white transition-colors hover:bg-[#2a2a66]"
        >
          <Icon name="link" className="size-4" />
          {t.action}
        </button>
      </form>
    </div>
  );
}
