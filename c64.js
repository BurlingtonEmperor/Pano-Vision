const consoleOutput = document.getElementById("console-output");
const userInput = document.getElementById("user-input");

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
}, 700);