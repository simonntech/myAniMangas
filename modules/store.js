// Controle de ARMAZENAMENTO LOCAL

let favoritos = [];

export function salvarFavorito(item) {
    favoritos.push(item);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

export function carregarFavoritos() {
    const data = localStorage.getItem('favoritos');
    favoritos = data ? JSON.parse(data) : [];
    return favoritos;
}