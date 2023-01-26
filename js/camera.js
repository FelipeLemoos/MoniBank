const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector('[data-enviar]');

let imagemURL = "";

//inicializando camera
botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio:false});
    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";
    video.srcObject = iniciarVideo;
})

//capturando imagem
botaoTirarFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video,0,0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

//enviando imagem e finalizando cadastro
botaoEnviarFoto.addEventListener("click", () => {
    const receberDados = localStorage.getItem("cadastroMoniBank");
    const converteRetorno = JSON.parse(receberDados);
    converteRetorno.imagem = imagemURL;
    localStorage.setItem("cadastroMoniBank" , JSON.stringify(converteRetorno));
    window.location.href = "./abrir-conta-form-3.html";
})