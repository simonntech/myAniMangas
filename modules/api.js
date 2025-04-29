// API ANIMES 

const BASE_URL = 'https://api.jikan.moe/v4';

export async function buscarAnimes(termo) {
    const res = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(termo)}`);
    const json = await res.json();
    return json.data; //array de animes
}

export async function buscarMangas(termo) {
    const res = await fetch(`${BASE_URL}/manga?q=${encodeURI(termo)}`);
    const json = res.json();
    return json.data; //array de mangás
}