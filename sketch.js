var database;
var gameState = 0;
var playerCount = 0;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var c1,c2,c3,c4,trackImage;

function preload(){
    c1 = loadImage("images/car1.png")
    c2 = loadImage("images/car2.png")
    c3 = loadImage("images/car3.png")
    c4 = loadImage("images/car4.png")
    trackImage = loadImage("images/track.jpg")



}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play()
        drawSprites();
     }
    
     if(gameState === 2){
         game.End()
     }
}
