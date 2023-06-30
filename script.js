let but = document.getElementById("but");
let text1 = document.getElementById("text");
let inp = document.getElementById("inp");
let out = document.getElementById("out");

const i = []  

function f1() {
    let a = text1.value
    let rez = a.replaceAll(inp.value, '"Кот Аркадий"')
    let coins = rez.indexOf('"Кот Аркадий"'); //поиск замен
    coins = 0
    while (coins != -1) {
        coins = rez.indexOf('"Кот Аркадий"', coins + 1);
        console.log(coins);
        i.push(coins);
    }
    out.innerHTML = rez + '<br>' + 'Колличество замен: ' + i.length;
    
}
but.onclick = f1



