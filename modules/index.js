// Programa Principal que usa os Módulos exportados

import { Livro } from "./livro.js";
import { adicionarLivro, listarLivros, buscarLivroPorTitulo, removerLivro, orderLivrosPorTitulo, carregarLivros, salvarLivros } from "./biblioteca.js";

const form = document.getElementById('formLivro');
const lista = document.getElementById('listaLivros');
const botaoOrdenar = document.getElementById('ordenar');


// Função para renderizar livros
function renderizarLivros() {
    lista.innerHTML = '';
    const livros = listarLivros();
    livros.forEach((livro) => {
        const item = document.createElement('li');
        item.innerHTML = `${livro.titulo}, autor(a): ${livro.autor}, ano: ${livro.ano}`;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover'
        botaoRemover.addEventListener('click', () => {
            removerLivro(livro.id);
            renderizarLivros();
            mostrarMensagem('Livro removido com sucesso!');
        })

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Função para mensagem rápida
function mostrarMensagem(texto) {
    const mensagem = document.createElement('div');
    mensagem.textContent = texto;
    mensagem.style.background = '#a4ffaa';
    mensagem.style.padding = '14px';
    mensagem.style.marginTop = '12px';
    mensagem.style.borderRadius = '8px';

    document.body.appendChild(mensagem);

    setTimeout(() => mensagem.remove(), 3500); //mensagem some em 3,5s
}

// Evento de envio de formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = parseInt(document.getElementById('ano').value);

    const id = Date.now(); // Gera um ID único usando o tempo

    const novoLivro = new Livro(id, titulo, autor, ano);
    adicionarLivro(novoLivro);

    form.reset();
    renderizarLivros();
    mostrarMensagem('Livro adicionado com sucesso!')
});

//Evento para ordenar livros
botaoOrdenar.addEventListener('click', () => {
    orderLivrosPorTitulo();
    renderizarLivros();
})

// Inicializa a página
carregarLivros();
renderizarLivros();

// Pesquisa livro por Nome
const inputPesquisa = document.getElementById('pesquisa');

inputPesquisa.addEventListener('input', () => {
    const termo = inputPesquisa.value.toLowerCase();
    lista.innerHTML = '';

    const livrosFiltrados = listarLivros().filter((livro) => livro.titulo.toLowerCase().includes(termo) || livro.autor.toLowerCase().includes(termo));

    livrosFiltrados.forEach((livro) => {
        const item = document.createElement('li');
        item.textContent = `${livro.titulo} - ${livro.autor} (${livro.ano})`

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            removerLivro(livro.id);
            renderizarLivros();
            mostrarMensagem('Livro removido com sucesso!');
        });

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    })
})