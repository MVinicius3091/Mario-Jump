const personMario = document.getElementById("mario");
const pipe = document.getElementsByClassName("pipe")[0];
const restartGameModal = document.getElementsByClassName("modal")[0];
const resetButton = document.querySelector(".modal img");

resetButton.addEventListener("click", () => {
  restartGameModal.style.display = "none";
  personMario.setAttribute("src", "../img/mario.gif");
  pipe.classList.add("animate");
  loop();
});

//Evento de pulo do personagem

document.addEventListener("keypress", (event) => {
  let key = event.key;

  if (key === "x") {
    personMario.classList.add("jump");

    setTimeout(() => {
      personMario.classList.remove("jump");
    }, 800);
  }

  if (key === "z") {
    personMario.classList.add("jumpSuper");

    setTimeout(() => {
      personMario.classList.remove("jumpSuper");
    }, 800);
  }
});

//Evento par saber se o 'pipe' bateu no personagem

const loop = setInterval(() => {
  let pipeSimplePositon = pipe.offsetLeft;
  let Mario = +getComputedStyle(personMario).bottom.replace("px", "");

  if (pipeSimplePositon <= 44 && pipeSimplePositon > 0 && Mario <= 50) {
    pipe.classList.remove("animate");
    pipe.style.left = `${pipeSimplePositon}px`;
    personMario.setAttribute("src", "img/game-over.png");
    restartGameModal.style.display = "block";
  }
}, 10);

//Mudança de imagem
function toogleImg() {
  let toggle = true;
  setInterval(() => {
    console.log(true);

    if (toggle === true) {
      pipe.setAttribute("src", "img/pipetriple.png");
      pipe.style.width = "60px";
      pipe.style.backgroundColor = "#9BC7F5";
      toggle = false;
      console.log(toggle);
    } else {
      pipe.setAttribute("src", "img/pipe.png");
      pipe.style.width = "30px";
      toggle = true;
      console.log(toggle);
    }
  }, 6000);
}
toogleImg();
