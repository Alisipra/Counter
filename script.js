let b1 = document.getElementById("btnplus");
let b2 = document.getElementById("btnminus");
let counter = document.getElementById("spn");
let b3 = document.getElementById("reset");
b1.addEventListener("click", increment);
let a = 0;
function increment() {
  a = a + 1;
  counter.textContent = a;
}
b2.addEventListener("click", decrement);

function decrement() {
  if (a > 0) {
    a = a - 1;
    counter.textContent = a;
  }
}
b3.addEventListener("click", reset);

function reset() {
  counter.textContent = 0;
  a = 0;
}
