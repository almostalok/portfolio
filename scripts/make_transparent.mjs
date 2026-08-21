import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = path.resolve("public/assets");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));

async function makeTransparent() {
  console.log("Making assets transparent...");

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const { data, info } = await sharp(filePath)
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Convert near-white pixels (r > 240, g > 240, b > 240) to alpha = 0
      const channels = info.channels;
      for (let i = 0; i < data.length; i += channels) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If almost pure white/off-white background
        if (r > 238 && g > 238 && b > 238) {
          if (channels === 4) {
            data[i + 3] = 0; // Transparent
          }
        }
      }

      await sharp(data, {
        raw: {
          width: info.width,
          height: info.height,
          channels: channels,
        },
      })
        .png()
        .toFile(filePath);

      console.log(`✓ Transparent: ${file}`);
    } catch (e) {
      console.error(`Error with ${file}:`, e);
    }
  }

  console.log("All assets are now crisp transparent PNGs!");
}

makeTransparent().catch(console.error);
