var mago = {
  nome: "Misha",
  vida:50,
  ataque:7,
  esquiva:6,
  defesa: 4,
  esp : "Magia",
  especial : function(){
    
     return this.ataque*3;
    }
}

var ladra = {
  nome: "Aysha",
  vida : 60,
  ataque: 10,
  esquiva: 8,
  defesa: 6,
  esp : "facada",
  especial: function(){
    
    
    return this.ataque*2;
  }
}
  
  var guerreiro = {
    nome:"Thron",
    vida: 70,
    ataque: 15,
    esquiva: 7,
    defesa: 7,
    esp : "espadada",
    especial: function(){
      
      return this.ataque*1.5;
    }
  }
  
  var vilao = {
    nome : "Eskeleton",
    vida :30,
    ataque :22,
    esquiva :4,
    defesa :3
    }
  
  var dado = {
    nome : "dado",
    sorteio : function(){
      result = ""
      prompt("A sorte está lançada!\nClique 'Ok' para jogar o dado.");
      
       num = Math.floor(Math.random() * 20+1);
    
    if(num >= 1 && num <= 5){
      
       result = "crítico";
       
       }else if(num > 5 && num <= 15){
         
       result = "acertou";
       
       }else{
         
        result = "perfeito"; 

       }
      
       prompt("O d20 deu "+num+"\nA ação foi "+result+"\n Clique 'Ok' para continuar");
      return result;
    } 
  } 
  
        
      
  //função principal de combate
 function combate(vilao, personagem) {
       
       
       do {
       //ataque do vilão
      do{
       
       var acao = prompt("Ataque do " + vilao.nome+ " escolha sua ação. 1-esquiva/2- defesa/3- fugir"); 
       
        if(acao == "1"){
          
       dado.sorteio();
       //esquiva certa
       if(result == "acertou"){
         
         prompt("Você esquivou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\n seus pontos vitais agora são de "+ personagem.vida);
         
       //esquiva perfeita
       }else if(result == "perfeito"){
         
         prompt("Você esquivou do ataque do "+vilao.nome+ " perfeitamente \nseus pontos vitais agora são de "+ personagem.vida);

         
         
       }else{
         
        
         personagem.vida = personagem.vida - vilao.ataque;
         prompt("Você não esquivou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\n seus pontos vitais agora são de "+ personagem.vida);
         
       }
        //bloquear  
        }else if(acao == "2"){
          
        dado.sorteio();
        //erro de bloqueio
       if(result == "crítico"){
         vilao.ataque  += 10;
         personagem.vida -= vilao.ataque;
         
         prompt("Você não bloqueou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\n seus pontos vitais agora são de "+ personagem.vida);
         vilao.ataque == vilao.ataque;
         //bloqueio certo
          }else if(result == "acertou"){
          
            vilao.ataque -=  personagem.defesa;
            personagem.vida -= vilao.ataque;
            
            prompt("Você bloqueou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\nseus pontos vitais agora são de "+ personagem.vida);
            
          }else{
         
         prompt("Você defendeu o ataque do "+vilao.nome+ " perfeitamente,\nseus pontos vitais agora são de "+ personagem.vida);
         
       }
          
          }else if(acao == "3"){
            
            prompt("Corra fujão! ");
            break;
            
            
            
            
          }else{
          
          
          prompt("Opção inválida!\nEscolha uma opção válida\nClique 'ok' para continuar!");
          acao = "";
          }
        }while(acao =="");
        
       do{ 
        //ataque do personagem
        var reacao = prompt("Ataque do " + personagem.nome+ " escolha sua ação. 1-ataque/2-especial 3-fugir"); 
        
        if(reacao == '1'){
          dado.sorteio();
       //atque certo
       if(result == "acertou"){
        
         vilao.vida -= personagem.ataque;
         
          prompt("Você atacou o "+vilao.nome+ " e causou dano de "+ personagem.ataque+"\n os pontos vitais dele agora são de "+ vilao.vida +" \n Clique 'ok' para continuar");
       }else if(result == "crítico"){
         
         
         prompt("Ataque mal sucedido\nClique 'Ok' para prosseguir.");
       }else{
         
         vilao.vida = vilao.vida - personagem.especial();
         
         prompt("Ataque perfeito!\nVocê atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+"\nSeus pontos vitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+" \n Clique 'ok' para continuar");
       }
          
        }else if(reacao == '2'){
          dado.sorteio();
          if(result == "acertou"){
            personagem.vida = personagem.vida-5;
            vilao.vida = vilao.vida - personagem.especial();
            
          prompt("O ataque especial esgota força vital do(a) "+personagem.nome+" em 5 pontos!\nClique em 'ok' para prosseguir");
          prompt("Você atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+"\nSeus pontos vitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+" \n Clique 'ok' para continuar");
          
          
          }else if(result== "crítico"){
           //erro de especial 
            personagem.vida = personagem.vida -5;
            prompt("Você errou o "+personagem.esp+" seus pontos vitais agora são de "+personagem.vida);
          }else{
            //especial perfeito
            prompt("Ataque perfeito!\nVocê atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+"\nSeus pontos vitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+" \n Clique 'ok' para continuar");
          }
          
        }else{
          prompt("Opção inválida!\nEscolha uma opção válida\nClique 'ok' para continuar!");
          reacao = "";
        }
       }while(reacao == "");
          
          if(vilao.vida <= 0){
            
            console.log("Parabéns, você derrotou o inimigo!");
            break;
            
            }else if(personagem.vida <= 0){
              
              console.log("Você perdeu!");
              break;
              
            }
            
          }while(personagem.vida >0 && vilao.vida >0);
      
       }
      
  //inicio do jogo
  do{
    
    var escolha = prompt("Escolha seu personagem : 1 - mago, 2- ladra, 3- guerreiro");
  
      if(escolha == "1"){
        
        personagem = mago;
        
      }else if(escolha == "2"){
        
        personagem = ladra;
        
      }else if(escolha == "3"){
        
        personagem = guerreiro;
        
      }else{
        escolha = "";
        
        prompt("Opção inválida! \nEscolha uma opção válida\nClique 'ok' para continuar!");
      }
  }while(escolha == "");
     
   
   //escolhe    o personagem
    do{
      prompt("Ok, você escolheu o " + personagem.nome +" ele possui:\n"+ personagem.vida+" pontos de vida \n Clique em 'ok' para prosseguir.");
      
      var desafio = prompt("Oh, não..."+ vilao.nome+ " à vista!\n"+ vilao.nome+ " possui " + vilao.vida+ " pontos de vida! :/ \n"+ "Deseja iniciar um combate ? S = sim , N = não ");
      
      if(desafio == "S"){
        
        combate(vilao, personagem);
        
      }else if(desafio == "N"){
        
        prompt("Corra fujão!");
        console.log("Você perdeu!")
        
      }else{
        prompt("Opção inválida!\n Digite uma opção válida !\nClique 'Ok' para prosseguir.");
        desafio = "";
      }
    }while(desafio =="");
