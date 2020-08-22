(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

function Phrase(content){
    this.content = content;
    this.String = String(this.content).toLowerCase();
    this.letter = function letter() {
        let goodyRegex = /[a-zA-Z]/;
        if (Number(this.String)) {
            return this.String;
        } else {
        return Array.from(this.String).filter(c => c.match(goodyRegex)).join("")};
    };
    this.processor = function processor(){
        if (!!Number(this.content)) {
            return String(this.content).reverse();
        }else {
            return (this.letter()).reverse();
        }
    }
    this.processedContent = function processedContent(){
        return this.processor();
    }
    this.palindrome = function palindrome() {
        if (this.processedContent() == ""){
            return "It's empty."
        } else if (this.processedContent() == "0"){
            return "Please input a number other than 0."
        } else if (this.processedContent() === this.letter()){
            return `"${this.content}" be palindrome.`
        }else {
            return `"${this.content}" be no palindrome, pleb.`
        }
        }
}

},{}],2:[function(require,module,exports){
let Phrase = require("axarva-palindrome");

function palindromeTester(event) {
    event.preventDefault();
    let string = event.target.phrase.value;
    let phrase = new Phrase(string);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome() == `"${phrase.content}" be palindrome.`) {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" be a palindrome.`;
      } else if(phrase.palindrome() == `"${phrase.content}" be no palindrome, pleb.`){
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" be no palindrome, pleb.`;
      } else {
          palindromeResult.innerHTML = phrase.palindrome();
      }
    }
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", function() {
        palindromeTester(event);
    });
});



},{"axarva-palindrome":1}]},{},[2]);
