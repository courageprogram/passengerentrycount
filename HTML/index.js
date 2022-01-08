let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
const dateBtn = document.getElementById("date-btn")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count

}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
   
}
function remove(){
    count -= 1
    countEl.textContent = count
}
function date() {
    dateBtn.textContent = "The Time and Your Location:" + ' ' + Date()
    
}
