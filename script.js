function makeBubble(){
    var cont = document.querySelector("#container");
    var context = "";
    var wid = 0;

    if(window.innerWidth<450){
        for(let i=1;i<=45;i++){
            var rn = Math.floor(Math.random()*10)
            context += `<div class="bubble">${rn}</div>`
        }
        cont.innerHTML = context;
    }
    else{
        for(let i=1;i<=99;i++){
            var rn = Math.floor(Math.random()*10)
            context += `<div class="bubble">${rn}</div>`
        }
        cont.innerHTML = context;
    }

}

var time = 60;
function runTimer(){
    var ti = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else{
            clearInterval(ti);
            var cot = document.querySelector("#container");
            cot.innerHTML = `<h1>Game Over<h1><h1 id="score2nd">Your Score is : ${score}</h1>`;
            cot.style.justifyContent = "center"
            cot.style.flexDirection = "column";
            if(score<=0){
                document.querySelector("#score2nd").style.color = "red";
            }
        }
    },1000)
}

var hitNum = 0;
function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#gethit").textContent = hitNum;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#getscore").textContent = score;
    document.querySelector("#getscore").style.color = "black"
}
function decreaseScore(){
    score = score - 10;
    document.querySelector("#getscore").textContent = score;
    document.querySelector("#getscore").style.color = "red"
}

document.querySelector("#container")
.addEventListener('click',function(dets){
    if(Number(dets.target.textContent) === hitNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else(
        decreaseScore()
    )
})

runTimer();
makeBubble();
getNewHit();