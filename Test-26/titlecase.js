function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

let inputString = "bala";
let titleCaseString = toTitleCase(inputString);
console.log("Converted to Title Case:", titleCaseString);
