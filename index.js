
const count = document.getElementById("generator");
const num = document.getElementById("number");

let numberGen;
count.onclick = function(){
    const max = Number(document.getElementById("maximum").value);
const min = Number(document.getElementById("minimum").value);
    numberGen = Math.floor(Math.random() * (max - min)) + min;
    num.textContent = numberGen;
}


