document.getElementById("formCadastro").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Capturando os dados do formulário
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const price = document.getElementById("price").value;
    console.log(title)
    // Montando o objeto para envio
    const property = {
        title: title,
        description: description,
        location: location,
        price: price
    };

    console.log(property);

    // Fazendo a requisição POST com Axios
    axios.post('http://localhost:5000/api/properties/add', property)
        .then(response => {
            console.log("Propriedade criada com sucesso:", response.data);
            alert("Propriedade cadastrada com sucesso!");
            // Limpa o formulário após o envio
            //document.getElementById("propertyForm").reset();
        })
        .catch(error => {
            console.error("Erro ao cadastrar propriedade:", error);
            alert("Ocorreu um erro ao cadastrar a propriedade.");
        });
});
