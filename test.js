const fs = require('fs').promises; 

const fileName = "text1.txt";

function printFile(fileName){
    fs.stat(fileName)
    .then((stats) => {
      if (stats.isDirectory()) {
        throw new Error(`${fileName} is a directory`);
      }
      else {
        fs.readFile(fileName)
        .then((content) => {
            console.log(content.toString());
        })
    } 
    })
}
printFile(fileName) ;
