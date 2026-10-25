const openBtn = document.getElementById("openBtn");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");

function openSurprise() {
  if (passwordInput.value.trim() === "942010") {
    errorMessage.textContent = "";
    welcome.classList.add("hidden");
    surprise.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    errorMessage.textContent = "الباسورد مش صح، حاولي تاني يا لولو 💜";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

openBtn.addEventListener("click", openSurprise);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    openSurprise();
  }
});