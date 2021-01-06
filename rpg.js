var mago = {
  nome: "Misha",
  vida:50,
  ataque:7,
  esquiva:60,
  defesa: 40,
  esp : "Magia",
  especial : function(){
    
     return this.ataque*3;
    }
}

var ladra = {
  nome: "Aysha",
  vida : 60,
  ataque: 10,
  esquiva: 80,
  defesa: 60,
  esp : "facada",
  especial: function(){
    
    
    return this.ataque*2;
  }
}
  
  var guerreiro = {
    nome:"Thron",
    vida: 70,
    ataque: 15,
    esquiva: 70,
    defesa: 70,
    esp : "espadada",
    especial: function(){
      
      return this.ataque*1.5;
    }
  }
  
  var vilao = {
    nome : "Eskeleton",
    vida :30,
    ataque :22,
    esquiva :40,
    defesa :30
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
        
        
        
        prompt("Opção inválida! \nEscolha uma opção válida");
        
        escolha = "";
        
      }
  }while(escolha == "");
      
      //função principal de combate
      function combate(vilao, personagem) {
        
       while(personagem.vida >=0 || vilao.vida >=0){
       //ataque do vilão
       var acao = prompt("Ataque do " + vilao.nome+ " escolha sua ação. 1-esquiva/2- defesa/3- fugir"); 
       
        if(acao == "1"){
          vilao.ataque = 2;
          personagem.vida = personagem.vida - vilao.ataque;
          prompt("Você esquivou do ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\n seus pontos vitais agora são de "+ personagem.vida);
          
        }else if(acao == "2"){
          
          vilao.ataque = 10;
          personagem.vida = personagem.vida - vilao.ataque;
          prompt("Você bloqueou o ataque do "+vilao.nome+ " de dano "+ vilao.ataque+"\n Seus pontos vitais agora são de "+ personagem.vida+"\n Clique 'ok' para continuar");
          }else if(acao == "3"){
            
            prompt("Corra fujão! ");
            console.log("Você perdeu!");
            break;
            
          }else{
          
          prompt("Opção inválida!");
          
        }
        
        
        //ataque do personagem
        var reacao = prompt("Ataque do " + personagem.nome+ " escolha sua ação. 1-ataque/2-especial 3-fugir"); 
        
        if(reacao == '1'){
          vilao.vida = vilao.vida - personagem.ataque;
          prompt("Você atacou o "+vilao.nome+ " e causou dano de "+ personagem.ataque+"\n os pontos vitais dele agora são de "+ vilao.vida+" \n Clique 'ok' para continuar");
          
        }else if(reacao == '2'){
          prompt("O ataque especial esgota força vital do(a) "+personagem.nome+" em 5 pontos!\n Clique em 'ok' para prosseguir");
          personagem.vida = personagem.vida -5;
          vilao.vida = vilao.vida - personagem.especial();
          
          prompt("Você atacou o "+vilao.nome+ " com "+personagem.esp+" e causou dano de "+ personagem.especial()+"\n Seu pontovitais são de "+personagem.vida+" e os pontos vitais dele agora são de "+ vilao.vida+" \n Clique 'ok' para continuar");
        }
          
          if(vilao.vida <= 0){
            
            console.log("Parabéns, você derrotou o inimigo!");
            break;
            
            }else if(personagem.vida <= 0){
              
              console.log("Você perdeu!");
              break;
              
            }
            
          }
       }
      
      
     
   
      
      prompt("Ok, você escolheu o " + personagem.nome +" ele possui:\n"+ personagem.vida+" pontos de vida \n Clique em 'ok' para prosseguir.");
      
      var desafio = prompt("Oh, não..."+ vilao.nome+ " à vista!\n"+ vilao.nome+ " possui " + vilao.vida+ " pontos de vida! :/ \n"+ "Deseja iniciar um combate ? S = sim , N = não ");
      
      if(desafio == "S"){
        
        combate(vilao, personagem);
        
      }else if(desafio == "N"){
        
        prompt("Corra fujão!");
        console.log("Você perdeu!")
        
      }else{
        prompt("Opção inválida!\n Digite uma opção válida !");
      }
      
      
    
 