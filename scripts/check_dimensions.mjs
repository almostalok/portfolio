import sharp from "sharp";
import fs from "fs";
import path from "path";

async function main() {
  const imagePath = path.resolve("public/assets_spritesheet.png");
  const metadata = await sharp(imagePath).metadata();
  console.log("Spritesheet metadata:", metadata);
}

main().catch(console.error);
