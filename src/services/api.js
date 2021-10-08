import axios from 'axios';
//URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3
// /movie/now_playing &language=pt-BR&page=1

export const key = '7ec9c9cc564f94351b5879b508eba6c1'

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3'
})

export default api;