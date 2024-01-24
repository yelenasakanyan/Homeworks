const fileName = "text1.txt";

function printFile(fileName) {
  fs.stat(fileName)
    .then((stats) => {
      if (stats.isDirectory()) {
        throw new Error(`${fileName} is a directory`);
      }
      else {
        fs.readFile(fileName, "utf-8")
          .then((content) => {
            console.log(content.toString());
          })
      }
    })
}

// promises Chaining

function printFile() {
  fs.stat(fileName).then((info) => {
    if (!info.isDirectory()) {
      return fs.readFile(fileName, {
        encoding: "utf8"
      })
    }
    return Promise.reject(new Error(`${fileName} is a directory`));

  })
    .then(content => console.log(content))
    .catch(error => console.log(error.message))

}

printFile(fileName);


// async/ await 

async function printFile() {
  const info = await fs.stat(fileName);
  if (!info.isDirectory()) {
    const text = await fs.readFile(fileName, { encoding: "utf8" });
    console.log(text);
  } else {
    throw new Error(`${fileName} is not a file`);
  }
}

printFile(fileName);