import sharp from "sharp";
import fs from "fs";
import path from "path";

const generatedImg = "C:/Users/DELL/.gemini/antigravity-ide/brain/f60e8d3a-c6a8-4bdd-ab8a-0ecffad111f8/portfolio_favicon_avatar_1787421152171.jpg";

async function makeFavicons() {
  const size = 512;
  
  // Extract and resize the circular artwork
  // The generated artwork has a circle inside. Let's crop it tightly to the circle and make background transparent!
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 4}" fill="white"/></svg>`
  );

  const buffer = await sharp(generatedImg)
    .resize(size, size, { fit: "cover" })
    .composite([{
      input: circleMask,
      blend: "dest-in"
    }])
    .png()
    .toBuffer();

  // Save to public and app directories
  await sharp(buffer).resize(32, 32).png().toFile("public/favicon.png");
  await sharp(buffer).resize(32, 32).toFile("public/favicon.ico");
  await sharp(buffer).resize(32, 32).toFile("app/favicon.ico");
  await sharp(buffer).resize(192, 192).png().toFile("public/icon.png");
  await sharp(buffer).resize(180, 180).png().toFile("public/apple-icon.png");
  await sharp(buffer).resize(512, 512).png().toFile("public/icon-512.png");
  
  // Save in public/assets/generated
  fs.copyFileSync(generatedImg, "public/assets/generated/favicon_avatar.jpg");
  fs.writeFileSync("public/assets/generated/favicon_avatar.png", buffer);

  console.log("Favicons generated successfully!");
}

makeFavicons().catch(console.error);
