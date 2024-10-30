function setup() {
    createCanvas(400, 400);
    background("red");
  }
  
  function draw() {
    fill("gold");
    stroke("black");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  