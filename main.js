let body = document.querySelector('body')
let oclok = document.createElement('h2')


oclok.style.fontSize = "36px"
oclok.style.width = "250px"
oclok.style.backgroundColor = "aqua"
oclok.style.textAlign = "center"



setInterval(() =>{
    let time = new Date()
    let haur = time.getHours()
    let minut = time.getMinutes()
    let second = time.getSeconds()
    oclok.innerHTML = `${haur}:${minut > 10 ? minut : "0"+minut}:${second > 10 ? second : "0"+second} `
},1000)

body.append(oclok)
