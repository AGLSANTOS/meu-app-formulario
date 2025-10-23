const form = document.getElementById('youtubeForm');
const googleScriptURL = "https://script.google.com/macros/s/AKfycbw4bqvHE2Qqz2c1QQKT72x5gVhc1rs9WA7_CRsnMWkG7NdFsP0ru_g83ydRQN4oni4Y/exec";

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
