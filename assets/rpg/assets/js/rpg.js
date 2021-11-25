<<<<<<< HEAD
=======
var mago = {
  nome: "Misha",
  vida: 50,
  ataque: 7,
  esquiva: 6,
  defesa: 4,
  esp: "Magia",
  especial: function () {

    return this.ataque * 3;
  },
  imagem: "https://images.pexels.com/photos/5701253/pexels-photo-5701253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  especialImg: "https://i.pinimg.com/originals/2c/bc/c4/2cbcc4cbfb5f3f2005af73b58091d310.gif"
}

var ladra = {
  nome: "Aysha",
  vida: 60,
  ataque: 10,
  esquiva: 8,
  defesa: 6,
  esp: "facada",
  especial: function () {


    return this.ataque * 2;
  },
  imagem: 'https://st.depositphotos.com/2458365/3409/i/600/depositphotos_34097931-stock-photo-dark-skinned-girl-warrior.jpg',

  especialImg: "https://c.tenor.com/P2Ou4PzoxkMAAAAS/dio-knives.gif"
}

var guerreiro = {
  nome: "Thron",
  vida: 70,
  ataque: 15,
  esquiva: 7,
  defesa: 7,
  esp: "espadada",
  especial: function () {

    return this.ataque * 1.5;
  },
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCi8jsEmVqdgzMTL4NoW0g0jwQhbCS5WpUg&usqp=CAU",

  especialImg: "https://i.pinimg.com/originals/86/71/51/8671510553ab7803d802762c01ab736d.gif"
}

var vilao = {
  nome: "Eskeleton",
  vida: 30,
  ataque: 22,
  esquiva: 4,
  defesa: 3,
  imagem: "https://pm1.narvii.com/6464/ee1037e29ca76264c3969ad7b8ad1ca0772c61da_hq.jpg"
}

var leao = {
  nome: "Leão da Escuridão",
  vida: 20,
  ataque: 33,
  esquiva: 6,
  defesa: 3,
  imagem: "https://i.pinimg.com/originals/57/dd/74/57dd74a53f2d539b2d9be6cffa29ee92.gif"
}

var dado = {
  nome: "dado",
  sorteio: function () {
    result = ""
    escreve.innerHTML = "A sorte está lançada!\nClique 'Ok' para jogar o dado.";

    num = Math.floor(Math.random() * 20 + 1);

    if (num >= 1 && num <= 5) {

      result = "crítico";

    } else if (num > 5 && num <= 15) {

      result = "acertou";

    } else {

      result = "perfeito";

    }

    escreve.innerHTML = "O d20 deu " + num + "\nA ação foi " + result + "\n Clique 'Ok' para continuar";
    image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.tenor.com%2F0EJ8y8rrW-wAAAAM%2Fdnd-dice-roll.gif&imgrefurl=https%3A%2F%2Ftenor.com%2Fsearch%2Fd20-gifs&tbnid=N92SN6OW9YHy_M&vet=12ahUKEwj2uJ7ptIf0AhVyALkGHWDbAZ8QMygHegQIARBH..i&docid=neWPRN5EvHlxnM&w=220&h=124&q=dado%2020%20gif&ved=2ahUKEwj2uJ7ptIf0AhVyALkGHWDbAZ8QMygHegQIARBH";

    return result;
  }
}


function trocarImagem(url) {
  image.src = url;
  return image.src;
}


const pergunta = document.getElementById('pergunta');
const btn = document.getElementById('btn');

pergunta.innerHTML = "Vamos jogar?";

const resposta = document.getElementById("desejo").value;
const image = document.getElementById("image");





//funcao para sortear às ações
function jogaDado() {

  trocarImagem("https://media2.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif?cid=6c09b9520088a04a1a01e721b922e1e40fbc20ec808f76bb&rid=giphy.gif&ct=g");
  var num = Math.floor(Math.random() * 20 + 1);

  if (num >= 1 && num <= 5) {

    result = "crítico";


  } else if (num > 5 && num <= 15) {

    result = "acertou";


  } else {

    result = "perfeito";



  }
  return result
}


function responder(resposta) {

  resposta = document.getElementById("desejo").value;


  //decide se joga ou não
  switch (resposta) {

    case "S":

      pergunta.innerHTML = "Escolha seu personagem :";

      desejo.innerHTML = "<option value=1>Mago</option><option value=2>Ladra</option><option value=3>Guerreiro</option>";


      break;
    case "N":
      trocarImagem("https://i.gifer.com/6XdI.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Que pena, deixa para uma próxima.";


      break;
  }

  //seleção de personagem
  switch (resposta) {
    case "1":

      personagem = mago;
      trocarImagem(personagem.imagem);
      pergunta.innerHTML = "Legal, um mago!" +
        "<br>Você escolheu o " + personagem.nome + " ele possui: " + personagem.vida + " pontos de vida.<br>Clique no botão 'Responder' para prosseguir ";
      desejo.innerHTML = "<option value=>prosseguir</option>";
      //renderiza personagem imagem 


      break;

    case "2":
      personagem = ladra;
      trocarImagem(personagem.imagem);
      pergunta.innerHTML = "Legal, uma ladra!" +
        "<br>Você escolheu a " + personagem.nome + " ele possui: " + personagem.vida + " pontos de vida.<br>Clique no botão 'Responder' para prosseguir  ";
      desejo.innerHTML = "<option value=>prosseguir</option>";


      break;

    case "3":
      personagem = guerreiro;
      trocarImagem(personagem.imagem);

      pergunta.innerHTML = "Legal, um guerreiro!" + "<br>Você escolheu o " + personagem.nome + " ele possui: " + personagem.vida + " pontos de vida.<br>Clique no botão 'Responder' para prosseguir  ";

      desejo.innerHTML = "<option value=>prosseguir</option>";


      break;

    //início combate escolha primeira ação
    case "":

      trocarImagem(vilao.imagem);
      pergunta.innerHTML = "Oh, não..." + vilao.nome + " à vista!" + "<br>" + vilao.nome + " possui " + vilao.vida + " pontos de vida! :/ <br>Deseja iniciar um combate?";

      //imagem vilão


      desejo.innerHTML = "<option value=combate>Sim</option><option value=F>Não</option>"
      break;

  }

 

  //ataque do vilao, inicio do combate
  switch (resposta) {
    case "combate":

      //imagem Eskeleton
      trocarImagem(vilao.imagem);
      pergunta.innerHTML = "Ataque do " + vilao.nome + " escolha sua ação:";

      desejo.innerHTML = "<option value=esquivar>Esquivar</option><option value=defesa>Defender</option><option value=fugir>Fugir</option>";
      break;
    //escolha por fuga
    case "F":

      trocarImagem("https://i.gifer.com/fxSu.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Corra fujão!";

      break;
  }
  //esquiva e bloqueio continuacao caso a escolha anterior seja por combate
  switch (resposta) {
    case "esquivar":

      jogaDado();

      if (result === "acertou") {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        pergunta.innerHTML = "O dado deu " + result + ".<br>Você esquivou do ataque do " + vilao.nome + " de dano " + vilao.ataque + " ,seus pontos vitais agora são de " + personagem.vida;

        //esquiva perfeita
      } else if (result === "perfeito") {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        pergunta.innerHTML = "O dado deu " + result + ".<br>Você esquivou do ataque do " + vilao.nome + " perfeitamente <br>Seus pontos vitais agora são de " + personagem.vida;

      } else {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        personagem.vida = personagem.vida - vilao.ataque;

        pergunta.innerHTML = "O dado deu " + result + ".<br>Você não esquivou do ataque do " + vilao.nome + " de dano " + vilao.ataque + "<br>Seus pontos vitais agora são de " + personagem.vida;

      }
      break;
    case "defesa":

      jogaDado();

      if (result === "crítico") {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        vilao.ataque += 10;
        personagem.vida -= vilao.ataque;

        pergunta.innerHTML = "O dado deu " + result + ".<br>Você não bloqueou do ataque do " + vilao.nome + " de dano " + vilao.ataque + "<br>Seus pontos vitais agora são de " + personagem.vida;

        vilao.ataque == vilao.ataque;

        //bloqueio certo
      } else if (result === "acertou") {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        vilao.ataque -= personagem.defesa;
        personagem.vida -= vilao.ataque;

        pergunta.innerHTML = "O dado deu " + result + ".<br>Você bloqueou do ataque do " + vilao.nome + " de dano " + vilao.ataque + "<br>Seus pontos vitais agora são de " + personagem.vida;

        //defesa bem sucedida
      } else {

        desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";

        pergunta.innerHTML = "O dado deu " + result +
          ".<br>Você defendeu o ataque do " + vilao.nome + " perfeitamente,\nseus pontos vitais agora são de " + personagem.vida;
      }
      break;
    //opção de fugir  
    case "fugir":
      trocarImagem("https://i.gifer.com/fxSu.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Você perdeu!<br>Corra fujão!";
      break;
  }

  //ataque do personagem
  switch (resposta) {

    case "prosseguir":

      trocarImagem(personagem.imagem);
      pergunta.innerHTML = "Ataque do " + personagem.nome + " escolha sua ação:";

      desejo.innerHTML = "<option value=ataque>Atacar</option><option value=especial>Especial</option><option value=fugir>Fugir</option>";


      break;
  }

  switch (resposta) {
    case "ataque":

      jogaDado();

      if (result == "acertou") {

        vilao.vida -= personagem.ataque;

        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";

        pergunta.innerHTML = "Você atacou o " + vilao.nome + " e causou dano de " + personagem.ataque + " os pontos vitais dele agora são de " + vilao.vida + ".<br>Clique 'Prosseguir' para continuar";


      } else if (result == "crítico") {

        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";

        pergunta.innerHTML = "Ataque mal sucedido.<br>Clique 'Prosseguir' para continuar.";

        //ataque perfeito gera ataque especial
      } else {

        trocarImagem(personagem.especialImg);
        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";

        vilao.vida = vilao.vida - personagem.especial();


        pergunta.innerHTML = "Ataque perfeito!<br>Você atacou o " + vilao.nome + " com " + personagem.esp + " e causou dano de " + personagem.especial() + ".<br>Seus pontos vitais são de " + personagem.vida + " e os pontos vitais dele agora são de " + vilao.vida + ".<br> Clique 'Prosseguir' para continuar";

      }
      break;

    case "especial":

      jogaDado();

      if (result == "acertou") {
        //imagem magia
        trocarImagem(personagem.especialImg);
        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";

        personagem.vida = personagem.vida - 5;
        vilao.vida = vilao.vida - personagem.especial();

        pergunta.innerHTML = "O ataque especial esgota força vital do(a) " + personagem.nome + " em 5 pontos!<br>Você acertou o " + personagem.esp + " seus pontos vitais agora são de " + personagem.vida + " e os pontos vitais dele agora são de " + vilao.vida;

      } else if (result == "crítico") {
        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";
        //erro de especial 
        personagem.vida -= 5;
        pergunta.innerHTML = "Você errou o " + personagem.esp + " seus pontos vitais agora são de " + personagem.vida;

      } else {
        
        trocarImagem(personagem.especialImg);
        desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";
        //especial perfeito personagem não perde 5 pontos de vida

        vilao.vida -= personagem.especial();

        pergunta.innerHTML = "Ataque perfeito!<br>Você atacou o " + vilao.nome + " com " + personagem.esp + " e causou dano de " + personagem.especial() + "<br>Seus pontos vitais são de " + personagem.vida + " e os pontos vitais dele agora são de " + vilao.vida + "<br>Clique 'Responder' para continuar";
      }
      break;

    //opção de fuga 
    case "fugir":
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Você perdeu!";
      break;
  }

  switch (resposta) {
    case "segueLuta":

      //imagem Eskeleton
      trocarImagem(vilao.imagem);
      pergunta.innerHTML = "Ataque do " + vilao.nome + " escolha sua ação:";

      desejo.innerHTML = "<option value=esquivar>Esquivar</option><option value=defesa>Defender</option><option value=fugir>Fugir</option>";
      if (personagem.vida <= 0) {

        trocarImagem("https://i.gifer.com/6XdI.gif");
    
        desejo.style.display = "none";
        btn.innerText = "Reiniciar";
        btn.setAttribute('onclick', 'history.go(0)');
        pergunta.innerHTML = "Fim de jogo! Você perdeu!";
      
      //daqui sairá a segunda fase do jogo
      } else if (vilao.vida <= 0) {
    
        trocarImagem("https://s5r4g9i5.stackpathcdn.com/wp-content/uploads/2018/02/escrita-shu-mon.jpg.webp");
       
        pergunta.innerHTML = personagem.nome + " venceu!<br>Mas sua missão ainda não foi cumprida<br>A morte de "+vilao.nome+" revelou uma nova pista...<br>Um pergaminho com o mapa que revela o paradeiro do mal estrutural<br>Agora cabe a você decidir seu destino.";
        desejo.innerHTML = "<option value=lerMapa>Ler Mapa</option><option value=seguirInstintos>Seguir Instintos</option><option value=fugir>Fugir</option>";
      }
      break;

     
    
    //escolha por fuga
    case "F":

      trocarImagem("https://i.gifer.com/fxSu.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Corra fujão!";

      break;
  }
  /*=================================================SEGUNDA FASE===================================================== */
  
  // decide se lerá o mapa ou seguirá a intuição
  switch (resposta) {
    case "lerMapa":
      trocarImagem("http://pa1.narvii.com/6604/4b4b1ab25d3b18aa67b17c7e47f332fa4243cbf6_00.gif");
      pergunta.innerHTML="O fim nunca findará respotas na copa da Baobá...";
      desejo.innerHTML=  "<option value=seguirBaoba>Seguir para a Baoba</option><option value=fugir>Fugir</option>";
    
      break;
      
      case "seguirInstintos":
      trocarImagem(leao.imagem);
      pergunta.innerHTML = "Parece que sua intuição não te levou a um bom destino..." + leao.nome + " à vista!" + "<br>" + leao.nome + " possui " + leao.vida + " pontos de vida! :/ <br>Deseja iniciar um combate?";

      desejo.innerHTML = "<option value=combate>Sim</option><option value=F>Não</option>";
     
      break;
     
  
    //escolha por fuga
    case "F":

      trocarImagem("https://i.gifer.com/fxSu.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Corra fujão!";

      break;
  }

  switch (resposta) {
    case "seguirBaoba":
      trocarImagem("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpca4AQh0Tyhb6CKw8znt66DJZKWNsNJR6bA&usqp=CAU");
      pergunta.innerHTML="Um caminho longo e tortuoso a vista do Baoba é linda! clique em 'Responder' para buscar pistas"
      desejo.innerHTML = "<option value=>prosseguir</option>";
      break;
  
    
       //escolha por fuga
    case "fugir":

      trocarImagem("https://i.gifer.com/fxSu.gif");
      desejo.style.display = "none";
      btn.innerText = "Reiniciar";
      btn.setAttribute('onclick', 'history.go(0)');
      pergunta.innerHTML = "Corra fujão!";

      break;
  }
}
>>>>>>> main
