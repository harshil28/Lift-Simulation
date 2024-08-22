let floorInput = document.querySelector(`#floorCount`);
let liftInput = document.querySelector(`#liftCount`);
let button = document.querySelector(`#generateButton`);

function clickHandler() {
  console.log(floorInput.value);
  console.log(liftInput.value);
}

button.addEventListener("click", clickHandler);
