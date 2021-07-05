const makeMasu = () => { //アロー関数
    const masu = document.createElement("div");
    masu.textContent = Math.floor(Math.random()*75)
    masu.addEventListener("click",(evt)=>{
        evt.target.textContent = "◯";
    })
    document.querySelector(".bingocard").appendChild(masu)
}

for (let i = 0; i < 25; i++) {
    makeMasu();
} 