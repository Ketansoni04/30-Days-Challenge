// Immmediatly Invoked Function Expression

// due global variable functions in code is poluted to avoid that iffe - invokes immeditely 
(function chai() {
    // nammed iffe
    console.log("DATABAE CONNECTED");
})(); // ";" end this

// (initialization)(call)

((name) => {
    console.log(`name is ${name}`);
})("Ketan") // pass argument 