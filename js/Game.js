class Game {
  constructor() { }

  start() {
    //os objetos form e player foram criados para chamar os métodos das classes: Form e Player
    //criando objetos para form e player e chamando a função(método) display de Form
    form = new Form();
    form.display();

    //objeto player.
    player = new Player();
  }
}
