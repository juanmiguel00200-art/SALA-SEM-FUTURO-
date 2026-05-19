// Função para inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicação Sala Sem Futuro iniciada');
    
    // Inicializar event listeners
    initializeEventListeners();
});

// Função para inicializar event listeners
function initializeEventListeners() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

// Função para lidar com o login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validação básica
    if (email && password) {
        console.log('Tentando fazer login com:', email);
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para o dashboard
        // window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, preencha todos os campos');
    }
}

// Função para lidar com cliques em botões
function handleButtonClick(event) {
    const buttonText = event.target.textContent;
    console.log('Botão clicado:', buttonText);
}

// Função utilitária para formatar datas
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

// Função para fazer requisições API (exemplo)
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Exportar funções para uso global
window.app = {
    formatDate,
    fetchData,
    handleLogin
};
