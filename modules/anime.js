export class Anime {
    constructor ({id, titulo, sinopse, status, eps_vistos, eps_totais, img_url}) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.status = status;
        this.eps_vistos = eps_vistos;
        this.eps_totais = eps_totais;
        this.img_url = img_url;
    }
}