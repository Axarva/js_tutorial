let foo = ["Atharva", "Samata", "cushion"]

function nameLiking(element) {
    if (element.length >= 7) {
        return "Mmm, this I liek"
    } else {
        return "No liek."
    }
}
let arrayLikes = (array) => {
    return array.map(element => nameLiking(element));
}
console.log(arrayLikes(foo));

let arrayFilter = (array) => {
    return array.filter(element => element.length >= 7);
}
console.log(arrayFilter(foo));

let arrayLength = (array) => {
    return array.reduce((length, element) => {length += element.length; return length;},0)
}


let arrayLaming = (array) => {
    return array.reduce((object, ) => {object.lameness = arrayLength(array); return object;}, {}) 
}
console.log(arrayLaming(foo));

let xdg = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let Multiply = (array) => {
    return array.reduce((multiplied, element) => {
            multiplied *= element;
            return multiplied;
        }, 1)
}
console.log(Multiply(xdg));
let containA = (string) => {
    if (
    string.includes("a")){
        return "Liek"
    } else {
        return "No liek"
    }
}
let likeA = (array) => {
    return array.map(element => containA(element));
}
console.log(likeA(foo));


class frase {
    constructor(string) {
        this.content = string;
        this.length = function length() {
            return this.content.length;
        };
        this.stringIng = function stringIng(string){
            return String(string).toLowerCase();
        }
        this.process = function process(){
            return this.stringIng(this.content);
        }
        this.reverse = function reverse() {
            return Array.from(this.process()).reverse().join("");
        };
        this.randomNum = function randomNum() {
            return Math.floor((Math.random() * 2) + 1);
        };
        this.nodeLike = function nodeLike() {
            if (this.randomNum() == 1) {
                return "liekkkkk!";
            }
            else {
                return "no liekkkkkk!";
            }
        };
    }
}
function foobar(content, boink){
    this.content = content;
    this.boink = boink;
    this.process = function process(){
        return this.stringIng(this.boink);
    }
};
foobar.prototype = new frase();
