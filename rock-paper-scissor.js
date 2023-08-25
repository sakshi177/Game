let score=JSON.parse(localStorage.getItem('score'))||{wins:0,
    losses:0,
    ties:0
};

updateScoreElement();
/* if(score === null){
score={
     wins:0,
    losses:0,
    ties:0
};

} 
as when we refresh the page the score will lose it stored data so to give it default value as zero we used this method other than this we can use default operator( || ) with score variable
*/ 


/*const score={
    wins:0,
    losses:0,
    ties:0
}

instead of creating a object we store the values directly in the local storage*/ 
let isautoplay=false;
let intervalId;
function autoplay(){
  if(!isautoplay){
     intervalId=setInterval(function(){
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    isautoplay=true;
  }
  else{
   clearInterval(intervalId);
   isautoplay=false;
  }
}

function playGame(playerMove){
    const computerMove=pickComputerMove();
 let result='';
 if(playerMove==='Scissors'){
 if(computerMove==='rock'){
   result='You lose';
 }
 else if(computerMove==='paper'){
   result='You win';
 }
 else if(computerMove==='Scissors'){
   result='Tie';
 }
}
else if(playerMove==='rock'){
    if(computerMove==='rock'){
   result='Tie';
 }
 else if(computerMove==='paper'){
   result='You lose';
 }
 else if(computerMove==='Scissors'){
   result='You win';
 }
}
else if(playerMove==='paper'){
    if(computerMove==='rock'){
   result='You win';
 }
 else if(computerMove==='paper'){
   result='Tie';
 }
 else if(computerMove==='Scissors'){
   result='You lose';
 }

}
if(result==='You win'){
    score.wins+=1;
}
else if(result==='You lose'){
    score.losses+=1;
}
else if(result==='Tie'){
score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.jpg" alt="" class="move-icon"> computer <img src="images/${computerMove}-emoji.jpg" alt="" class="move-icon">`;
 /*alert(`you picked ${playerMove} ,Computer picked ${computerMove}, ${result}
wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`);*/


}

function updateScoreElement(){
  document.querySelector('.js-score')
.innerHTML=`wins:${score.wins}, losses:${score.losses}, ties:${score.ties}`;
}

function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';
if(randomNumber>=0 && randomNumber<1/3){
     computerMove='rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
     computerMove='paper';}
 else if(randomNumber>=2/3 && randomNumber<1){
     computerMove='Scissors';
 }
 return computerMove;
}
 