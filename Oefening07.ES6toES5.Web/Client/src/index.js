const helloWorld = "Hello World";

class Greeter {
    constructor(userName) {
        this._userName = userName;
    }

    greet() {
        return `${helloWorld} and ${this._userName}!`;
    }
}

const span = document.getElementById("greeting");
document.getElementById("name").addEventListener("input", (e) => {
    let greeter = new Greeter(e.target.value);
    span.innerText = greeter.greet();
});

