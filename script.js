document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.remove('show');
});

// Função para tentar reproduzir o vídeo automaticamente
function tryAutoPlay(video) {
    video.muted = true;
    video.play().then(() => {
        console.log("Vídeo está rodando automaticamente.");
    }).catch(function(error) {
        console.log("Autoplay falhou:", error);
    });
}

// Tenta reproduzir o vídeo assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('hero-video');

    // Tenta reproduzir automaticamente
    tryAutoPlay(video);

    // Se o autoplay for bloqueado, simula a reprodução após o primeiro clique na página
    document.body.addEventListener('click', function() {
        if (video.paused) {
            console.log("Tentando rodar vídeo após clique.");
            video.play();
        }
    });

    // Além disso, tenta reproduzir o vídeo após o primeiro movimento de rolagem
    window.addEventListener('scroll', function() {
        if (video.paused) {
            console.log("Tentando rodar vídeo após rolar a página.");
            video.play();
        }
    });
});