import './sass/main.scss';

import NewApiService from './js/apiService';
import LoadMoreBtn from './js/loadMoreBtn';
import articleTpl from './templates/image.hbs';

import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.my-element-selector'),
};

const newApiService = new NewApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();
  newApiService.query = e.currentTarget.elements.query.value;
  if (newApiService.query.length === 0) {
    onFetchError();
    return;
  }

  loadMoreBtn.show();
  newApiService.resetPage();
  clearArticlesContainer();
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newApiService.fetchArticles().then(articles => {
    appendArticleMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticleMarkup(data) {
  // console.log(data[4].largeImageURL);
  console.log(data.length);
  if (data.length < 8) {
    onFetchError();
    clearArticlesContainer();
    return;
  }
  onFetchSuccess();
  refs.articlesContainer.insertAdjacentHTML('beforeend', articleTpl(data));
  refs.articlesContainer.addEventListener('click', myImageBig);
  loadMoreBtn.refs.button.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function myImageBig(data) {
  data.preventDefault();
  if (data.target.nodeName !== 'IMG') {
    return;
  }
  const clickImg = data.target.dataset.large;

  console.log(clickImg);
  basicLightbox.create(`<img width="1400" height="900" src="${clickImg}">`).show();
}

function onFetchSuccess() {
  success({
    title: 'Succsess!',
    delay: 1000,
  });
}

function onFetchError() {
  error({
    title: 'Error!',
    delay: 1000,
  });
}
