
var score = document.getElementById('score')
var scoreadd = 0
var black_box = document.getElementById('black_box');
function createbox() {
    var box = document.createElement('img')
    box.style.bottom = Math.random() * 100 + 'vh'
    box.setAttribute('src', './78nE.gif')
    box.classList.add('box')
    black_box.appendChild(box)


    box.addEventListener('click' , function () {
scoreadd++
        score.innerHTML= scoreadd
        box.setAttribute('src','VZvx.gif') 
        // box.style.display='none'
    }

)}
var playagain = document.getElementById('playagain')
playagain.addEventListener('click', function(){
location.reload()
    var score_div = document.getElementById('score_div');
score_div.style.display='none'
})

var Start = document.getElementById('start')
Start.addEventListener('click', function(){
e =  setInterval(createbox, 800) 
d = setInterval(timer,1000)
Start.style.display='none'
})
var a = 0;
function add(){
    box.style.bottom= a + 'px'
    a++
}
sec = 59
min =  01
function timer(){
    var minute = document.getElementById('min');
    var second = document.getElementById('sec')
    
    minute.innerText = min
    second.innerText= sec
    console.log(sec,min)
    sec--
    if(sec==-1){
        sec=59
        min = 00
    }   
     if(sec<10){
        sec = '0' + sec
    }
     if(sec== 0 && min == 0){
        clearInterval(d)
        clearInterval(e)
        alert('Game Over')
        // var game = document.getElementById('game')
        // game.style.display='none'

        var score_div = document.getElementById('score_div');
        score_div.style.display='block'
        var result = document.getElementById('result');
        result.innerText = scoreadd
        
 } 
}