// Funções para Manipular os Livros
import { Livro } from "./livro.js";

const biblioteca = [];

// Função para adicionar um livro
export function adicionarLivro(livro) {
    biblioteca.push(livro);
    salvarLivros();
}

//Função para listar os livros
export function listarLivros() {
    return biblioteca;
}

// Função para buscar livro pelo título
export function buscarLivroPorTitulo(titulo) {
    return biblioteca.filter((livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase()))
}

// Função para remover o livro pelo ID
export function removerLivro(id) {
    const indice = biblioteca.findIndex((livro) => livro.id === id);
    if (indice !== -1) {
        biblioteca.splice(indice, 1);
        salvarLivros();
    }
}

// Função para ordenar livros por Título
export function orderLivrosPorTitulo() {
    biblioteca.sort((a,b) => a.titulo.localeCompare(b.titulo));
}

// -------------- SALVAR E CARREGAR NO LOCAL STORAGE -----------------

// Função para salvar livros
export function salvarLivros() {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
}

// Função para Carregar os livros salvos no armazenamento local
export function carregarLivros() {
    const dados = localStorage.getItem('biblioteca');
    if (dados) {
        const livrosSalvos = JSON.parse(dados);
        //Limpa e recarrega o array biblioteca
        biblioteca.length = 0; // esvazia o array
        livrosSalvos.forEach((l) => biblioteca.push(new Livro(l.id, l.titulo, l.autor, l.ano)));
    }
}