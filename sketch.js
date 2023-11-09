//variáveis 
var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;
var game;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Iniciando banco de dados
  database = firebase.database();

  //objeto de jogo é criado(classe)
  game = new Game();
  //chamando um método da classe game
  game.start();

}

function draw() {
  background(backgroundImage);
}

//sempre que há atualização ela ajusta automaticamente o tamanho da tela. 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
