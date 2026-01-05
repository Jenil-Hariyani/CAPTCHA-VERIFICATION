const captchaEl = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputEl = document.querySelector("input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-txt");

const allCharacters = [
  "A","B","C","D","E","F","G","H","I","J",
  "K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z",

  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z",

  1,2,3,4,5,6,7,8,9
];

// GENERATE CAPTCHA 
function generateCaptcha() {
  captchaEl.innerText = ""; 

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    captchaEl.innerText += allCharacters[randomIndex];
  }
}

// RELOAD CAPTCHA 
reloadBtn.addEventListener("click", () => {
  generateCaptcha();
});

// CHECK CAPTCHA 
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  statusTxt.style.display = "block";

  const userInput = inputEl.value.split("").join(" ");
  const captchaText = captchaEl.innerText.split("").join(" ");

  if (userInput === captchaText) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot";

    setTimeout(() => {
      statusTxt.style.display = "none";
      inputEl.value = "";
      generateCaptcha();
    }, 4000);
  } else {
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
  }
});

generateCaptcha();
