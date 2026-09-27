import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { hero } from "@/content/site";

export const alt = "Gitlogix, a product studio building browser extensions, web platforms and mobile apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(join(process.cwd(), "src/assets/brand/gitlogix-mark.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#18181b",
          borderBottom: "12px solid #ff8c21",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img src={`data:image/png;base64,${mark}`} width={72} height={72} alt="" />
          <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: 6 }}>GITLOGIX</span>
        </div>
        <div style={{ display: "flex", fontSize: 78, fontWeight: 600, lineHeight: 1.04, maxWidth: 1000 }}>{hero.title}</div>
      </div>
    ),
    size,
  );
}
