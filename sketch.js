var bg,c1,c2,c3,m1,m2,m3,cat,mouse
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    c1=loadAnimation("images/cat1.png")
    c2=loadAnimation("images/cat2.png","images/cat3.png")
    c3=loadAnimation("images/cat4.png")

    m1=loadAnimation("images/mouse1.png")
    m2=loadAnimation("images/mouse2.png","images/mouse3.png")
    m3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
cat=createSprite(800,700)
cat.addAnimation("stop",c1)
cat.scale=0.2

mouse=createSprite(180,700)
mouse.addAnimation("stop",m1)
mouse.scale=0.1
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left_arrow")){
        cat.velocityX=-3
        cat.addAnimation("walk",c2)
        cat.changeAnimation("walk",c2)

        mouse.addAnimation("walk",m2)
        mouse.changeAnimation("walk",m2)
    }
    if(cat.x-mouse.x<cat.width-mouse.width){
        cat.velocityX=0
        cat.addAnimation("walk",c3)
        cat.changeAnimation("walk",c3)

        mouse.addAnimation("end",m3)
        mouse.changeAnimation("end",m3)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
