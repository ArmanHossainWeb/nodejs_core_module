const fs = require('fs');
console.log("start reading")


fs.readFile("./data/Dairy.txt", "utf-8", (error, data) => {
    if(error) {
        console.error("error happend: ", error.message);
    }
    console.log("file content")
    console.log(data)
})

console.log("this runs immediately -no blocking")
