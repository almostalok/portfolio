import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  // Read avatar buffer
  const imagePath = path.join(process.cwd(), "public", "assets", "generated", "favicon_avatar.png");
  let imageBase64 = "";
  if (fs.existsSync(imagePath)) {
    const buffer = fs.readFileSync(imagePath);
    imageBase64 = `data:image/png;base64,${buffer.toString("base64")}`;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111318",
          borderRadius: "50%",
          border: "2px solid #F4C400",
          overflow: "hidden",
        }}
      >
        {imageBase64 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageBase64}
            alt="Alok Favicon"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            a<span style={{ color: "#F4C400" }}>.</span>
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
