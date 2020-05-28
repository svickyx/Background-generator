var body = document.getElementById("thebody");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button")


function generateColor(){
        var randomColor1 = Math.floor(Math.random()*16777215).toString(16); 
        var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        var randomSet = "#" + randomColor1 + "," + "#" + randomColor2;
        body.style.background = "linear-gradient" +"(" + "to right" + "," + randomSet;
        h3.textContent = body.style.background;
}

function setRandomColor(){
        body.style.background = "#" + randomColor1;
}


function setGradient(){
        body.style.background = "linear-gradient" +"(" + "to right" + "," + color1.value +"," + color2.value +")";    
        h3.textContent = body.style.background;       
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click",generateColor);





// 錯誤重點：1) 改變背景顏色的同時，h3的text也是同時改變的，所以h3.textContent要跟在setGradient這個function後面.

// p.innerHTML = "(" + color1.value +", " + color2.value + ")";