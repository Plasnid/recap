/**
 * *  Title Exploration
 * * Cabin Jack and the Terror of Mast #3
 */

const storyTitle = "Cabin Jack and the Terror of Mast #3";
const mainCharacter= "Cabin Jack";
let characterAge = 23;
let cabinJackDescription = `${mainCharacter} is ${characterAge} years old`;
console.log(cabinJackDescription);
let cabinJacksPocket = ["a tourniquet","a spare eyepatch","a spyglass","knife"];
console.log(cabinJacksPocket);
console.log(cabinJacksPocket.length)
console.log(cabinJacksPocket[2]);
// * add a parrot to my pocket
cabinJacksPocket.push("PolyJack the Parrot.....who is now angry");
console.log(cabinJacksPocket);

let bodyTag = document.querySelector("body");
console.log(bodyTag);
//* how do we loop through an array?
for(let i=0;i<cabinJacksPocket.length;i++){
    // * Cabin Jacks Pocket itemNumber: itemName
    let pocketItem = `Cabin Jacks Pocket ${i}: ${cabinJacksPocket[i]}`;
    console.log(pocketItem);
    let pocketParagraph = document.createElement("p");
    pocketParagraph.innerText = pocketItem;
    bodyTag.appendChild(pocketParagraph);
}

//* function functionName(paremeters go here){ steps go here}
function howIFeelAboutFood(foodName, feeling){
    let output = `${foodName}: ${feeling}`;
    console.log(output);
}
howIFeelAboutFood("Curry Goat", "my world is perfect");
howIFeelAboutFood("pied de vente", "my nose just died a little");

/**
 * * = sets a value (let i=0)
 * * ==  compares a value to another value, but not its datatype
 * * === compare value and datatype
 * * != not equal
 * * > greater than       >= greater than or equal to
 * * < less than          <= less than or equal to
 */

let hunger= 10000;
//* hunger scale  1 not hungry , 10 famished, 5 is a little peckish
if(hunger<=5){
    console.log("got any almonds!");
}else if(hunger>5 && hunger<8){
    console.log("a plain bagel");
}else{
    console.log("a double big mac with an entire pigs worth of bacon");
}

// * putting an if statment into a function
function shouldIWakeUp(alarmOn){
    if(alarmOn==true){
        console.log("I hate this alarm, I want to sleep!")
    }else{
        console.log("no alarm, I can sleep!");
    }
}
shouldIWakeUp(true);