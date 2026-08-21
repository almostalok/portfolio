import sharp from "sharp";
import fs from "fs";
import path from "path";

const outputDir = path.resolve("public/assets");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const masterImage = path.resolve("public/assets_spritesheet.png");

// Master bounding box coordinates for each asset in the 1024x682 spritesheet
const slices = [
  // Characters
  { name: "alok_standing_glow", left: 148, top: 22, width: 110, height: 140 },
  { name: "alok_desk_laptop", left: 265, top: 52, width: 140, height: 110 },
  { name: "alok_thinking_coffee", left: 418, top: 52, width: 118, height: 110 },
  { name: "alok_walking_backpack", left: 540, top: 22, width: 95, height: 140 },
  { name: "alok_crosslegged_laptop", left: 642, top: 56, width: 112, height: 106 },
  { name: "alok_fistpump_win", left: 760, top: 30, width: 125, height: 132 },
  { name: "alok_walking_yellow_pack", left: 895, top: 22, width: 95, height: 140 },

  // Story scenes
  { name: "scene_laptop_plant", left: 18, top: 175, width: 120, height: 75 },
  { name: "scene_dual_monitors", left: 145, top: 172, width: 130, height: 80 },
  { name: "scene_reading_book", left: 285, top: 172, width: 125, height: 80 },
  { name: "scene_giant_pencil", left: 425, top: 172, width: 130, height: 80 },
  { name: "scene_flying_paper_plane", left: 568, top: 172, width: 110, height: 80 },
  { name: "scene_mountain_flag", left: 690, top: 170, width: 120, height: 85 },
  { name: "scene_typing_coffee", left: 830, top: 172, width: 155, height: 80 },

  // Landscape Dividers (wide strips)
  { name: "landscape_trees_birds", left: 15, top: 425, width: 460, height: 60 },
  { name: "landscape_lighthouse", left: 15, top: 490, width: 460, height: 65 },
  { name: "landscape_mountains_van", left: 15, top: 560, width: 460, height: 60 },
  { name: "landscape_rolling_hills", left: 15, top: 620, width: 460, height: 58 },

  // Annotations & Text
  { name: "annot_building", left: 475, top: 395, width: 95, height: 45 },
  { name: "annot_shipping", left: 572, top: 395, width: 72, height: 45 },
  { name: "annot_organizing", left: 648, top: 395, width: 80, height: 45 },
  { name: "annot_experimenting", left: 730, top: 395, width: 92, height: 45 },
  { name: "annot_debugging", left: 825, top: 395, width: 95, height: 45 },
  { name: "annot_lets_ship", left: 922, top: 395, width: 90, height: 45 },
  { name: "annot_never_stop", left: 485, top: 440, width: 95, height: 35 },
  { name: "annot_hey_bubble", left: 800, top: 470, width: 60, height: 45 },

  // UI Components & Objects
  { name: "ui_window_frame", left: 485, top: 475, width: 100, height: 70 },
  { name: "ui_sticky_note", left: 595, top: 475, width: 55, height: 70 },
  { name: "ui_notepad_pinned", left: 655, top: 475, width: 55, height: 70 },
  { name: "ui_lined_paper", left: 715, top: 475, width: 50, height: 70 },
  { name: "icon_coffee_steaming", left: 300, top: 260, width: 48, height: 50 },
  { name: "icon_paper_plane", left: 458, top: 260, width: 52, height: 50 },
  { name: "icon_rocket", left: 420, top: 260, width: 40, height: 50 },
  { name: "icon_trophy", left: 458, top: 345, width: 45, height: 45 },
  { name: "icon_target_radar", left: 545, top: 345, width: 45, height: 45 },
];

async function extractAndUpscale() {
  console.log("Starting asset extraction and upscaling...");
  const image = sharp(masterImage);

  for (const item of slices) {
    try {
      const outputPath = path.join(outputDir, `${item.name}.png`);
      
      // Extract bounding box, trim extra white if needed, and upscale 2.5x with lanczos3
      await sharp(masterImage)
        .extract({
          left: Math.max(0, item.left),
          top: Math.max(0, item.top),
          width: Math.min(1024 - item.left, item.width),
          height: Math.min(682 - item.top, item.height),
        })
        .resize({
          width: Math.round(item.width * 2.5),
          kernel: sharp.kernel.lanczos3,
        })
        .png({ quality: 100, compressionLevel: 9 })
        .toFile(outputPath);

      console.log(`✓ Saved ${item.name}.png`);
    } catch (err) {
      console.error(`Error processing ${item.name}:`, err);
    }
  }

  console.log("All assets extracted successfully!");
}

extractAndUpscale().catch(console.error);
