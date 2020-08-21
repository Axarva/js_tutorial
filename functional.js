let states = ["Kansas", "North Dakota", "Arizona", "New Mexico"];

function urlify(string) {
        return string.toLowerCase().split(/\s+/).join("-")
}
function imperativeUrls(array) {
    let urls = []
    array.forEach((element) => {
        urls.push(urlify(element));
    })
    return urls;
};
console.log(imperativeUrls(states));

let functionalUrls = (array) => {
    return states.map(element => urlify(element));
}
console.log(functionalUrls(states));

function lengthCompare(string) {
    return string.split(/\s+/).length === 1;
}
// singles: Imperative version
function imperativeSingles(array) {
    let singles = [];
    array.forEach(element => {
        if (lengthCompare(element)){
            singles.push(element);
        };
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
let functionalSingles = (array) => {
    return array.filter(element => lengthCompare(element));
};
console.log(functionalSingles(states));

function imperativeLengths(array) {
    let object = {};
    array.forEach(element => object[element] = element.length);
    return object;
}
console.log(imperativeLengths(states));

let functionalLength = (array) => {
    return array.reduce((object, element) => {
        object[element] = element.length;
        return object},{})
}
console.log(functionalLength(states));

let foo = ["Atharva", "Samata", "cushion"]

let lengthAdder = (array) => {
    return array.reduce((length, element) => {
        length += element.length;
        return length;
    },0)
}
console.log(lengthAdder(foo));

let stringAdder = (array) => {
    return array.reduce((combined, element) =>
        {combined += element.toLowerCase();
        return combined;
        },''
    )
}
console.log(stringAdder(foo));