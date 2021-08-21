// function showAnswer(){
//   document.querrySelector(".answer").style.visibility='visible';
// }

const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");
const question = document.querySelectorAll(".question");

arrow.addEventListener("click",showAnswer);
question.addEventListener("click",showAnswer);
answer.addEventListener("click",closeAnswer);

function showAnswer(){
  answer.style.display="block";
};

function closeAnswer(){
  answer.style.display="none";
};
