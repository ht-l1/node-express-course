// your task is to change this program so that it does something interesting! First, you can change the variables that you want to store when you get the form back. Then, you can change the form itself to return the values you want from the user, which you store in those variables. Then, you can use string interpolation to insert the values of your variables into the HTML. Finally, you change the logic that handles the hash of values you get when the user submits the form, so that you save the values the user submits. 

// For example, you could change the input field to be a dropdown with various colors, and you could set the background color of the body to be what the user chooses. Or, you could make a number guessing game: Start with a random number from 1 to 100, let the user guess, and tell the user if their guess is low or high. In this case, you’d change the input field so that it accepts only numeric input (but when it is returned in the hash, it will be a string, so you’d have to convert it.)

const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
// let item = "Enter something below.";
let randomNum = Math.floor(Math.random() * 50) + 1;
let message = "Please guess a number between 1 and 50"

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="50"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["guess"]) {
        const userGuess = parseInt(body["guess"])
        if (userGuess === randomNum) {
          message = "You got it right!"
          randomNum = Math.floor(Math.random() * 50 + 1)
        } else if (userGuess < randomNum) {
          message = "Too low!"
        } else {
          message = "Too high!";
        }
      } else {
        message = "Please enter a valid number"
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
