//shift() method syntax=shift(input)
function display(){
    var element=["a","b","c"];
    var shifted=element.shift();
    console.log(element);
    console.log(shifted);
}
display();
//unshift() syntax=unshift(input)
function display1(){
    var element=["a","b","c"];
    var unshifted=element.unshift("d");
    console.log(element);
}
display1();
//pop() syntax=pop(input)
function display2(){
    var element=["a","b","c"];
    var unshifted=element.unshift("d");
    var pop=element.pop("b"); //it removes 1st and last position element
    var push=element.push("e","a","f");
    console.log(element);
}
display2();