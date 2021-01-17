var tile1,tile2,tile3,tile4,tile5;
var box;
var canvas
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  tile1=createSprite(720,550,160,10);
  tile1.shapeColor="darkred";
   
  tile2=createSprite(560,550,160,10);
  tile2.shapeColor="green";

  tile3=createSprite(400,550,160,10);
  tile3.shapeColor="yellow";

  tile4=createSprite(240,550,160,10);
  tile4.shapeColor="pink";

  tile5=createSprite(80,550,160,10);
  tile5.shapeColor="skyblue";

   //create box sprite and give velocity

   box=createSprite(random(20,750));
   box.shapeColor="white";
   box.velocityX=2;
   box.velocityY=2;
   box.scale=0.2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //box.bounceOff(canvas);

    

    //add condition to check if box touching surface and make it box
    if(tile1.isTouching(box) && box.bounceOff(tile1)){
    box.shapeColor="darkred";
}


    
    if(tile2.isTouching(box) && box.bounceOff(tile2)){
        box.shapeColor="green";
    
       }
     
       
    if(tile3.isTouching(box) && box.bounceOff(tile3)){
          box.shapeColor="yellow";
         
       }
    
     
    if(tile4.isTouching(box) && box.bounceOff(tile4)){
          box.shapeColor="pink";
        
       }
    
     
    if(tile5.isTouching(box) && box.bounceOff(tile5)){
          box.shapeColor="skyblue";
          
      }
    

    drawSprites();
   
}
   

