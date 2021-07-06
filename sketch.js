var Drop,thunder;
var maXDrops=100;

function preload(){
    
}

function setup(){
   
    

}

function draw(){
   background(255); 

for(var i=0; i<maXDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
 
rand = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
}      
switch(rand){
    case 1: thunder.addImage(thunder);
    break;
    case 2: thunder.addImage(thunder);
    break;
}
thunder.scale = random(0.3,0.6)

 drawSprite();
}

}   

