let video = document.getElementById("video_open")

window.addEventListener('scroll', function() {
    let value1 = 1 + window.scrollY/-600;
    video.style.opacity = value1;
})

let progress = document.getElementById('scrollPath')
let totalHeigth = document.body.scrollHeight - window.innerHeight

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeigth) * 100;
    progress.style.height = progressHeight + "%"
}

// Seleciona todos os elementos de rádio com o nome "slider"
let radioButtons = document.querySelectorAll('input[type="radio"][name="slider"]');

// Adiciona um ouvinte de evento de mudança a cada botão de rádio
radioButtons.forEach(function(button, index) {
    button.addEventListener('change', function() {
        // Itera sobre os botões de rádio para encontrar qual está marcado como selecionado
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                // Seleciona o elemento de informação correspondente ao botão de rádio atual
                let info = document.querySelector('.info' + (i + 1));
                
                // Exibe o elemento de informação correspondente e oculta os outros
                for (let j = 1; j <= radioButtons.length; j++) {
                    let currentInfo = document.querySelector('.info' + j);
                    currentInfo.style.display = (j === (i + 1)) ? 'inline' : 'none';
                }
                
                // Se precisar de um log
                console.log("O item " + (i + 1) + " está ativo.");
                
                // Sai do loop, pois encontramos o botão de rádio selecionado
                break;
            }
        }
    });
});
