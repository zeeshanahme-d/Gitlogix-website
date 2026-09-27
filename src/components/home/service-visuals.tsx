import { CheckCircle, Cursor, LockSimple, PuzzlePiece, Receipt } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import mark from "@/assets/brand/gitlogix-mark.png";
import { BrandIcon } from "@/components/ui/platform-icon";
import type { ServiceId } from "@/content/site";

/*
 * Small interface sketches for each service card, drawn in neutral tones
 * with the brand orange as the only accent. Decorative (aria-hidden) and
 * sample labels only.
 */

const frame = "relative overflow-hidden rounded-control border border-line bg-surface";
const bar = "h-2 rounded-full bg-surface-3";
const popup = "rounded-control border border-line bg-bg shadow-sm";

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <span className={`flex h-4 w-7 items-center rounded-full p-0.5 ${on ? "bg-brand" : "bg-surface-3"}`}>
      <span className={`size-3 rounded-full bg-bg ${on ? "ml-auto" : ""}`} />
    </span>
  );
}

function ExtensionVisual() {
  return (
    <div aria-hidden className={`${frame} h-60`}>
      <div className="flex h-10 items-center gap-3 border-b border-line bg-surface-2 px-3">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="flex h-6 min-w-0 flex-1 items-center gap-1.5 truncate rounded-md border border-line bg-bg px-2.5 text-[11px] text-muted">
          <LockSimple size={11} weight="bold" />
          app.yourproduct.com
        </span>
        <span className="flex items-center gap-2.5 text-fg-2">
          <BrandIcon id="chrome" className="size-4" />
          <BrandIcon id="firefox" className="size-4" />
          <BrandIcon id="safari" className="size-4" />
          <span className="grid size-6 place-items-center rounded-md bg-fg text-bg">
            <PuzzlePiece size={13} weight="fill" />
          </span>
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div className={`${bar} w-2/5`} />
        <div className={`${bar} w-3/5`} />
        <div className={`${bar} w-1/2`} />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-14 rounded-md bg-surface-2" />
          <div className="h-14 rounded-md bg-surface-2" />
          <div className="h-14 rounded-md bg-surface-2" />
        </div>
      </div>
      <div className={`${popup} absolute top-12 right-3 w-56 p-3.5`}>
        <div className="flex items-center gap-2">
          <Image src={mark} alt="" className="size-5" />
          <span className="text-xs font-bold">Your extension</span>
          <span className="ml-auto rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">Active</span>
        </div>
        <div className="mt-3 space-y-2.5 text-[11px] text-fg-2">
          <div className="flex items-center justify-between">
            Smart tracking <Toggle />
          </div>
          <div className="flex items-center justify-between">
            Instant alerts <Toggle />
          </div>
          <div className="flex items-center justify-between">
            Compact view <Toggle on={false} />
          </div>
        </div>
        <div className="mt-3 grid h-7 place-items-center rounded-md bg-fg text-[11px] font-bold text-bg">Sync now</div>
      </div>
    </div>
  );
}

const BARS = [38, 52, 44, 63, 58, 72, 66, 81, 76, 92];

function WebVisual() {
  return (
    <div aria-hidden className={`${frame} h-60 p-5`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] text-muted">Monthly active users</p>
          <p className="mt-1 font-display text-2xl font-semibold">48,290</p>
        </div>
        <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-bold text-success">+18.4%</span>
      </div>
      <div className="mt-5 flex h-28 items-end gap-1.5 border-b border-line">
        {BARS.map((height, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-sm ${i === BARS.length - 1 ? "bg-brand" : "bg-surface-3"}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div aria-hidden className={`${frame} flex h-60 justify-center`}>
      <div className="relative mt-5 h-72 w-40 rounded-[1.75rem] border-4 border-fg bg-bg p-3">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-surface-3" />
        <p className="mt-4 text-[11px] font-bold">Your orders</p>
        <div className="mt-3 space-y-2">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-2 rounded-md border border-line p-2">
              <span className={`size-6 rounded ${row === 0 ? "bg-brand" : "bg-surface-2"}`} />
              <span className="flex-1 space-y-1">
                <span className="block h-1.5 w-4/5 rounded-full bg-surface-3" />
                <span className="block h-1.5 w-1/2 rounded-full bg-surface-2" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${popup} absolute right-4 bottom-5 flex items-center gap-2 px-3 py-2 text-[11px] font-bold`}>
        <CheckCircle size={16} weight="fill" className="text-success" /> Order confirmed
      </div>
    </div>
  );
}

function DesktopVisual() {
  return (
    <div aria-hidden className={`${frame} h-60 bg-bg`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-surface-2 px-3">
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="ml-2 text-[10px] text-muted">Point of Sale</span>
      </div>
      <div className="grid h-[calc(100%-2rem)] grid-cols-5">
        <div className="col-span-3 grid grid-cols-3 content-start gap-2 p-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className={`h-12 rounded-md ${i === 1 ? "bg-brand/15 ring-1 ring-brand" : "bg-surface-2"}`} />
          ))}
        </div>
        <div className="col-span-2 flex flex-col border-l border-line bg-surface p-3 text-[10px] text-fg-2">
          <span className="flex items-center gap-1 font-bold text-fg">
            <Receipt size={12} weight="bold" /> Order #1024
          </span>
          <span className="mt-2 flex justify-between">Item × 2<span>12.00</span></span>
          <span className="mt-1 flex justify-between">Item × 1<span>8.50</span></span>
          <span className="mt-auto flex justify-between border-t border-line pt-2 font-bold text-fg">
            Total<span>20.50</span>
          </span>
          <span className="mt-2 grid h-6 place-items-center rounded-md bg-fg font-bold text-bg">Pay</span>
        </div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div aria-hidden className={`${frame} h-60 p-5`}>
      <div className="flex gap-2">
        {["#FF8C21", "#FFE040", "#18181B", "#E4E4E7"].map((color) => (
          <span key={color} className="size-9 rounded-md border border-line" style={{ backgroundColor: color }} />
        ))}
      </div>
      <p className="mt-5 font-display text-5xl leading-none font-semibold">Aa</p>
      <div className="mt-4 space-y-2">
        <div className={`${bar} w-3/4`} />
        <div className={`${bar} w-1/2`} />
      </div>
      <div className="absolute right-6 bottom-8 flex items-start">
        <Cursor size={20} weight="fill" className="text-fg" />
        <span className="mt-4 rounded bg-fg px-1.5 py-0.5 text-[10px] font-bold text-bg">Designer</span>
      </div>
    </div>
  );
}

const STATUS = [
  { name: "API", state: "Operational" },
  { name: "Web app", state: "Operational" },
  { name: "Chrome extension v4.2", state: "Released" },
];

function SupportVisual() {
  return (
    <div aria-hidden className={`${frame} bg-bg p-5`}>
      <div className="divide-y divide-line">
        {STATUS.map((item) => (
          <div key={item.name} className="flex items-center justify-between py-2.5 text-sm first:pt-0">
            <span className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-success" />
              {item.name}
            </span>
            <span className="text-xs text-muted">{item.state}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-0.75">
        {Array.from({ length: 40 }, (_, i) => (
          <span key={i} className={`h-7 flex-1 rounded-xs ${i === 27 ? "bg-brand" : "bg-success/70"}`} />
        ))}
      </div>
      <p className="mt-2 flex justify-between text-[11px] text-muted">
        <span>40 days ago</span>
        <span>99.9% uptime</span>
        <span>Today</span>
      </p>
    </div>
  );
}

export const serviceVisuals: Record<ServiceId, () => React.JSX.Element> = {
  extensions: ExtensionVisual,
  web: WebVisual,
  mobile: MobileVisual,
  desktop: DesktopVisual,
  design: DesignVisual,
  support: SupportVisual,
};
