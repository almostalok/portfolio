import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#111318",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          borderRadius: 6,
          fontWeight: 900,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span style={{ transform: "translateX(-2px) translateY(-1px)" }}>a</span>
        <span
          style={{
            position: "absolute",
            bottom: 5,
            right: 6,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#F4C400",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
