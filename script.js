
/*
  Desenvolvedor: Adriano Gomes Lopes dos Santos
  Email: adriano.glopes@yahoo.com.br
  Copyright (c) 2025
*/

const form = document.getElementById('youtubeForm');

const googleScriptURL = "https://script.google.com/macros/s/AKfycby_xcZfpWo_dbnsDXt9rTki1V-DEpj8Hy79Yz-UgCYcw0Dfrpgv_lpDdRDP7OZ7Z8FI/exec";

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const link = document.getElementById('link').value.trim();
  const dataHora = new Date().toLocaleString('pt-PT');

  fetch(googleScriptURL, {
    method: 'POST',
    body: JSON.stringify({ nome, link, dataHora }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Formulário enviado com sucesso!");
    form.reset();
  })
  .catch(err => alert("❌ Erro ao enviar: " + err));
});

new QRCode(document.getElementById("qrcode"), {
  text: window.location.href,
  width: 128,
  height: 128
});


