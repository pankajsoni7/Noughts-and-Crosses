let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turn0 = true;
let winpattern = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let newgame = document.querySelector("#newgame");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}


const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

function fun(){
    if(turn0===true){
        this.innerText="O";
        turn0=false;
    }
    else{
        this.innerText="X";
        turn0=true;        
    }
    this.disabled=true;
    checkwinner();
}
boxes.forEach((box)=>{box.addEventListener("click",fun);});



const checkwinner = () => {
      for(let pattern of winpattern){
          let val1 = boxes[pattern[0]].innerText;
          let val2 = boxes[pattern[1]].innerText;
          let val3 = boxes[pattern[2]].innerText;
          if(val1!="" && val1===val2  &&  val2===val3){
              let winner = "";
              if(val1==="O"){
                winner ="Nought (O)";
              }
              else{
                winner ="Cross (X)";
              }
              console.log("Winner is ",winner);  
              showwinner(winner);
          }
      }
}


const resetgame = () => {
    true0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);





