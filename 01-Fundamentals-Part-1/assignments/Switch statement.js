// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.

let language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// Example 2:
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan day structure");
    console.log("Create project plan");
    break;
  case "Tuesday":
    console.log("Plan course learning structure");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Study for the course");
    break;
  case "Friday":
    console.log("Assignments for the course");
    break;
  case "Saturday":
    console.log("Review course materials");
    break;
  case "Sunday":
    console.log("Relax and enjoy the weekend");
    break;
  default:
    console.log("Invalid day");
}
