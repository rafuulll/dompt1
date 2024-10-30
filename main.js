function mudartitulo() {
    document.querySelector('.titulo').innerHTML = "Título alterado com sucesso!";
}

function mudarimagem() {
    document.querySelector('.img').src = 'dog.jpeg';
}

function mudarcorp() {
    let x = document.querySelector('.p');
    x.style.color = "LightBlue";
}

var audio = new Audio('Coin mario.wav');

const tocaraudio = document.getElementById("tocaaudio");

tocaraudio.addEventListener('click', audiotocar);

function audiotocar() {
    audio.play();
}


function toggle() {
    buttons.forEach(button => {
        button.classList.toggle("active");
    });
}


document.querySelector('.alterartitulo').onclick = mudartitulo;
document.querySelector('.alterarimagem').onclick = mudarimagem;
document.querySelector('.alterarcorp').onclick = mudarcorp;

const buttons = document.querySelectorAll('#b1, #b2, #b3');

document.querySelector('.alterabutton').addEventListener("click", toggle);
