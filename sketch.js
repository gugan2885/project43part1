const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var fruit_con_4;
var fruit_con_5;
var fruit_con_6;
var rope3;
var thanks;
var bg_img;
var food;
var rabbit;

var button,button2,button3,button4,button5,button5;
var bunny;
var blink,eat,sad;
var mute_btn;

var fr;

var bk_song;
var cut_sound;
var sad_sound;
var eating_sound;

var star1,star2,starImg;
var stars,empty,oneStar,twoStar;
var starsss;
var stark;
var stonk;
var stonks;
var blower;
var starsss;
var starss;
var star;
var star3,star4;
var star5,star6,star7,star8,star,star10;
var upArrow;
var downArrow;
var leftArrow;
var rightArrow;
var firImg;
var ThrusterFire;
var arrows,arrows2,arrows3,arrows4,arrows5,arrows6,arrows7,arrows8;
var upArrowImg,downArrowImg,leftArrowImg,rightArrowImg;
var GameOverImg,GameOver;
var bunny2,rocket,rocketsound,spacebg,grassbg;

function preload()
{
  bg_img = loadImage('background.png');
  spacebg=loadImage("space1.jpg");
  grassbg=loadImage("grass.PNG")
  food = loadImage('Carrot-removebg-preview.png');
  rabbit = loadImage('Rabbit-01.png');
  starImg=loadImage("star.png")
  bk_song = loadSound('maxkomusic-meditative-space.mp3');
  sad_sound = loadSound("sad.wav")
  cut_sound = loadSound('rope_cut.mp3');
  eating_sound = loadSound('eating_sound.mp3');
  air = loadSound('air.wav');
  thanks = loadSound('Thanks.mp3');
  empty= loadAnimation("empty.png")
  oneStar=loadAnimation("one_star.png");
  twoStar=loadAnimation("stars.png")
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  fireImg=loadImage("ThrusterFire-removebg-preview.png");
  upArrowImg=loadImage("Uparrow-removebg-preview.png");
  downArrowImg=loadImage("DownArrowImg-removebg-preview.png");
  leftArrowImg=loadImage("leftImg-removebg-preview.png")
  rightArrowImg=loadImage("right_Img-removebg-preview.png");
  rocketsound=loadSound("mixkit-fast-rocket-whoosh-1714.wav")
  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  eat.looping = false; 
}

function setup() 
{
  createCanvas(1500,1000);
  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;

 

   //btn 1
   button = createImg('thruster-removebg-preview.png');
   button.position(450,90);
   button.size(50,50);
   button.mouseClicked(drop2);
 
    //btn 2
  button2 = createImg('thruster-removebg-preview.png');
  button2.position(800,90);
  button2.size(50,50);
  button2.mouseClicked(drop);

  button3 = createImg('thruster-removebg-preview.png');
  button3.position(100,90);
  button3.size(50,50);
  button3.mouseClicked(drop3);

 
 // button3 = createImg('thruster-removebg-preview.png');
 // button3.position(800,90);
 // button3.size(50,50);
 // button3.mouseClicked(drop2);
 


   rope = new Rope(10,{x:850,y:90});
   rope2 = new Rope(4,{x:450,y:90});
   rope3 = new Rope(10,{x:100,y:90});

  mute_btn = createImg('mute.png');
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);

 // blower = createImg('baloon2.png');
 // blower.position(270,350);
 // blower.size(100,100);
//blower.mouseClicked(airBlow);

  ground = new Ground(300,height,width*2,20);
  blink.frameDelay = 20;
  eat.frameDelay = 20;

  bunny = createSprite(600,930,100,100);
  bunny.scale = 0.2;
  

  bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');

 
  stars=createSprite(50,30,30,30);
  stars.scale=0.2;
  stars.addAnimation("empty",empty);
  stars.addAnimation("1star",oneStar);
  stars.addAnimation("2star",twoStar);
  stars.changeAnimation("empty")

  star=createSprite(150,30,30,30)
  star.scale=0.2;
  star.addAnimation("emptys",empty);
  star.addAnimation("1stars",oneStar);
  star.addAnimation("2stars",twoStar);
  star.changeAnimation("emptys");

  starsss=createSprite(260,30,30,30)
  starsss.scale=0.2;
  starsss.addAnimation("emptyss",empty);
  starsss.addAnimation("1starss",oneStar);
  starsss.addAnimation("2starss",twoStar);
  starsss.changeAnimation("emptyss")

  stark=createSprite(370,30,30,30)
  stark.scale=0.2;
  stark.addAnimation("emptysss",empty);
  stark.addAnimation("1starsss",oneStar);
  stark.addAnimation("2starsss",twoStar);
  stark.changeAnimation("emptysss")

  star1=createSprite(50,300,20,20);
  star1.addImage("stars",starImg);
  star1.scale=0.02;
  star2=createSprite(360,130,20,20);
  star2.addImage("stars",starImg);
  star2.scale=0.02;

  starss=createSprite(100,300,20,20);
  starss.addImage("stars",starImg);
  starss.scale=0.02;
  starss.velocityX=0.8;

  arrows= createSprite(150,300,100,100);  
  arrows.addImage("ar",leftArrowImg);
  arrows.scale=0.2;
  arrows.visible=false;
  
  arrows2= createSprite(290,100,100,100);
  arrows2.addImage("aro", rightArrowImg);
  arrows2.scale=0.2;
  arrows2.visible=false;

  arrows3= createSprite(510,300,100,100);
  arrows3.addImage("arw",rightArrowImg)
  arrows3.scale=0.2;
  arrows3.visible=false;

  arrows4= createSprite(690,600,100,100);
  arrows4.addImage("ars",leftArrowImg)
  arrows4.scale=0.2;
  arrows4.visible=false;



  arrows5= createSprite(790,800,100,100);
  arrows5.addImage("ard",leftArrowImg)
  arrows5.scale=0.2;
  arrows5.visible=false;

  arrows6= createSprite(470,900,100,100);
  arrows6.addImage("ard",rightArrowImg)
  arrows6.scale=0.2;
  arrows6.visible=false;


  star3=createSprite(600,300,20,20);
  star3.addImage("stars",starImg);
  star3.scale=0.02;
  star4=createSprite(600,600,20,20);
  star4.addImage("stars",starImg);
  star4.scale=0.02;
  star5=createSprite(700,800,20,20);
  star5.addImage("stars",starImg);
  star5.scale=0.02;
  star6=createSprite(500,900,20,20);
  star6.addImage("stars",starImg);
  star6.scale=0.02;

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);
  fruit_con_3 = new Link(rope3,fruit);

  upArrow=createImg("Uparrow-removebg-preview.png")
  upArrow .position(1200,800);
  upArrow.size(50,50);
  upArrow.mouseClicked(airBlow);

  downArrow=createImg("DownArrowImg-removebg-preview.png")
  downArrow .position(1200,900);
  downArrow.size(50,50);
  downArrow.mouseClicked(DownBlow);

  leftArrow=createImg("leftImg-removebg-preview.png")
  leftArrow .position(1150,850);
  leftArrow.size(50,50);
  leftArrow.mouseClicked(leftBlow);

  rightArrow=createImg("right_Img-removebg-preview.png")
  rightArrow .position(1250,850);
  rightArrow.size(50,50);
  rightArrow.mouseClicked(rightBlow);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  fill("Blue")
  textSize(30);
  text("Catch The Moving Star And Follow The Arrows And Feed The Bunny",450,40);
   

  if(keyDown(LEFT_ARROW)){
   bunny.x=bunny.x-2
  }
  if(keyDown(RIGHT_ARROW)){
    bunny.x=bunny.x +2
   }
 
  rope.show();
  rope2.show();
  rope3.show();

  Engine.update(engine);
  ground.show();

  drawSprites();

//fill("red");
//text("Score:",score,460,50)

  if (collision(fruit,star1)==true){
     star1.visible=false;
     stars.changeAnimation("2star");
     arrows.visible=false;
     arrows3.visible=true;
     star1.y=-300;
  }
  if (collision(fruit,star2)==true){
    star2.visible=false;
    stars.changeAnimation("1star");
    arrows2.visible=false;
    arrows.visible=true;
    star2.y=-300;
 }

  if(collide(fruit,bunny)==true)
 {
    World.remove(engine.world,fruit);
   fruit = null;
   bunny.changeAnimation('eating');
   eating_sound.play();
   thanks.play();
   bk_song.stop();
  }
  if (collision(fruit,star3)==true){
    star3.visible=false;
    star.changeAnimation("1stars");
    arrows3.visible=false;
    arrows4.visible=true;
    star3.y=-700
  }

  if (collision(fruit,star4)==true){
    star4.visible=false;
    arrows4.visible=false;
    arrows5.visible=true;
    star.changeAnimation("2stars");
    star4.y=-300
  }

  if (collision(fruit,starss)==true){
    starss.visible=false;
    starsss.changeAnimation("2starss")
    arrows2.visible=true;
   
  }
  if (collision(fruit,star5)==true){
    star5.visible=false;
    stark.changeAnimation("1starsss");
    star5.y=-300
    arrows5.visible=false;
    arrows6.visible=true;
  }
  if (collision(fruit,star6)==true){
    star6.visible=false;
    stark.changeAnimation("2starsss")
    star6.y=-300
    arrows6.visible=false;
  }

 if(fruit!=null && fruit.position.y>=950)
  {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit=null;
   }
  
}

function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}


function drop3()
{
  cut_sound.play();
  rope3.break();
  fruit_con_3.dettach();
  fruit_con_3 = null;
}


function drop4()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

function drop5()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}

function drop6()
{
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}


function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=30)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


function mute()
{
  if(bk_song.isPlaying())
     {
      bk_song.stop();
     }
     else{
      bk_song.play();
     }
}

function airBlow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:-0.05});
  air.play();
}
function DownBlow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0,y:0.05});
  air.play();
}

function rightBlow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0.05,y:0});
  air.play();
}
function leftBlow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:-0.05,y:0});
  air.play();
}

function collision(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=20)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}


