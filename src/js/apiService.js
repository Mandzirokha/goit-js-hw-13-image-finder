const API_KEY = '23559602-074962a3d1482825ece0a5bf8';
const BASE_URL = 'https://pixabay.com/api/';

const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url, options)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(({ articles }) => {
        console.log(articles);
        this.incrementPage();

        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
