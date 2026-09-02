// Script de envio direto do formulário para WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá! Meu nome é ${nome}.\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);

    // Número do currículo: (85) 99834-2443 -> 5585998342443
    const telefone = "5585998342443";
    const url = `https://wa.me/${telefone}?text=${textoCodificado}`;

    window.open(url, '_blank');
}
