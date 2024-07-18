let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turno = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            console.log("box was clicked");
            if (turno) {
                box.innerText = "O";
                turno = false;
            } else {
                box.innerText = "X";
                turno = true;
            }
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    winPatterns.forEach(pattern => {
        if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText && boxes[pattern[0]].innerText!==""){
            alert("Winner is "+boxes[pattern[0]].innerText);
        }
    });
    if(boxes[0].innerText!=="" && boxes[1].innerText!=="" && boxes[2].innerText!=="" && boxes[3].innerText!=="" && boxes[4].innerText!=="" && boxes[5].innerText!=="" && boxes[6].innerText!=="" && boxes[7].innerText!=="" && boxes[8].innerText!==""){
        
    }
}


resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
    });
    turno = true;
});
