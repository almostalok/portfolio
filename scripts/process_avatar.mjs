import sharp from "sharp";
import fs from "fs";
import path from "path";

async function processAvatar() {
  const uploadedJpg = "C:/Users/DELL/.gemini/antigravity-ide/brain/d0e0a3c4-3c75-498c-bb7c-5b4648821d45/.user_uploaded/media_1787349732980.jpg";
  const masterSheet = "public/assets_spritesheet.png";

  console.log("Processing real photo avatar...");
  // 1. Process the full-resolution real photo
  await sharp(uploadedJpg)
    .resize(800, 800, { fit: "cover", position: "top" })
    .grayscale()
    .png({ quality: 100 })
    .toFile("public/avatar.png");

  await sharp(uploadedJpg)
    .resize(800, 800, { fit: "cover", position: "top" })
    .grayscale()
    .jpeg({ quality: 95 })
    .toFile("public/avatar.jpg");

  // 2. Also crop the illustrated avatar from the top left of spritesheet if needed
  await sharp(masterSheet)
    .extract({ left: 10, top: 15, width: 135, height: 150 })
    .resize(500, 500, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile("public/assets/avatar_illustrated.png");

  console.log("Avatar processing complete!");
}

processAvatar().catch(console.error);
