const form = document.getElementById('form-contatos')
const pessoas = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (pessoas.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi inserido`);
        
    } else if (numeros.includes(parseFloat(inputNumeroContato.value))) {
        alert(`O número "${inputNumeroContato.value}" já foi inserido, alguém já utiliza esse telefone`);
    } else {
        pessoas.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));

        let linha ='<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>' ;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}