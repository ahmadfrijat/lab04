alert("hello world")
// var x = 7;
// var correct = true;
// var notcorrect = false;
// if(x>5){
//     alert (x);
// }else{ 
//     alert("hello world")
// }
// if(correct){
//     alert(correct)
// }
var name = prompt("inter your name")
var numberone = prompt ("inter number one")
var operation = prompt ("inter the operation")
var numbertwo = prompt ("inter number two")
if (operation == '+'){
    sum()
}else if(operation == '-'){
    sub()
}else if(operation == '*'){
    mul()
}else if (operation == '/'){
    div() 
}


function sum (){
    var total =parseInt(numberone)+parseInt(numbertwo) 
    alert (total) 
}
function sub (){
    var total =parseInt(numberone)-parseInt(numbertwo) 
    alert (total) 
}
function mul (){
    var total =parseInt(numberone)*parseInt(numbertwo) 
    alert (total) 
}
function div (){
    var total =parseInt(numberone)/parseInt(numbertwo) 
    alert (total) 
}
alert("bye, take care of yourself ")