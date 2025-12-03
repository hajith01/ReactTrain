function greet(name, func) {
    console.log("Hello", func(name));
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Hajith", upperCaseName);
