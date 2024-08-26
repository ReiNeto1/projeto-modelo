// Script para o formulário de cadastro
document.getElementById('hotelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const quarto = document.getElementById('quarto').value;

    // Exibe mensagem de sucesso
    document.getElementById('mensagem').textContent = `Cadastro realizado com sucesso! Nome: ${nome}, E-mail: ${email}, Quarto: ${quarto}.`;
});

// Script para o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Simulação de login
    const emailLogin = document.getElementById('emailLogin').value;
    const password = document.getElementById('password').value;

    alert(`Bem-vindo, ${emailLogin}!`);
});
