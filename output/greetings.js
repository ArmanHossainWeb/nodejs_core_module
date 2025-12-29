const args = process.argv;


const name = args[2] || "guest";
const time = new Date().getHours();

let greeting;

if (time < 12) {
    greeting = "good morning"
}
else if (time < 18){
    greeting = "good afternoon"
}
else{
    greeting = "good evening"
}


console.log(`${greeting} ${name}`)