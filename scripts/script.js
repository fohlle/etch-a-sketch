

const container = document.querySelector("#container");

function grid(num){
for(let i = 0; i < num; i++){
    const div = document.createElement("div");
    div.setAttribute('id', "grid");
    div.addEventListener("mouseover", () =>{
        div.setAttribute("style", "background:black");
    });
    container.appendChild(div);
}
}

grid(256);