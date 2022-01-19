function doSomething() {
    console.log("I'm coding javascript");
}

console.log("I'm first person");
console.log("I'm second person");
// setTimeout(doSomething, 500);
setTimeout(function () {
    console.log("I'm using VS code");
}, 4000);
setTimeout(() => {
    console.log("Exploring MDN Articales");
}, 2000)
console.log("I'm third person");
console.log("I'm forth person");