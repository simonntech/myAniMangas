// Criar classe para LIVROS
// Melhor criar classes para poder criar muitos objetos parecidos com comportamentos próprios (métodos), além de poder ser reutilizável, ou dá para adicionar mais métodos dentro da classe
// Usado EXPORT para poder importar em outro lugar depois

export class Livro {
    constructor(id, titulo, autor, ano) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}