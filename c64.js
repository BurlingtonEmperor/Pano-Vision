const consoleOutput = document.getElementById("console-output");
const userInput = document.getElementById("user-input");
const buttonOptions = document.getElementById("button-options");

const commodoreConsole = document.getElementById("console");
const commodoreCamera = document.getElementById("camera");

// userInput.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault(); 

//     let user_true_input = userInput.innerText;
//     consoleOutput.innerHTML += "<p>" + user_true_input + "</p>";
//   }
// });

function addConsoleOutput (outputContent) {
  consoleOutput.innerHTML += "<p>" + outputContent + "</p>";
}

// pre-programmed stuff
setTimeout(function () {
  addConsoleOutput("Options Below");
  buttonOptions.style.display = "block";
}, 700);

function tunnelShow () {
  commodoreConsole.style.display = "none";
  commodoreCamera.style.display = "block";
}

// buttons
const wildwoodBurlington = document.getElementById("wildwood-burlington");
const reganBurlington = document.getElementById("regan-burlington");
const targetBurlington = document.getElementById("target-burlington");

wildwoodBurlington.onclick = function () {
  tunnelShow();
}

reganBurlington.onclick = function () {
  tunnelShow();
}

targetBurlington.onclick = function () {
  tunnelShow();
}