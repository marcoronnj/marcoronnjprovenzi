import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { deflateSync } from "node:zlib";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const MARK_COLOR = [5, 5, 5];

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data = Buffer.alloc(0)) {
  const length = Buffer.alloc(4);
  const name = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);

  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([name, data])), 0);

  return Buffer.concat([length, name, data, crc]);
}

function roundedRectContains(x, y, left, top, size, radius) {
  const right = left + size - 1;
  const bottom = top + size - 1;

  if (x < left || x > right || y < top || y > bottom) {
    return false;
  }

  const cx = x < left + radius ? left + radius : x > right - radius ? right - radius : x;
  const cy = y < top + radius ? top + radius : y > bottom - radius ? bottom - radius : y;
  const dx = x - cx;
  const dy = y - cy;

  return dx * dx + dy * dy <= radius * radius;
}

function createLogoPng(size) {
  const rowLength = size * 4 + 1;
  const pixels = Buffer.alloc(rowLength * size);
  const markSize = Math.round(size * 0.72);
  const markOffset = Math.floor((size - markSize) / 2);
  const radius = Math.max(1, Math.round(size / 180));

  for (let y = 0; y < size; y += 1) {
    const row = y * rowLength;
    pixels[row] = 0;

    for (let x = 0; x < size; x += 1) {
      const index = row + 1 + x * 4;
      const isMark = roundedRectContains(x, y, markOffset, markOffset, markSize, radius);

      pixels[index] = MARK_COLOR[0];
      pixels[index + 1] = MARK_COLOR[1];
      pixels[index + 2] = MARK_COLOR[2];
      pixels[index + 3] = isMark ? 255 : 0;
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", header),
    pngChunk("IDAT", deflateSync(pixels, { level: 9 })),
    pngChunk("IEND")
  ]);
}

const icons = [
  ["favicon-32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512]
];

await mkdir(PUBLIC_DIR, { recursive: true });

const pngIcons = Object.fromEntries(icons.map(([fileName, size]) => [fileName, createLogoPng(size)]));
const favicon = pngIcons["favicon-32.png"];
const icoHeader = Buffer.alloc(22);

icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader[6] = 32;
icoHeader[7] = 32;
icoHeader[8] = 0;
icoHeader[9] = 0;
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(favicon.length, 14);
icoHeader.writeUInt32LE(22, 18);

await Promise.all([
  ...Object.entries(pngIcons).map(([fileName, png]) => writeFile(path.join(PUBLIC_DIR, fileName), png)),
  writeFile(path.join(PUBLIC_DIR, "favicon.ico"), Buffer.concat([icoHeader, favicon]))
]);

console.log(`Generated ${icons.length + 1} logo icons in public/`);
