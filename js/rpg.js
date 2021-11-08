var mago = {
  nome: "Misha",
  vida: 50,
  ataque: 7,
  esquiva: 6,
  defesa: 4,
  esp: "Magia",
  especial: function () {

    return this.ataque * 3;
  }
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
  }
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
  }
}

var vilao = {
  nome: "Eskeleton",
  vida: 30,
  ataque: 22,
  esquiva: 4,
  defesa: 3
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



const pergunta = document.getElementById('pergunta');


pergunta.innerHTML = "Vamos jogar?";

const resposta = document.getElementById("desejo").value;
const  image = document.getElementById("image");



     

//funcao para sortear às ações
function jogaDado() {


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


function responder(resposta){
  
  resposta = document.getElementById("desejo").value;
  
 
     //decide se joga ou não
     switch(resposta){
   
    case "S":
      
    pergunta.innerHTML = "Escolha seu personagem :";
    
    desejo.innerHTML = "<option value=1>Mago</option><option value=2>Ladra</option><option value=3>Guerreiro</option>";
    
    
    break;
    case "N":
      pergunta.innerHTML = "Que pena, deixa para uma próxima.";
      
      break;
  }

     //seleção de personagem
     switch(resposta){
     case "1":
      personagem = mago
      pergunta.innerHTML = "Legal, um mago!"+
      "<br>Você escolheu o " + personagem.nome +" ele possui: "+ personagem.vida+" pontos de vida.<br>Clique no botão 'Responder' para prosseguir ";
      desejo.innerHTML = "<option value=>prosseguir</option>";
      image.src ="https://images.pexels.com/photos/5701253/pexels-photo-5701253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
      break;
    
    case "2":
      personagem = ladra;
      pergunta.innerHTML = "Legal, uma ladra!"+
      "<br>Você escolheu a " + personagem.nome +" ele possui: "+ personagem.vida+" pontos de vida.<br>Clique no botão 'Responder' para prosseguir  ";
      desejo.innerHTML = "<option value=>prosseguir</option>";
      break;
      
    case "3":
      
      personagem = guerreiro
      pergunta.innerHTML = "Legal, um guerreiro!"+"<br>Você escolheu o " + personagem.nome +" ele possui: "+ personagem.vida+" pontos de vida.<br>Clique no botão 'Responder' para prosseguir  ";
        
        desejo.innerHTML = "<option value=>prosseguir</option>";
      break;
      
     //início combate 
    case "":
      
      image.src = "https://images.app.goo.gl/pU4iLCDckEw9nFY8A";
      pergunta.innerHTML = "Oh, não..."+ vilao.nome+ " à vista!"+"<br>"+vilao.nome+ " possui " + vilao.vida+ " pontos de vida! :/ <br>Deseja iniciar um combate?";
      
      desejo.innerHTML = "<option value=combate>Sim</option><option value=F>Não</option>"
      break;
      
   }
      
     //ataque do vilao, inicio do combate
     switch(resposta){
        case "combate":
          pergunta.innerHTML ="Ataque do " + vilao.nome+ " escolha sua ação:"; 
          
          desejo.innerHTML = "<option value=esquivar>Esquivar</option><option value=defesa>Defender</option><option value=fugir>Fugir</option>";
        break;
        //escolha por fuga
        case "F":
          pergunta.innerHTML = "Corra fujão!";
          break;
     }
     
     //esquiva
     switch(resposta){
       case  "esquivar":
       jogaDado();
      
       if(result === "acertou"){
         
         desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";
         
         pergunta.innerHTML = "O dado deu "+result+".<br>Você esquivou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+" ,seus pontos vitais agora são de "+ personagem.vida;
        
        //esquiva perfeita
       }else if(result === "perfeito"){
         
         desejo.innerHTML = "<option value=prosseguir>prosseguir</option>";
         
         pergunta.innerHTML ="O dado deu "+result+".<br>Você esquivou do ataque do "+vilao.nome+ " perfeitamente <br>Seus pontos vitais agora são de "+ personagem.vida;
           
           }else{
             
           desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";
           
           personagem.vida = personagem.vida - vilao.ataque;
           
           pergunta.innerHTML = "O dado deu "+result+".<br>Você não esquivou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"<br>Seus pontos vitais agora são de "+ personagem.vida;
           
           }
           break;
       }
       
       
       
     //bloqueio
     switch(resposta){
       case "defesa":
         jogaDado();
         if(result === "crítico"){
           
         desejo.innerHTML = "<option value=prosseguir>prosseguir</option>";
         
         vilao.ataque  += 10;
         personagem.vida -= vilao.ataque;
         
         pergunta.innerHTML = "O dado deu "+result+".<br>Você não bloqueou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"<br>Seus pontos vitais agora são de "+ personagem.vida;
         
         vilao.ataque == vilao.ataque;
         
         //bloqueio certo
          }else if(result === "acertou"){
            
          desejo.innerHTML = "<option value=prosseguir>prosseguir</option>";
          
            vilao.ataque -=  personagem.defesa;
            personagem.vida -= vilao.ataque;
            
            pergunta.innerHTML= "O dado deu "+result+".<br>Você bloqueou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"<br>Seus pontos vitais agora são de "+ personagem.vida;
            
            //defesa bem sucedida
             }else{
           desejo.innerHTML = "<option value=prosseguir>Prosseguir</option>";
           
           pergunta.innerHTML ="O dado deu "+result+
           ".<br>Você defendeu o ataque do "+vilao.nome+ " perfeitamente,\nseus pontos vitais agora são de "+ personagem.vida;
          }
          break;
        //opção de fugir  
         case "fugir":
         pergunta.innerHTML = "Você perdeu!<br>Corra fujão!";
         break;
      }
      
    //ataque do personagem
     switch(resposta){
       
        case "prosseguir":
         desejo.innerHTML = "<option value=ataque>Atacar</option><option value=especial>Especial</option><option value=fugir>Fugir</option>";
         
         pergunta.innerHTML = "Ataque do " + personagem.nome+ " escolha sua ação:"; 
         break;
         case "ataque":
           jogaDado();
          if(result == "acertou"){
        
         vilao.vida -= personagem.ataque;
         
         desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";
         
          pergunta.innerHTML = "Você atacou o "+vilao.nome+ " e causou dano de "+ personagem.ataque+" os pontos vitais dele agora são de "+ vilao.vida +".<br>Clique 'Prosseguir' para continuar";
          
          
       }else if(result == "crítico"){
         
         desejo.innerHTML = "<option value=segueLuta>private</option>";
         
         pergunta.innerHTML = "Ataque mal sucedido.<br>Clique 'Prosseguir' para continuar.";
         
        //ataque perfeito gera ataque especial
       }else{
         desejo.innerHTML = "<option value=segueLuta>private</option>";

         vilao.vida = vilao.vida - personagem.especial();
         
         pergunta.innerHTML= "Ataque perfeito!<br>Você atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+".<br>Seus pontos vitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+".<br> Clique 'Prosseguir' para continuar";
       }
       break;
        case "especial":
          jogaDado();
          if(result == "acertou"){
            desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";

            personagem.vida = personagem.vida-5;
            vilao.vida = vilao.vida - personagem.especial();
           
            pergunta.innerHTML = "O ataque especial esgota força vital do(a) "+personagem.nome+" em 5 pontos!<br>Você acertou o "+personagem.esp+" seus pontos vitais agora são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida;
            
          }else if(result== "crítico"){
            desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";
           //erro de especial 
            personagem.vida -= 5;
            perguntar.innerHTML= "Você errou o "+personagem.esp+" seus pontos vitais agora são de "+personagem.vida;
            
          }else{
            
            desejo.innerHTML = "<option value=segueLuta>Prosseguir</option>";
            //especial perfeito personagem não perde 5 pontos de vida

            vilao.vida -= personagem.especial();
            
            pergunta.innerHTML= "Ataque perfeito!<br>Você atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+"<br>Seus pontos vitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+"<br>Clique 'Responder' para continuar";
          }
          break;
          //opção de fuga 
          case "fugir":
            pergunta.innerHTML = "Você perdeu!";
            break;
       
      }
      
      //continua o loop do jogo 
      
      switch(resposta){
        case "segueLuta":
       
          
          pergunta.innerHTML ="Ataque do " + vilao.nome+ " escolha sua ação:"; 
          
          desejo.innerHTML = "<option value=esquivar>Esquivar</option><option value=defesa>Defender</option><option value=fugir>Fugir</option>";
          
          if(personagem.vida <=0 ){
         pergunta.innerHTML = "Fim de jogo ! Você foi derrotado pelo "+vilao.nome;
          
          
       }else if(vilao.vida <=0){
         pergunta.innerHTML= "Parabéns !<br>"+personagem.nome+" venceu o combate!"
       }
          
         break;
        
      }
       
      
     }
   


