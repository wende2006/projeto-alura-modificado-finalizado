const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-18T00:00:00");
const tempoObjetivo2 = new Date("2027-08-05T00:00:00");
const tempoObjetivo3 = new Date("2040-05-30T00:00:00");
const tempoObjetivo4 = new Date("2025-08-22T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let meses = Math.floor(dias / 30); 
    let anos = Math.floor(meses / 12);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    dias %= 30; 
    meses %= 12; 

    if (tempoFinal > 0) {
        return [anos, meses, dias, horas, minutos, segundos];
    } else {
        return [0,0,0,0,0,0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const [anos, meses, dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById("anos" + i).textContent = anos;
        document.getElementById("meses" + i).textContent = meses;
        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
