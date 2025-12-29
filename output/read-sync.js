const fs = require("fs")

console.log("star reading...")



try{
const data = fs.readFileSync("./data/Dairy.txt" ,"utf-8")
console.log("file content ")
console.log(data)
}
catch(err) {
    console.log(err.message)
}


console.log("finished")