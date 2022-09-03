const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// let resultEl = document.getElementsById("reslone");
let stageEl = document.getElementById("reslone")
let stageEll = document.getElementById("result-el-two")

// let randomNum = [Math.floor(Math.random()*characters.length)+1]
// let renderNum = characters[randomNum]


function generateRandom (){
    let randomNum1 = Math.floor(Math.random()*characters.length)
    let randomNum2 = Math.floor(Math.random()*characters.length)
    let randomNum3 = Math.floor(Math.random()*characters.length)
    let randomNum4 = Math.floor(Math.random()*characters.length)
    let randomNum5 = Math.floor(Math.random()*characters.length)
    let randomNum6 = Math.floor(Math.random()*characters.length)
    let randomNum7 = Math.floor(Math.random()*characters.length)
    let randomNum8 = Math.floor(Math.random()*characters.length)
    let randomNum9 = Math.floor(Math.random()*characters.length)
    let randomNum10 = Math.floor(Math.random()*characters.length)
    let randomNum11 = Math.floor(Math.random()*characters.length)
    let randomNum12 = Math.floor(Math.random()*characters.length)
    let randomNum13 = Math.floor(Math.random()*characters.length)
    let randomNum14 = Math.floor(Math.random()*characters.length)
    let randomNum15 = Math.floor(Math.random()*characters.length)

    let randomNum16 = Math.floor(Math.random()*characters.length)
    let randomNum17 = Math.floor(Math.random()*characters.length)
    let randomNum18 = Math.floor(Math.random()*characters.length)
    let randomNum19 = Math.floor(Math.random()*characters.length)
    let randomNum20 = Math.floor(Math.random()*characters.length)
    let randomNum21 = Math.floor(Math.random()*characters.length)
    let randomNum22 = Math.floor(Math.random()*characters.length)
    let randomNum23 = Math.floor(Math.random()*characters.length)
    let randomNum24 = Math.floor(Math.random()*characters.length)
    let randomNum25 = Math.floor(Math.random()*characters.length)
    let randomNum26 = Math.floor(Math.random()*characters.length)
    let randomNum27 = Math.floor(Math.random()*characters.length)
    let randomNum28 = Math.floor(Math.random()*characters.length)
    let randomNum29 = Math.floor(Math.random()*characters.length)
    let randomNum30 = Math.floor(Math.random()*characters.length)
    // for (let i=0; i<15; i++){
        stageEl.textContent = characters[randomNum1]+characters[randomNum2]+characters[randomNum3]+characters[randomNum4]+characters[randomNum5]+characters[randomNum6]+characters[randomNum7]+characters[randomNum8]+characters[randomNum9]+characters[randomNum10]+characters[randomNum11]+characters[randomNum12]+characters[randomNum13]+characters[randomNum14]+characters[randomNum15]
        stageEll.textContent = characters[randomNum16]+characters[randomNum17]+characters[randomNum18]+characters[randomNum19]+characters[randomNum20]+characters[randomNum21]+characters[randomNum22]+characters[randomNum23]+characters[randomNum24]+characters[randomNum25]+characters[randomNum26]+characters[randomNum27]+characters[randomNum28]+characters[randomNum29]+characters[randomNum30]
        // return renderNum
    // }
    // stageEl.textContent = characters[randomNum]
    // console.log(randomNum)
}

// console.log(divBg)
