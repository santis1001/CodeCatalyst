function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);

// TODO: Add Event Listener for "keydown" event

