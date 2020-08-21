let states = ["Kansas", "North Dakota", "Arizona", "New Mexico"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-")
}
let functionalUrls = (array) => {
    return states.map(element => `https://www.exampe.com/${urlify(element)}`);
}
console.log(functionalUrls(states));
function lengthCompare(string) {
    return string.split(/\s+/).length === 1;
}
let functionalSingles = (array) => {
    return array.filter(element => lengthCompare(element));
} ;
console.log(functionalSingles(states));
function rewind(array){
    return array.map(element => urlify(element));
};
console.log(rewind(states))

function imperativeRewind(array) {
    let rewind = []
    array.forEach(element => {
        rewind.push(urlify(element));
    });
    return rewind
};
console.log(imperativeRewind(states));

let rewind2 = (array) => {
    return array.filter(element => lengthCompare(element));
}
console.log(rewind2(states));
function imperativeRewind2(array){
    let rewind2 = [];
    array.forEach(element => {
        if (lengthCompare(element)) {
            rewind2.push(element);
        }
    });
    return rewind2;
};
console.log(imperativeRewind2(states));
let Dakota1 = (array) => {
    return array.filter(element => element.includes("Dakota"));
};
console.log(Dakota1(states));

let Dakota2 = (array) => {
    return array.filter(element => element.split(/\s+/).length === 2);
};
console.log(Dakota2(states));

let A = ["Atharva", "Samata", "cushion"];
let ifCushion = (string) => {
    if (string.includes("cushion")) {
        return "Yes."
    } else {
        return "No."
    }
}
let cushionYes = (array) => {
   return array.map(element => ifCushion(element));
}
console.log(cushionYes(A));

function imperativeLengths(array) {
    let object = {};
    array.forEach(element => object[element] = element.length);
    return object;
}
console.log(imperativeLengths(states));

function lol(content){
    this.content = content
    if(typeof(this.content) !== 'string'){
        this.error = function error(){return "Please use a string."}
    } else {
        this.content = content.split(/\s+/g);
        this.uniques = function uniques(){
            return (this.content).reduce((object, element)=>{
                if (object[element]){
                    object[element] += 1;
                } else {
                    object[element] = 1;
                }
                return object;
            }, {});
        }
    }
}