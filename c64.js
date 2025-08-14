const consoleOutput = document.getElementById("console-output");
const userInput = document.getElementById("user-input");
const buttonOptions = document.getElementById("button-options");

const commodoreConsole = document.getElementById("console");
const commodoreCamera = document.getElementById("camera");

const panoCam = document.getElementById("panocam");
const panoContainer = document.getElementById("panocam-container");

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

function loadIframe (locSpec) {
  panoCam.src = "https://burlingtonemperor.github.io/Pano-Vision/panorama.html?loc=" + locSpec;
  panoCam.onload = () => {
    commodoreCamera.style.display = "none";
    panoContainer.style.display = "block";
  }
}

// buttons
const wildwoodBurlington = document.getElementById("wildwood-burlington");
const reganBurlington = document.getElementById("regan-burlington");
const targetBurlington = document.getElementById("target-burlington");

const panoBackButton = document.getElementById("pano-back-button");

wildwoodBurlington.onclick = function () {
  tunnelShow();
  loadIframe("wildwood");
}

reganBurlington.onclick = function () {
  tunnelShow();
  loadIframe("regan");
}

targetBurlington.onclick = function () {
  tunnelShow();
  loadIframe("target1");
}

panoBackButton.onclick = function () {
  panoContainer.style.display = "none";
  commodoreConsole.style.display = "block";
}