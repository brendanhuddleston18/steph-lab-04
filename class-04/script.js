'use strict';

/*Code from Lab 2 adjusted. The code from lab 2 was conditional logic with nest if/else statements. Because today's
assignment is requiring a score, I separated the nesting, which got rid of the conditional logic, which is a better approach for 
keeping score.*/

let score = 0;

let userName = prompt("What is your name?");
whatsName();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();


function whatsName(){
  console.log(`Name entered: ${userName}`);
  // return userName;
}

function questionOne(){
  alert(`Hi ${userName}! We're going to play a game where I ask you seven questions. Press OK to begin.`);
  // Question 1
  let live = prompt(`${userName}, does Steph live in Atlanta? (Type 'yes' or 'no')`);
  console.log(`Steph lives in Atlanta: ${live}`);
  if (live.toLowerCase() === "yes") {
    alert("Correct! Steph lives in Atlanta.");
    console.log("Correct! Steph lives in Atlanta.");
    score++;
  } else {
    console.log("Incorrect. Steph does live in Atlanta.");
    alert("Incorrect. Steph does live in Atlanta.");
  }
  alert(`Your current score is: ${score}`);
}

// Question 2
function questionTwo(){
  let children = prompt("Does Steph have children? (Type 'yes' or 'no')");
  if (children.toLowerCase() === "no") {
    console.log("Great job! Steph doesn't have children.");
    alert("Great job! Steph doesn't have children.");
    score++;
    } else {
      console.log("Incorrect. Steph doesn't have children.");
      alert("Incorrect. Steph doesn't have children.");
    }
    alert(`Your current score is: ${score}`);
  }
  // } else {
  //   console.log("Please type 'yes' or 'no'.");
  //   alert("Please type 'yes' or 'no'.");
  // }b
    
// Question 3
function questionThree(){

  let pets = prompt("Does Steph have a pet? (Type 'yes' or 'no')").toLowerCase();
  
  if (pets === "yes" || pets === "no") {
    if (pets === "yes") {
      score++;
      console.log("Correct! Steph has a dog named Tot.");
      alert("Correct! Steph has a dog named Tot.");
    } else {
      console.log("Incorrect. Steph has a dog named Tot.");
      alert("Incorrect. Steph has a dog named Tot.");
    }
  } else {
    console.log("Please type 'yes' or 'no'.");
    alert("Please type 'yes' or 'no'.");
  }
  
  alert(`Your current score is: ${score}`);
}
// Question 4
function questionFour(){

  let attorney = prompt("Is Steph an attorney? (Type 'yes' or 'no')").toLowerCase();
  
  if (attorney === "yes" || attorney === "no") {
    if (attorney === "yes") {
      score++;
      console.log("Congratulations! Steph is an attorney.");
      alert("Congratulations! Steph is an attorney.");
    } else {
      console.log("Incorrect. Steph is an attorney.");
      alert("Incorrect. Steph is an attorney.");
    }
  } else {
    console.log("Please type 'yes' or 'no'.");
    alert("Please type 'yes' or 'no'.");
  }
  
  alert(`Your current score is: ${score}`);
}   
    // Question 5
function questionFive(){

      let pizza = prompt("Does Steph like pizza? (Type 'yes' or 'no')").toLowerCase();
      
      if (pizza === "yes" || pizza === "no") {
        if (pizza === "yes") {
          score++;
          console.log("Correct! Steph likes pizza.");
          alert("Correct! Steph likes pizza.");
        } else {
          console.log("Incorrect. Steph likes pizza.");
          alert("Incorrect. Steph likes pizza.");
        }
      } else {
        console.log("Please type 'yes' or 'no'.");
        alert("Please type 'yes' or 'no'.");
      }
 }
 
 // Lab 3 Loop for Question 2
 function questionSix(){
   for (let i = 1; i <= 4; i++) {
     let guess = prompt('How many years has Steph been an attorney? Guess a number 0 - 20.');
     let correctAnswer = 10;
     guess = parseInt(guess);
     
     if (guess === correctAnswer) {
       score++;
       console.log('You are correct!');
       alert(`Correct! Your current score is: ${score}`);
       break;
      } else if (guess < correctAnswer) {
        console.log('Too low');
        alert(`Too low. You have ${4-i} tries left. Try again.`);
      } else {
        console.log('Too high');
        alert(`Too high. You have ${4-i} tries left. Try again.`);
        
        if (i === 4) {
          console.log(`You have used all your attempts. The correct answer is ${correctAnswer}.
          Your current score is: ${score}.`);
          alert(`You have used all your attempts. The correct answer is ${correctAnswer}
          Your current score is: ${score}.`);
        }
      }
    }
  }
  
  function questionSeven(){
    let correctAnswer = ["cheese", "pepperoni", "mushrooms", "olives", "italian sausage", "pineapples"];
    let attempts = 6;
    while (attempts > 0) {
      let pizza = prompt(`What pizza topping does Steph like? You have ${attempts} attempts remaining.`).toLowerCase();
      if (correctAnswer.includes(pizza)) {
        score++;
        console.log('You are correct!');
        alert(`You are correct! Your final score is: ${score} out of 7. Well done!`);
        break;
      } else {
        attempts--;
        if (attempts > 0) {
          console.log('Nope.');
          alert(`Nope. You have ${attempts} tries left. Try again.`);
        } else {
          console.log('You have used all your attempts.');
          alert(`You have used all your attempts. Your final score is: ${score} out of 7. Well done!`);
        }
      }
    }
  }
  //Lab 3 Array for Question 3
  
  // I tried to use indexof instead of .includes but my code wasn't working. And I didn't realize it wasn't working until I had my friend try my 
  
  // let correctAnswer = ["Cheese", "Pepperoni", "Mushrooms", "Olives", "Italian Sausage", "Pineapples"];
  // let attempts = 6;
// pizza = prompt(`What pizza topping does Steph like? You have ${attempts} attempts remaining.`).toLowerCase();
// while (pizza !== correctAnswer) {
//   if (correctAnswer.includes(pizza)) {
//     score++;
//     console.log('You are correct!');
//     alert(`You are correct! Your final score is: ${score} out of 7. Well done!`);
//     break;
//   } else {
//     attempts--;
//     if (attempts > 0) {
//       console.log('Nope.');
//       alert(`Nope. You have ${attempts} tries left. Try again.`);
//     } else {
//       console.log('You have used all your attempts.');
//       alert(`You have used all your attempts. Your final score is: ${score} out of 7. Well done!`);
//     }
//   }
// }

  
  // let correctAnswer = ["cheese", "pepperoni", "mushrooms", "olives", "italian Sausage", "pineapples"];
  // let correctGuesses = [];
  // let attempts = 6;
  
  
  // while(attempts > 0){
    //   let guess = prompt(`What pizza topping does Steph like? You have ${attempts}/7 attempts left`);
    //   if(correctAnswer.includes(pizza)){
//     score++;
//     alert('we did it');
//   } else {
//     alert('did not work');
//   }

// }


// for (let i = 1; i <= 6; i++) {
//   let guess = prompt('What pizza topping does Steph like?').toLowerCase();

//   if (guess.toLowerCase() == correctAnswer[0] ) {
//     score++;
//     correctGuesses.push(guess); 
//     console.log('You are correct!');
//     alert(`You are correct! Your final score is: ${score} out of 7. Well done!`);
//     break;
//   } else if (i === 6) {
//     console.log('You have used all your attempts.');
//     alert(`You have used all your attempts. The correct answers are: ${correctGuesses.join(', ')}.\nYour final score is: ${score} out of 7. Well done!`);
//   } else {
//     console.log('Nope.');
//     alert(`Nope. You have ${6 - i} tries left. Try again.`);
//   }
// }

/* .push(guess): .push() is an array method in JavaScript that adds an element 
to the end of an array. I used it to add the value of the guess variable 
to the correctGuesses array.*/















/* Lab 3 array 1st try
let correctAnswer = ["Cheese","Pepperoni", "Mushrooms","Olives","Italian Sausage","Pineapples"];

for (let i = 1; i <= 6; i++) {
  let guess = prompt('What pizza topping does Steph like?');

  if (guess === correctAnswer) {
    console.log('You are correct!');
    alert('You are correct!');
    break;
  } else {
    console.log('Nope.');
    alert(`Nope. You have ${6-i} tries left. Try again.`);
    
    if (i === 6) {
    console.log(`You have used all your attempts. The correct answer is ${correctAnswer}`);
    alert(`You have used all your attempts. The correct answer is ${correctAnswer}`);

    }
  }
}
*/



/* Lab 3 loop first try

for(let i=0; i<4; i++){
  let age = prompt('How long has Steph been an attorney?');
  if(age === 10){
    console.log('you are correct');
  } else if (age < 10){
    console.log('too low');
  } else if (age > 10){
    console.log('too high');
  } else  {
    console.log('wrong answer');
  }
} */