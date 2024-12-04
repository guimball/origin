document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os valores do formulário
    const propertyId = document.getElementById('property').value;; // ID fixo da propriedade
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const visitorName = document.getElementById('visitorName').value;
    const visitorPhone = document.getElementById('visitorPhone').value;

    // Endpoint para criação de visitas
    const createVisitEndpoint = 'http://localhost:5000/api/visits/add';

    try {
        // Faz a requisição POST
        const response = await axios.post(createVisitEndpoint, {
            propertyId,
            date,
            time,
            visitorName,
            visitorPhone,
        });

        // Exibe mensagem de sucesso ou redireciona
        alert('Visita agendada com sucesso!');
        console.log('Resposta do servidor:', response.data);
    } catch (error) {
        console.error('Erro ao agendar visita:', error);
        alert('Erro ao agendar visita. Por favor, tente novamente.');
    }
});
