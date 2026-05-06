import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const chunksDir = join(process.cwd(), "out/_next/static/chunks");

let files;
try {
  files = await readdir(chunksDir);
} catch {
  console.error("No output chunks found — run `next build` first.");
  process.exit(1);
}

const jsFiles = files.filter((f) => f.endsWith(".js"));
console.log(`Obfuscating ${jsFiles.length} chunks…`);

for (const file of jsFiles) {
  const filePath = join(chunksDir, file);
  const code = await readFile(filePath, "utf-8");
  const result = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    sourceMap: false,
    stringArray: true,
    stringArrayEncoding: ["base64"],
    stringArrayThreshold: 0.8,
    rotateStringArray: true,
    shuffleStringArray: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    // breaks code when DevTools formats/beautifies it
    selfDefending: true,
    // infinite loop activates when debugger is open
    debugProtection: true,
    debugProtectionInterval: 4000,
    // code refuses to run outside this domain
    domainLock: ["rajugottumukkala.com", "www.rajugottumukkala.com"],
    disableConsoleOutput: false,
  });
  await writeFile(filePath, result.getObfuscatedCode());
}

console.log("Done.");
