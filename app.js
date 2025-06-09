let pl = document.querySelector(".pl");
let line=document.querySelector(".finishline");
let Clock_display = document.querySelector(".min");
let light=document.querySelector(".light");
let resetbtn=document.querySelector(".restart")
let msg=document.querySelector("#msg");
let over_display= document.querySelector(".game_finished")
let x=30;
let y=x;
let rand =0;
let s=0;
let m=0;
let isRed=true;
let gameOver=false;

 alert("Use Right Arrow Button");
 clock();
 lightChanger();
 pl.style.left= x +'px';
document.addEventListener("keyup", function(evt){
    if(evt.keyCode ===39){
        move();
    }
    if(evt.keyCode ===32){
        x=1350;
        alert("Cheater Spotted");
        game_Over();
    }
});

resetbtn.addEventListener("click",restart);


function move(){
        pl.style.position="absolute";
        pl.style.left= x +'px';
        x+=10;

        if(x>1340)
        {
            gameOver=true;
            game_Over();
        }
        if(isRed ===true && x!=y)
        {
            game_Over();
        }
        
        
}

function lightChanger()
{
    if(gameOver===false){
    rand= Math.floor(Math.random()*5);
    if(rand<2){rand=2};
    
    if(isRed===false){
    isRed=true;
    console.log("red");
    console.log(x,y);
    light.style.backgroundColor="red";
    }
    else if(isRed===true){
    isRed=false;
    light.style.backgroundColor="green";
    y=x;
    console.log("green");
    console.log(x,y);
    }
    setTimeout("lightChanger()", rand*1000);
    }
}

function clock(){

    if(m>=2)
    {
        game_Over();
    }

    if(gameOver === false)
    {
        s++;
        setTimeout("clock()",1000);
        if(s == 60)
        {
            m++;
            s=0;
        }

        if(s <10){
        Clock_display.innerText=`0${m}:0${s}`;
        }
        if(s >=10){
        Clock_display.innerText=`0${m}:${s}`;
        }
    }
}

function game_Over(){
    restartDisplay();
    gameOver=true;
    over_display.classList.remove("hide");
    pl.classList.add("hide");
    line.classList.add("hide");
}


function restartDisplay(){
    if(x>1340 && m>1)
    {
        msg.innerText="You have won the game!!!"
    }
    else if(x=1350)
        {
            msg.innerText="You have won the game!!!"
        }
    else{
        msg.innerText="You lost suckerrrr!!!"
    }
}

function restart(){
    gameOver=false;
    s=0;
    m=0;
    over_display.classList.add("hide");
    pl.classList.remove("hide");
    line.classList.remove("hide");
    lightChanger();
    clock();
    x=30;
    pl.style.left= x +'px';


}
 


