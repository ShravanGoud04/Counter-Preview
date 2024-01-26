let dec = document.querySelector(".dec");
let inc = document.querySelector(".inc");
let resett = document.querySelector(".reset");
let btn = document.querySelector(".btn");
let count = document.querySelector(".count");

let counts = 0;

dec.addEventListener("click", decrease);
inc.addEventListener("click", increase);
resett.addEventListener("click", reset);

function increase() {
  counts++;
  count.innerHTML = counts;
  if (counts > 0) {
    count.style.color = "green";
  }
  if (counts == 0) {
    count.style.color = "black";
  }
}

function decrease() {
  counts--;
  count.innerHTML = counts;
  if (counts < 0) {
    count.style.color = "red";
  }
  if (counts == 0) {
    count.style.color = "black";
  }
}

function reset() {
  counts = 0;
  count.innerHTML = counts;
  count.style.color = "black";
}
