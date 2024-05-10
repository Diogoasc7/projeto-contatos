document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        adicionarContato(nome, telefone);
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function adicionarContato(nome, telefone) {
    const tabela = document.getElementById('corpo-tabela');
    const novaLinha = tabela.insertRow();

    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
