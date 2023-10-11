let boxNum = document.getElementById("boxNum");
let form = document.getElementsByTagName("form");
function handleForm(event) { event.preventDefault(); } 
form[0].addEventListener("submit", handleForm);

function createEm() {
  let color = document.getElementById("color").value;
  let shape = document.getElementsByName("shape");

  while (document.querySelector("section.boxes").lastChild) {
    document.querySelector("section.boxes").lastChild.remove();
  }

  for (let i=1; i<=boxNum.value; i++) {
    let newEm = document.createElement("div");
    newEm.className = "box";
    newEm.style.width = "100px";
    newEm.style.height = "100px";
    newEm.style.color = textColor(color);
    newEm.innerText = i;
    if (shape[1].checked)
      newEm.style.borderRadius = "50%";
    newEm.style.backgroundColor = color;
    document.querySelector("section.boxes").append(newEm);
  }
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function textColor(color) {
  let rgb = [];
  rgb.push(hexToRgb(color).r);
  rgb.push(hexToRgb(color).g);
  rgb.push(hexToRgb(color).b);
  
  let contrast = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  let textColor = (contrast > 125) ? "black" : "white";

  return textColor;
}

function formValid() {
  if (boxNum.value)
    createEm();
  else
    alert("Please enter a value!");
}

