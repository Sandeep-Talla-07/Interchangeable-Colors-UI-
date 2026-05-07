const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("shadow");
    const color = btn.classList[1];
    changeBackGroundColor(color);
  });
});

function changeBackGroundColor(color) {
  body.className = "";

  switch (color) {
    case "skyblue":
      body.classList.add("skyblue");
      break;
    case "sapphireBlue":
      body.classList.add("sapphireBlue");
      break;
    case "burntUmber":
      body.classList.add("burntUmber");
      break;
    case "camel":
      body.classList.add("camel");
      break;
    case "cadmiumGreen":
      body.classList.add("cadmiumGreen");
      break;
    case "thistle":
      body.classList.add("thistle");
      break;
  }
}
