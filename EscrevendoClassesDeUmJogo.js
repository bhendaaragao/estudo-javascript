class personagemDoJogo {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    switch (this.tipo) {
      case 'mago':
        console.log(` ${this.nome} o ${this.tipo} atacou usando Magia`);
        break;

      case 'guerreiro':
        console.log(` ${this.nome} o ${this.tipo} atacou usando Espada`);
        break;

      case 'monge':
        console.log(` ${this.nome} o ${this.tipo} atacou usando Artes Marciais`);
        break;

      case 'ninja':
        console.log(` ${this.nome} o ${this.tipo} atacou usando Shuriken`);
        break;
    }
    }
  }
  const personagem = new personagemDoJogo("Bhenda",29 , "ninja");
  personagem.atacar();
