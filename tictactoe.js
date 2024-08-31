let btn=document.querySelectorAll(".box");
let restbtn=document.querySelector(".btmn");
let newgamebuton=document.querySelector(".startbutton");
let messg=document.querySelector(".message");
let turnO=true;

const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
   
       
    });

    
});
const enablebutton=()=>{
    for(let box of btn){
        box.innerHTML="";
        box.disabled=false;
    }
    turnO = true;
    messg.innerHTML = "";
    messg.classList.add("hide");
}

const disablebutton=()=>{
    for(let box of btn){
        box.disabled=true;
    
    }


}
const showwinner = (winner) => {

    if(winner){
        messg.innerHTML =`Congratulations, the winner is ${winner}!`;
}
    else{
        messg.innerHTML=" The game is draw";
    }
    
    messg.classList.remove("hide");
    disablebutton();
}
const checkwinner=()=>{
 for( let pattern of winningpatterns){
   // console.log(pattern[0],pattern[1],pattern[2]);
   // console.log(btn[pattern[0]].innerHTML,btn[pattern[1]].innerHTML,btn[pattern[2]].innerHTML);
   let pos1val=btn[pattern[0]].innerHTML;
   let pos2val=btn[pattern[1]].innerHTML;
   let pos3val=btn[pattern[2]].innerHTML;
   if(pos1val!="" &&pos2val!="" &&pos3val!=""){
    if(pos1val===pos2val&&pos2val===pos3val){
        console.log("winner",pos1val);
        showwinner(pos1val);
        return;
    }
   }
   
 }
 let isDraw = Array.from(btn).every(box => box.innerHTML !== "");
if (isDraw) {
    showwinner(null);
}
};

restbtn.addEventListener("click",enablebutton);
newgamebuton.addEventListener("click",enablebutton);
