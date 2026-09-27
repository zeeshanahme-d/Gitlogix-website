import { WindowsLogo } from "@phosphor-icons/react/dist/ssr";
import type { CSSProperties } from "react";
import {
  siAndroid,
  siApple,
  siBrave,
  siCloudflare,
  siCss,
  siDjango,
  siDocker,
  siElectron,
  siExpress,
  siFigma,
  siFirebase,
  siFirefoxbrowser,
  siFlutter,
  siGithubactions,
  siGooglechrome,
  siGooglecloud,
  siGraphql,
  siHtml5,
  siJavascript,
  siKotlin,
  siLaravel,
  siLinux,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSafari,
  siStripe,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTauri,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";

/**
 * Official brand marks from Simple Icons. Windows is not in Simple Icons
 * (trademark removal), so it comes from Phosphor's filled logo set.
 */
const icons = {
  chrome: siGooglechrome,
  firefox: siFirefoxbrowser,
  safari: siSafari,
  brave: siBrave,
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  html: siHtml5,
  css: siCss,
  tailwind: siTailwindcss,
  vue: siVuedotjs,
  node: siNodedotjs,
  express: siExpress,
  nestjs: siNestjs,
  django: siDjango,
  python: siPython,
  php: siPhp,
  laravel: siLaravel,
  java: siOpenjdk,
  graphql: siGraphql,
  android: siAndroid,
  apple: siApple,
  flutter: siFlutter,
  kotlin: siKotlin,
  swift: siSwift,
  electron: siElectron,
  tauri: siTauri,
  linux: siLinux,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  redis: siRedis,
  firebase: siFirebase,
  supabase: siSupabase,
  docker: siDocker,
  googlecloud: siGooglecloud,
  cloudflare: siCloudflare,
  githubactions: siGithubactions,
  figma: siFigma,
  stripe: siStripe,
} satisfies Record<string, SimpleIcon>;

export type IconId = keyof typeof icons | "windows";

const WINDOWS_BLUE = "#0078D4";

/** The official brand colour for an icon. */
function brandHex(id: IconId) {
  return id === "windows" ? WINDOWS_BLUE : `#${icons[id].hex}`;
}

type BrandIconProps = { id: IconId; className?: string };

/**
 * Single-colour brand mark that inherits the current text colour. It also
 * exposes its official colour as --brand, so a parent can reveal it on hover
 * with e.g. `group-hover:text-(--brand)`.
 */
export function BrandIcon({ id, className }: BrandIconProps) {
  const style = { "--brand": brandHex(id) } as CSSProperties;

  if (id === "windows") {
    return <WindowsLogo weight="fill" aria-hidden className={className} style={style} />;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false" className={className} style={style} fill="currentColor">
      <path d={icons[id].path} />
    </svg>
  );
}
