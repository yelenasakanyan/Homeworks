const fs = require('fs').promises;

async function mergeFiles(file1, file2, result) {
  const contents = await Promise.all([
    fs.readFile(file1, { encoding: "utf8" }),
    fs.readFile(file2, { encoding: "utf8" })
  ]);

  await fs.writeFile(result, `${contents[0]} ${contents[1]}`);
  const newFile = await fs.readFile(result, { encoding: "utf8" });
  console.log(newFile);
  console.log("Files are merged")
}
const file1 = "text1.txt";
const file2 = "text2.txt";
const mergedFile = "mergedFile.txt";

mergeFiles("text1.txt", "text2.txt", "mergedFile.txt");