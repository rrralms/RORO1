
const text = "You’re the only line of code my heart runs on.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;
