// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

// Global Variables
let blue = {
  x: 100,
  y: 700,
  w: 50,
  h: 50,
  speed: 5,
};
let green = {
  x: 900,
  y: 700,
  w: 50,
  h: 50,
  speed: 5,
};

let ArrowRightPressed = false;
let ArrowLeftPressed = false;
let ArrowUpPressed = false;
let ArrowDownPressed = false;
let KeyDPressed = false;
let KeyAPressed = false;
let KeyWPressed = false;
let KeySPressed = false;

// Animation Loop
requestAnimationFrame(draw);

function draw() {
  //Logic
  if (ArrowRightPressed) {
    blue.x += blue.speed;
  } else if (ArrowLeftPressed) {
    blue.x += -blue.speed;
  } else if (ArrowUpPressed) {
    blue.y += -blue.speed;
  } else if (ArrowDownPressed) {
    blue.y += blue.speed;
  }
  if (KeyDPressed) {
    green.x += green.speed;
  } else if (KeyAPressed) {
    green.x += -green.speed;
  } else if (KeyWPressed) {
    green.y += -green.speed;
  } else if (KeySPressed) {
    green.y += green.speed;
  }

  // Draw
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = "lightblue";
  ctx.fillRect(blue.x, blue.y, blue.w, blue.h);
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(green.x, green.y, green.w, green.h);

  // Animate
  requestAnimationFrame(draw);
}

//Hold Down
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    ArrowRightPressed = true;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = true;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = true;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = true;
  }
  if (event.code == "KeyD") {
    KeyDPressed = true;
  } else if (event.code == "KeyA") {
    KeyAPressed = true;
  } else if (event.code == "KeyW") {
    KeyWPressed = true;
  } else if (event.code == "KeyS") {
    KeySPressed = true;
  }

  if (green.x < -60) {
    green.x = 1070;
  } else if (green.x > 1071) {
    green.x = -55;
  } else if (green.y > 860) {
    green.y = -55;
  } else if (green.y < -56) {
    green.y = 815;
  }

  if (blue.x < 10.49) {
    blue.x = 10.5;
  } else if (blue.x > 940.49) {
    blue.x = 940.49;
  } else if (blue.y < 15.1) {
    blue.y = 15.2;
  } else if (blue.y > 740) {
    blue.y = 737;
  }
  console.log(blue.y);
}
function keyupHandler(event) {
  if (event.code == "ArrowRight") {
    ArrowRightPressed = false;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = false;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = false;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = false;
  }
  if (event.code == "KeyD") {
    KeyDPressed = false;
  } else if (event.code == "KeyA") {
    KeyAPressed = false;
  } else if (event.code == "KeyW") {
    KeyWPressed = false;
  } else if (event.code == "KeyS") {
    KeySPressed = false;
  }
}

//Hold Down
// document.addEventListener("keydown", keydownHandler);
// document.addEventListener("keyup", keyupHandler);

// function keydownHandler(event) {
//   if (event.code == "ArrowRight") {
//     player.xSpeed = player.speed;
//     player.ySpeed = 0;
//   } else if (event.code == "ArrowLeft") {
//     player.xSpeed = -player.speed;
//     player.ySpeed = 0;
//   } else if (event.code == "ArrowUp") {
//     player.ySpeed = -player.speed;
//     player.xSpeed = 0;
//   } else if (event.code == "ArrowDown") {
//     player.ySpeed = player.speed;
//     player.xSpeed = 0;
//   }
// }
// function keyupHandler(event) {
//   if (event.code == "ArrowRight" && player.xSpeed > 0) {
//     player.xSpeed = 0;
//     player.ySpeed = 0;
//   } else if (event.code == "ArrowLeft" && player.xSpeed < 0) {
//     player.xSpeed = 0;
//     player.ySpeed = 0;
//   } else if (event.code == "ArrowUp" && player.ySpeed < 0) {
//     player.ySpeed = 0;
//     player.xSpeed = 0;
//   } else if (event.code == "ArrowDown" && player.ySpeed > 0) {
//     player.ySpeed = 0;
//     player.xSpeed = 0;
//   }
// }

//Continuous

// if (event.code == "ArrowRight") {
//   player.xSpeed = player.speed;
//   player.ySpeed = 0;
// } else if (event.code == "ArrowLeft") {
//   player.xSpeed = -player.speed;
//   player.ySpeed = 0;
// } else if (event.code == "ArrowUp") {
//   player.ySpeed = -player.speed;
//   player.xSpeed = 0;
// } else if (event.code == "ArrowDown") {
//   player.ySpeed = player.speed;
//   player.xSpeed = 0;
// }
//Key Press
// if (!event.repeat) {
//   // Move
//   if (event.code == "ArrowRight") {
//     player.x += 10;
//   } else if (event.code == "ArrowLeft") {
//     player.x += -10;
//   } else if (event.code == "ArrowDown") {
//     player.y += 10;
//   } else if (event.code == "ArrowUp") {
//     player.y += -10;
//   }
// }
