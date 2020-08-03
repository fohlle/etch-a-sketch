

const container = document.querySelector("#container");

function grid(row, cell){
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-col', cell);

for(let i = 0; i < row * cell; i++){
    const div = document.createElement("div");
    div.setAttribute('id', "grid");
    div.addEventListener("mouseover", () =>{
        div.setAttribute("style", randColor());
    });
    container.appendChild(div);
}
}
function removeDiv(){
    while(container.firstChild){
    container.removeChild(container.firstChild);
    }
}

function randColor(){
    const rand = Math.floor((Math.random() * 255) + 1);
    const rand2 = Math.floor((Math.random() * 255) + 1);
    const rand3 = Math.floor((Math.random() * 255) + 1);
    return `background-color:rgb(${rand}, ${rand2},${rand3})`;
}


function newGrid(){
    let gridPrompt = prompt("how many grids do you want?");
    grid(+gridPrompt,+gridPrompt);
}

const btn = document.querySelector("#clearGridBtn");
btn.addEventListener("click", () => {
    removeDiv();
    newGrid();
});

grid(16, 16);