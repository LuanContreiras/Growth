// Texto digitando e apagando
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["HTML", "CSS", "JS"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

//function para escrever quando não tiver texto
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
//function para apagar quando tiver texto
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// alert pro contact
function sendContact() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let cel = document.getElementById("cel");
  let msg = document.getElementById("msg");

  if (
    nome.value === "" ||
    email.value === "" ||
    cel.value === "" ||
    msg.value === ""
  ) {
    alert("Por favor, preencha os campos restantes");
  } else {
    alert("Obrigado, entraremos em contato assim que póssivel!");
    nome.value = "";
    email.value = "";
    cel.value = "";
    msg.value = "";
  }
}
// alert pro Newsletter
function newsSubs() {
  let nomeSub = document.getElementById("nomeSub");
  let emailSub = document.getElementById("emailSub");

  if (nomeSub.value === "" || emailSub.value === "") {
    alert("Por favor, preencha os campos para concluir a inscrição!");
  } else {
    alert("Obrigado por se inscrever!");
    nomeSub.value = "";
    emailSub.value = "";
  }
}