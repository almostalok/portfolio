import sharp from "sharp";
import fs from "fs";

async function genFavicon() {
  const svg = fs.readFileSync("public/favicon.svg");
  await sharp(svg)
    .resize(32, 32)
    .png()
    .toFile("public/favicon.ico");
  
  await sharp(svg)
    .resize(180, 180)
    .png()
    .toFile("public/apple-touch-icon.png");

  console.log("Favicons generated!");
}

genFavicon().catch(console.error);
