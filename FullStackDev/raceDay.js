//Race Day project
/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

*/
//racers number generated manually
let raceNumber = Math.floor(Math.random() * 1000);

//variable for early runner detection. 1 = early, 0 = not early

var earlyFlag = false;

//variable for runners age
var runnerAge = 19;

//if-else block to detect early, adult runners
if((runnerAge > 18) && (earlyFlag))
//the are an early adult
{
  raceNumber += 1000;
}


//check age and early flag for other race times
if((runnerAge > 18) && (earlyFlag))//early racer over 18
{
  console.log("Racer "+ raceNumber + " you can begin racing at 9:30am.");
}
else if((runnerAge > 18) && (earlyFlag == 0))//racer over 18 but not early
{
  console.log("Racer "+ raceNumber + " you can begin racing at 11:00am.");
}

//youth racers
else if(runnerAge < 18)
{
  console.log("Youth Racer "+ raceNumber + " you can begin racing at 12:30pm.");
}

//if the runner is 18?
else
{
  console.log(`Runner ${raceNumber}, please see the registration desk.`);
}
