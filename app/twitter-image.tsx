import { ImageResponse } from "next/og";

export const alt =
  "Next Way Transport — Location de bus & minibus avec chauffeur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#060010",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 28, letterSpacing: 0.5, opacity: 0.9 }}>
          Next Way Transport
        </div>
        <div style={{ height: 2, width: 96, background: "#8164f3" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 700,
          }}
        >
          Location de Bus & Minibus avec Chauffeur
        </div>
        <div style={{ fontSize: 32, opacity: 0.88 }}>
          Devis rapide en moins de 24h · France & Europe
        </div>
      </div>

      <div style={{ fontSize: 22, opacity: 0.85 }}>
        www.nextway-transport.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
