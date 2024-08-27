let floorInput = document.querySelector(`#floorCount`);
let liftInput = document.querySelector(`#liftCount`);
let button = document.querySelector(`#generateButton`);

let container = document.querySelector(`.container`);

function clickHandler() {
  let floorValue = floorInput.value;
let liftValue = liftInput.value;
  if(floorValue <= 1 ){
    alert("Number of floors should be greater than 1 !!");
  }if(liftValue < 1){
    alert("Number of lifts should be POSITIVE !!");
  }
}

function showErrorMessage(message) {
  container.style.display = "block";
  container.style.color = "red";
  container.innerText = message;
}

button.addEventListener("click", clickHandler);
