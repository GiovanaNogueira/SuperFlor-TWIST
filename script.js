var canvas= document.getElementById('canva');
var ctx = canvas.getContext('2d');
var eixoYboneca = 100
var xBoneca =10;
var largBoneca = 50;
var alturaBoneca=50;
var somGameOver = new Audio('audios/mixkit-arcade-retro-game-over-213.wav');
var somScore = new Audio('audios/score.mp3')

function background(){
  var fundo=document.getElementById('fundo');
  ctx.drawImage(fundo,0,0,canvas.width, canvas.height); 
}

function desenhaBoneca(){
  var boneca=document.getElementById('boneca');
  ctx.drawImage(boneca,xBoneca,eixoYboneca,largBoneca,alturaBoneca); 
}

function desenhaBola(){
  var bola=document.getElementById('bola')
  ctx.drawImage(bola,xBola,yBola,25,20)
  if (xBola+24==0 ){
    xBola=canvas.width
    yBola=Math.floor(20+(canvas.height-2*20)*Math.random())
  }
}

function desenhaFlor(){
  var flor=document.getElementById('flor')
  ctx.drawImage(flor,xFlor,yFlor,25,20)
  if (xFlor+24==0 ){
    xFlor=canvas.width
    yFlor=Math.floor(20+(canvas.height-2*20)*Math.random())
  }
}

function movimentaBola(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background();
  desenhaBoneca();
  desenhaBola()
  desenhaFlor()
  pontuacao()
  if (xBola <= xBoneca+largBoneca && yBola>= eixoYboneca && yBola + 20 <= eixoYboneca + alturaBoneca ){
    //somGameOver.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background();
    pontuacao();
    ctx.font='10px Arial'
    ctx.fillText('Game Over',canvas.width/2-30,canvas.height/2)
    if (contaPontos>pontuaçãoMax.innerHTML){
      pontuaçãoMax.innerHTML=contaPontos;
      console.log(pontuaçãoMax)
    }
    contaPontos=0
  }
  else if (xFlor <= xBoneca+largBoneca && yFlor>= eixoYboneca && yFlor + 20 <= eixoYboneca + alturaBoneca ){
    //somScore.play();
    xFlor=canvas.width
    yFlor=Math.floor(Math.random()* (canvas.height))
    contaPontos+=1
  }
  xBola+=dxBola
  xFlor+=dxFlor
}
var yBola= Math.floor(20+(canvas.height-2*20)*Math.random())
var xBola= canvas.width
var dxBola=-4
var dxFlor=-3
var xFlor = canvas.width
var yFlor = Math.floor(20+(canvas.height-2*20)*Math.random())


var timer=window.setInterval(movimentaBola,50);



var downPressed=false;
var upPressed=false;

function taApertado(event){
  if(event.keyCode==115){
    downPressed=true;
    if(eixoYboneca==canvas.height-40){
      eixoYboneca=canvas.height-40;
    }
    else if(eixoYboneca<canvas.height){
      eixoYboneca+=10;
    }
  }
    
  else if(event.keyCode==119){
    upPressed = true;
    if(eixoYboneca==0){
      eixoYboneca=0;
    }
    else if(eixoYboneca>0){
      eixoYboneca-=10;   
    }
  }
}

function naoApertado(event){
  if(event.keyCode==115)
    downPressed=false;
  else if(event.keyCode==119)
    upPressed = false;
}

document.addEventListener("keypress", taApertado, false);
document.addEventListener('keyup', naoApertado);


function moveBoneca(){

  if(eixoYboneca==canvas.height){
    eixoYboneca==canvas.height;
  }
  else if(eixoYboneca<canvas.height){
    eixoYboneca-=10;
  }
      
  if(eixoYboneca==0){
    eixoYboneca==0;
  }
  else if(eixoYboneca>0){
    eixoYboneca+=10;
        
  }

}
function pontuacao(){
  ctx.font='10px Arial'
  ctx.fillText('Pontos:'+contaPontos,10,15)
}

var contaPontos=0
var pontuaçãoMax=document.getElementById("pontos")
pontuaçãoMax.innerHTML=0






