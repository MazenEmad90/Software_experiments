// Counter
//increment
let num = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  num.textContent = count;
}
///dcrement

function decrement() {
    if (count > 0) {
        count -= 1;
    }
    num.textContent = count;
}
////save
let saveBtn = document.getElementById("save-btn");
let saveel = document.getElementById("save-el");

function saveData() {
    let counts= count + " - ";
    saveel.innerText +=" "+ counts;
    num.textContent=0;
    count=0;
};
let deleteBtn = document.getElementById("delete-btn");

function deleteData() {
    let counts= count + " - ";
    saveel.innerText ="previous entered:";
    num.textContent=0;
    count=0;
};
/////////////////////////////////////////////////////
// marketing
// let error= document.getElementById("error");
// let p="Error"
// function purchaseBtn(){
//     // document.write(`${p}`); ///delete the web and write this p
//     error.textContent += p;
// }
// calculation
let num1 = 8;
let num2 = 5;
let sumcal = document.getElementById("sum-el");

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");

function performAddition() {
    let Addition=num1 + num2;
    sumcal.textContent = "sum: "+ Addition;
}

function performSubtraction() {
    let Subtraction= num1 - num2
    sumcal.textContent = "sum: " +Subtraction;
}

function performDivision() {
    sumcal.textContent = "sum: " + num1 / num2;
}

function performMultiplication() {
    sumcal.textContent = "sum: " + num1 * num2;
}
//  building a blackjack game 

// let firstcard=21;
// let secondcard=0;
// let sum= firstcard+secondcard;
// if (sum< 21) {
//     console.log("do you want to drow a new card?");
// }else if(sum===21){
//     console.log("wohoo you've got blackjack !");
// }else if (sum > 21){
//     console.log("you've out of the game ");

// }
////////////////////
// let age= 100;

// if (age<100) {
//     console.log("not elegible");
// }else if(age===100){
//     console.log("here is your birthday card from the king");
// }else{
//     console.log("not elegible, you have aiready gotten one");
// }
/////////
// console.log(4===3); 
// console.log(5>2);//true
// console.log(12>12);
// console.log(3<0);
// console.log(3>=3);//true
// console.log(11<=11);//true
// console.log(3<=2);
// let sumel= document.querySelector("body")
let start= document.getElementById("message-el")
let sumel= document.getElementById("sum-id")
let cardel= document.getElementById("cards-el")

let firstcard=10;    
let secondcard=4;
let sum= firstcard+secondcard;
let message= "";
// let style_sum= sumel_id.style
function startgame() {
    sumel.textContent = "Sum: "+ sum 
    cardel.textContent +=  firstcard + " " + secondcard ;
    cardel=0;
    sumel.style.fontSize= "35px";
    sumel.style.fontWeight= "900";
    sumel.style.color= "black";

    if (sum <= 20) {
     message="do you want to drow a new card ?";
}else if(sum===21){
    message ="wohoo! you've got blackjack";
    // console.log(true);
}else{
    message="you've out of the game !";
}
start.textContent = message
start.style.color="black";
// start.style.fontSize="30px";
start.style.fontWeight="800";

}



///////////
