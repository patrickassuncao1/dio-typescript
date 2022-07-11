import HttpClient from "./HttpClient.js";

type ListMovieType = {
    original_title: string,
    id?: number
};

const API_KEY = '3f301be7381a03ad8d352314dcc3ec1d';
const BASE_URL = "https://api.themoviedb.org";

const searchButton = document.querySelector('#search-button') as HTMLButtonElement;
const searchContainer = document.querySelector('#search-container') as HTMLDivElement;
const request = new HttpClient;

const searchMovie = async (value: string) => {
    const query = encodeURI(value);
    const response = await request.get({
        url: BASE_URL + `/3/search/movie?api_key=${API_KEY}&query=${query}`
    });
    return response;

}

async function removeMovie(this: HTMLButtonElement) {
    const myList = document.querySelector('.my-list') as HTMLUListElement;
    const li = this.parentElement;
    if (li) myList.removeChild(li);
}

async function addMovie(this: HTMLButtonElement) {
    const idMovie = this.dataset.id;

    const addMovieList = (item: ListMovieType) => {
        const myList = document.querySelector('.my-list');
        const li = document.createElement('li');
        li.innerText = item.original_title;
        li.setAttribute('data-id', `${item.id}`);
        const button = document.createElement('button');
        button.innerText = 'remover';
        button.addEventListener('click', removeMovie);
        li.appendChild(button);
        myList?.appendChild(li);
    }
    try {
        const response = await request.get({
            url: BASE_URL + `/3/movie/${idMovie}?api_key=${API_KEY}&language=en-US`
        });

        addMovieList(response)
    } catch (error) {
        console.log(error);
    }

}

const createMovieList = (movieList: ListMovieType[]) => {
    const ul = document.createElement('ul');
    ul.id = "list";

    for (const item of movieList) {
        const li = document.createElement('li');
        li.innerText = item.original_title;
        if (item.id !== -1) {
            const button = document.createElement('button');
            button.innerText = 'adicionar';
            button.setAttribute('data-id', `${item.id}`);
            button.addEventListener('click', addMovie);
            li.appendChild(button);
        }
        ul.appendChild(li);
    }

    searchContainer.appendChild(ul);
}

searchButton.addEventListener('click', async () => {
    const list = document.getElementById('list');
    if (list) list.outerHTML = "";

    const query = document.getElementById('search') as HTMLInputElement;

    try {
        const movieList = await searchMovie(query.value);
        movieList.results.length === 0 ?
            createMovieList([{ original_title: "Nenhum Filme Encontrado", id: -1 }])
            : createMovieList(movieList.results);

    } catch (error) {
        console.log(error)
    }

})
