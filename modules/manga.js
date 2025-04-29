export class Manga {
    constructor ({id, titulo, sinopse, status, caps_lidos, caps_totais, img_url}) {
        this.id = id;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.status = status;
        this.caps_lidos = caps_lidos;
        this.caps_totais = caps_totais;
        this.img_url = img_url;
    }
}