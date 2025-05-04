const s=document.getElementById("scissor")
const p=document.getElementById("paper")
const r=document.getElementById("rock")
const parent=document.querySelector(".parent")
const parent1=document.querySelector(".parent1")
const result=document.querySelector("#result")

// for stat

const sWin=document.getElementById("sWin")
const sLoose=document.getElementById("sLoose")
var sTie=document.getElementById("sTie")

let draw=0
let win=0
let loose=0
// let a=0;
 s.value=1  
 p.value=2
 r.value=3


s.addEventListener("click", function() {hi(s)} )
p.addEventListener("click",function(){hi(p)})
r.addEventListener("click",function(){hi(r)})
  



function hi(choice){
    console.log("You clicked "+ choice.id)
    parent.style.visibility="hidden"
    parent1.style.visibility="visible"
    let comp=Math.floor(Math.random()*3)+1;
document.querySelector(".player img").src=choice.id +" (1).png"
if (comp==1){
document.querySelector(".computer img").src="Scissor (1).png"
}
else if(comp==2){
document.querySelector(".computer img").src="Paper (1).png"
}
else{
document.querySelector(".computer img").src="Rock (1).png"

}
// if (
//     (comp==1 && choice.value==1 )|| 
// (comp==2 && choice.value==2)|| 
// (comp==3 && choice.value==3 )
// ){
if (comp==choice.value){
result.innerHTML="It's a tie🤝"
draw=draw+1;
sTie.innerHTML="Tie="+draw
}



// else if(comp==1 && choice.value==2){
// result.innerHTML="You loose! Computer Won"
// }
// else if(comp==1 && choice.value==3){
// result.innerHTML="You won! Computer Lost"
// }
// else if(comp==2 && choice.value==1){
// result.innerHTML="You won! Computer Lost"
// }
else if((comp==1 && choice.value==3)||
        (comp==3 && choice.value==2)||
        (comp==2 && choice.value==1)){
result.innerHTML="You Win!! Computer loose🎉"
win=win+1;
sWin.innerHTML="Win="+win
        }
        else {
result.innerHTML="You loose!! Computer Win😢 "
loose=loose+1;
sLoose.innerHTML="Loose="+loose
        }


}
// To refresh the code
parent1.addEventListener("click", function() {
    parent.style.visibility = "visible";
    parent1.style.visibility = "hidden";
    
});

// background: rgba(255, 159, 67, 0.95);
// font-family: 'Comic Neue', cursive;
