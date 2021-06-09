/*This is the magic eight ball mini project*/
/*In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/ 

//empty string declaration
var userName = "";


//ternary expression to decide if the user entered a name or not
//ternary expression evals true(stays as "") if no string entered
//expression assigns name entered to userName if name was entered(or if false)

 (userName == "") ? console.log("Hello!") : console.log("Hello, "+ userName + "!");

//variable userQuestion
var userQuestion = "Should I buy a new car?";

//check if question entered or not

(userQuestion == "") ? console.log("Invalid! Please enter question.") : console.log("You asked: " + userQuestion);

//random number variable. generates number b/t 0 and 7
var randNum = Math.floor(Math.random() * 8);


//eight ball variable 
var eightBall = "";

//switch statement to determine the eightBall variable response
/*statement assigned to eightBall will depend on switch statement chosen by random number*/
switch(randNum)
{
  case 0:
    eightBall = 'It is certain';
  break;

  case 1:
    eightBall = 'It is decidedly so';
  break;
    
  case 2:
    eightBall = 'Reply hazy try again';
  break;  

  case 3:
    eightBall = 'Cannot predict now';
  break;

  case 4:
    eightBall = 'Do not count on it';
  break;

  case 5:
    eightBall = 'My sources say no';
  break;

  case 6:
    eightBall = 'Outlook not so good';
  break;

  case 7:
    eightBall = 'Signs point to yes';
  break;


  
}

//printing eight ball response based on randon num b/t 0 and 7 chosen
console.log('Eight Ball says: ' + eightBall);
