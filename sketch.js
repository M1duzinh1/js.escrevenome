function setup() {
    createCanvas(600, 600);
    background('black');
  }
  
  function draw() {
    stroke('white');
    fill('brown');
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,35);
    }
  }