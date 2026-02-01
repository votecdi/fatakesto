let score = 0;
let best = localStorage.getItem("best") || 0;
let playing = false;

const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const gameEl = document.getElementById("game");

bestEl.innerText = best;

function startGame(){
  score = 0;
  playing = true;
  update();
}

function pauseGame(){
  playing = false;
}

function update(){
  scoreEl.innerText = score;
  if(score > best){
    best = score;
    localStorage.setItem("best", best);
    bestEl.innerText = best;
  }
}

gameEl.addEventListener("pointerdown", ()=>{
  if(!playing) return;

  score++;
  update();
});

function shareGame(){
  const text = `I scored ${score}! Try to beat me`;
  const url = location.href;

  if(navigator.share){
    navigator.share({text,url});
  }else{
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text+" "+url)}`
    );
  }
}
