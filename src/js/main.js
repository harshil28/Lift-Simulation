let floorInput = document.querySelector(`#floorCount`);
let liftInput = document.querySelector(`#liftCount`);
let generateButton = document.querySelector(`#generateButton`);
let clearButton = document.querySelector(`#clearButton`);
let container = document.querySelector(`#mainContainer`);
let finalhr = document.querySelector(`#final_hr`);

function divContainer(numOfFloors) {
  container.innerHTML = "";
  for (let i = 0; i < numOfFloors; i++) {
    newFloor(i);
  }
}

function newFloor(floor) {
  let userFloorValue = floorInput.value;
  let floorNo = userFloorValue - floor;
  const newDiv1 = document.createElement("div");
  newDiv1.className = `floorValaDiv`;

  const floorNameDiv = document.createElement("div");
  floorNameDiv.className = `floorName`;
  floorNameDiv.id = `floorName` + floorNo;
  floorNameDiv.innerHTML = floorNo;
  newDiv1.appendChild(floorNameDiv);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = `liftButtonDiv`;

  if (floor >= 1) {
    const upLiftButtonDiv = document.createElement("div");
    upLiftButtonDiv.innerHTML = "U";
    upLiftButtonDiv.className = `liftButton`;
    buttonDiv.appendChild(upLiftButtonDiv);
  }

  if (floor < userFloorValue - 1) {
    const downLiftButtonDiv = document.createElement("div");
    downLiftButtonDiv.innerHTML = "D";
    downLiftButtonDiv.className = `liftButton`;
    buttonDiv.appendChild(downLiftButtonDiv);
  }

  newDiv1.appendChild(buttonDiv);

  if (floor == userFloorValue - 1) {
    for (let j = 0; j < liftInput.value; j++) {
      newDiv1.appendChild(nayaLift());
    }
  }

  //newDiv1.appendChild(liftDiv);
  container.appendChild(newDiv1);
  container.appendChild(document.createElement("hr"));
}

function nayaLift() {
  const liftDiv = document.createElement("div");
  liftDiv.className = `lift`;

  const leftDoorDiv = document.createElement("div");
  leftDoorDiv.className = `liftDoorLeft`;

  const rightDoorDiv = document.createElement("div");
  rightDoorDiv.className = `liftDoorRight`;

  liftDiv.appendChild(leftDoorDiv);
  liftDiv.appendChild(rightDoorDiv);
  return liftDiv;
}

function clickHandler() {
  let floorValue = floorInput.value;
  let liftValue = liftInput.value;
  if (floorValue <= 1) {
    return alert("Number of floors should be greater than 1 !!");
  }
  if (liftValue < 1) {
    return alert("Number of lifts should be 1 or more than 1 !!");
  }
  // createDiv(floorValue);
  divContainer(floorValue);
}

function clearAll() {
  container.innerHTML = "";
  floorInput.value = "";
  liftInput.value = "";
}

generateButton.addEventListener("click", clickHandler);
clearButton.addEventListener("click", clearAll);
