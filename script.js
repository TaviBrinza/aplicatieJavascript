let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");
let count = 0;

function increment(){
    count  += 1;
    countEl.textContent = cout;
}

function save(){
     countStr = cout + "-";
    saveEl.textContent += countStr;
    countEl.textContent = 0 ;
    cout = 0 ;
}
