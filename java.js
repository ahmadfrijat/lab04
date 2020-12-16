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
// var name = prompt("inter your name")
// var numberone = prompt ("inter number one")
// var operation = prompt ("inter the operation")
// var numbertwo = prompt ("inter number two")
// if (operation == '+'){
//     sum()
// }else if(operation == '-'){
//     sub()
// }else if(operation == '*'){
//     mul()
// }else if (operation == '/'){
//     div() 
// }


// function sum (){
//     var total =parseInt(numberone)+parseInt(numbertwo) 
//     alert (total) 
// }
// function sub (){
//     var total =parseInt(numberone)-parseInt(numbertwo) 
//     alert (total) 
// }
// function mul (){
//     var total =parseInt(numberone)*parseInt(numbertwo) 
//     alert (total) 
// }
// function div (){
//     var total =parseInt(numberone)/parseInt(numbertwo) 
//     alert (total) 
// }
// alert("bye, take care of yourself ")
let stars= prompt('please inter the word star')
while (stars!=='star'){
    alert("not correct")
    stars= prompt('please inter the word star')
}

var showOrder = function(){
    var order = prompt("what do you want to order star or planet ?");
    while (order !='star' && order != 'planet'){
        order = prompt("please inter star or planet");
    }
    var item ="";
    var noOfOrder = prompt("how many star or plant do you want ?");
    for (var x = 0; x <noOfOrder; x = x + 1){
        if (order == 'star') {
            item = '<img src="https://specials-images.forbesimg.com/imageserve/5fb7797a6d1bbd7fea2f0890/960x0.jpg?fit=scale" width=20% height=20% />'; 
            
        } else if (order == 'planet') {
            item = '<img src="https://i.pinimg.com/originals/1d/e7/4b/1de74ba3dd7656c944f890c8a880d333.jpg" width=20% height=20% />';      
        } else if (order == 'mercedes') {
            item = '<img src="https://www.topgear.com/sites/default/files/images/cars-road-test/2019/08/f7c8b3c3422aa676314bc4209a44b39c/large-33263-mercedes-amggtrpro.jpg" width=20% height=20% />';      
        }
        document.write('<p>' + item + '</p>');
    }
    } 
    showOrder()
