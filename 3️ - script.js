/*
  Desenvolvedor: Seu Nome Completo
  Email: seu.email@exemplo.com
  Copyright (c) 2025
*/

const form = document.getElementById('youtubeForm');
const googleScriptURL = "https://script.google.com/macros/s/AKfycbzpsyACQv8cbrRqdVfzCjlJuYg9G9gVcoAFkvVJGOj1lyUS-m1HbUSb44wJYT1UXdbEwg/execPPS_SCRIPT"; // Substitua depois

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

// Gerar QR Code automaticamente com o link do app
new QRCode(document.getElementById("qrcode"), {
  text: window.location.href,
  width: 128,
  height: 128
});
