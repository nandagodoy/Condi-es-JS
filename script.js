function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = now.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 6) {
    //Inverno
    img.src = './imagens/inverno.png';
    document.body.style.background = '#373535';
  } else if (hora >= 6 && hora < 12) {
    //Primavera
    img.src = './imagens/primavera.png';
    document.body.style.background = '#a50153';
  } else if (hora >= 12 && hora < 18) {
    //Verão
    img.src = './imagens/verao.png';
    document.body.style.background = '#32d2d2';
  } else if (hora >= 18 && hora < 24) {
    //Outono
    img.src = './imagens/outono.png';
    document.body.style.background = '#df9a38';
  }
}
