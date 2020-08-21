Array.prototype.last = function(){
    return this.slice(-1);
}
String.prototype.blank = function(){
    return (this.match(/^\s*$/))
}
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}
