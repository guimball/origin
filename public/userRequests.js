document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Capturando os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    // Montando o objeto para envio
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };

    console.log(usuario);

    // Fazendo a requisição POST com Axios
    axios.post('http://localhost:5000/api/users/register', usuario)
        .then(response => {
            console.log("Usuário registrado com sucesso:", response.data);
            alert("Conta criada com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao registrar usuário:", error);
            alert("Ocorreu um erro ao criar a conta.");
        });
});


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Capturando os dados do formulário
    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginPassword").value;

    // Montando o objeto para envio
    const usuario = {
        email: email,
        senha: senha
    };

    console.log(usuario);

    // Fazendo a requisição POST com Axios
    axios.post('http://localhost:5000/api/users/login', usuario)
        .then(response => {
            console.log("login sucesso:", response.data);
            alert("login ok!");
            console.log("Login bem-sucedido:", response.data);

            // Exibindo os dados do usuário no console
            console.log("ID do Usuário:", response.data._id);
            console.log("Nome do Usuário:", response.data.nome);
            console.log("Email do Usuário:", response.data.email);

        })
        .catch(error => {
            console.error("Erro ao registrar usuário:", error);
            alert("Ocorreu um erro ao criar a conta.");
        });
});


