import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

/** Dynamically generated Open Graph / social share image. */
export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #141e47 0%, #1b3ab8 55%, #1f49e0 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#bdd3ff",
            }}
          >
Independent Information Portal
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "26px",
              color: "#e7c067",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            New Off-Plan Launch · Coming Soon
          </div>
          <div style={{ fontSize: "104px", fontWeight: 800, lineHeight: 1.02 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: "30px", color: "#d9e6ff", maxWidth: "880px" }}>
            Register your interest for early access to floor plans, launch
            pricing & priority unit selection.
          </div>
        </div>

        <div style={{ fontSize: "26px", color: "#90b6ff" }}>
          {siteConfig.domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
