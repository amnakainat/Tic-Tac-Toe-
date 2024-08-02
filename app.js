let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new-btn");
let mesg =document.querySelector(".msg");
let span = document.querySelector(".msgme");
let daba = document.querySelector(".daba");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];
Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
             box.innerText = "O";
             turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    span.classList.add("hide");
    daba.classList.add("hide");
    

}

const enableBoxes = () =>{
    for(let box of Boxes){
        box.disabled = false;
        box.innerText = "";
    }

 }
  


 const showWinner = (Winner) =>{
    span.innerText =` Conratulations, Winner is  ${Winner}`;
    span.classList.remove("hide");
    daba.classList.remove("hide");
    disabledBoxes();

 }
 const disabledBoxes = () =>{
    for(let box of Boxes){
        box.disabled = true;
    }

 }



const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = Boxes[pattern[0]].innerText;
        let pos2val =Boxes[pattern[1]].innerText;
        let pos3val = Boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                showWinner(pos1val);
            }
          
        }
         }
         }
        newBtn.addEventListener("click", resetGame);
         resetBtn.addEventListener("click", resetGame);