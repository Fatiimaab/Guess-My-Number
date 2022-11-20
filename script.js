// console.log(document);

// console.log(document.querySelector("h1").textContent);

// console.log(document.querySelector("p"));


// console.log(document.querySelector(".guess").value=13)



// if(number === guess){
//     console.log("you won")
// }
// else{
//     console.log("mumu")
// }

// again button
const again= document.querySelector("#again");

// Question mark
const secretNumber=Math.trunc(Math.random() *20+1);

console.log(secretNumber)

let number= document.querySelector(".number") ;

// input box
// const guess= document.querySelector(".guess").value;

// check button
const check= document.querySelector("#check");


// start guessing
let message= document.querySelector(".sg");

// score
let score= Number(document.querySelector(".score").textContent);


// highscore
let highscore= document.querySelector(".highscore")


// again button

let y= function(){
    message.textContent="Start guessing..."
    document.querySelector(".score").textContent= "20"
    document.querySelector("body").style.backgroundColor = "#222";
    number.textContent="?"
    location.reload()
    }
again.addEventListener("click",y) 



// check button
let x=function(){
    const guess= Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess)
    if(!guess){
        message.textContent="No number"
        score--
        document.querySelector(".score").textContent= score
    }
    else if(guess<secretNumber){
        message.textContent="too low"
        score = score-2
        document.querySelector(".score").textContent= score
    }
    else if(guess>secretNumber){
        message.textContent="too high"
        score = score - 2 
        document.querySelector(".score").textContent = score
    }
    else if(guess === secretNumber){
        message.textContent="Correct"
        score  = score + 2
        document.querySelector(".score").textContent= score
        number.textContent=secretNumber
        highscore = score
        document.querySelector(".highscore").textContent= score
        document.querySelector("body").style.backgroundColor = "#60b347";
    }
}


check.addEventListener("click",x )