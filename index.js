// Dark Mode
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Typing Effect
const text = ["Aspiring Full Stack Developer", "DSA Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Animation Init
AOS.init();