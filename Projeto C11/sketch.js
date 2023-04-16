
function preload(){
seaImg = loadImage("sea.png"); 
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png"); 
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  background("blue");
    drawSprites();
    spriteName.addImage(seaImg); 
    spriteName.addImage(shipImg1); 

    //código para redefinir o plano de fundo 
    if(sea.x < 0){
      sea.x = sea.width/2; 
    }
    
 
}
