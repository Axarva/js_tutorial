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


