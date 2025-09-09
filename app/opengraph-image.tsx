import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  const bg = "#F4F3F0"; // matches --bg in globals.css
  const text = "#2E2E2E"; // matches --color-text-primary
  const accent = "#5A7F9C"; // matches --color-accent

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: bg,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: accent,
            }}
          />
          <div style={{ fontSize: 28, color: "#5F5F5F", fontWeight: 600 }}>REGIA‑UN</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, color: text, fontWeight: 700, letterSpacing: -1 }}>
            Retrieval‑Enhanced Generation for International Affairs
          </div>
          <div style={{ fontSize: 28, color: "#5F5F5F", maxWidth: 960, lineHeight: 1.35 }}>
            Decision‑ready briefs grounded in UN sources.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: "#5F5F5F" }}>regia‑landing.vercel.app</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              backgroundColor: "white",
              borderRadius: 12,
              border: "1px solid rgba(58, 90, 117, 0.35)",
              color: text,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Request a demo →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 