Array.prototype.last = function(){
    return this.slice(-1);
}
String.prototype.blank = function(){
    return (this.match(/^\s*$/))
}
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

function Phrase(content){
    this.content = content;
    this.processor = function processor(string){
        return String(string.toLowerCase());
    }
    this.processedContent = function processedContent(){
        return this.processor(this.content);
    }
    this.palindrome = function palindrome() {
        if (this.processedContent() == ""){
            return "Its empty."
        } else if (this.processedContent() == "0"){
            return "Please input a number other than 0."
        } else if (this.processedContent.reverse() === this.processedContent()){
            return "This a palindrome."
        }else {
            return "This no palindrome, pleb."
        }
        }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.processedContent = function processedContent(){
        return this.processor(this.translation);
    }
}
TranslatedPhrase.prototype = new Phrase();
