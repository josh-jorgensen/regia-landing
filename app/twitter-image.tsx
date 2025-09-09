import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  const bg = "#F4F3F0";
  const text = "#2E2E2E";
  const accent = "#5A7F9C";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          backgroundColor: bg,
        }}
      >
        <div style={{ fontSize: 58, color: text, fontWeight: 700, maxWidth: 980, lineHeight: 1.25 }}>
          Decision‑ready briefs grounded in UN sources.
        </div>
        <div style={{ marginTop: 16, fontSize: 26, color: "#5F5F5F" }}>REGIA‑UN</div>
      </div>
    ),
    { ...size }
  );
} 