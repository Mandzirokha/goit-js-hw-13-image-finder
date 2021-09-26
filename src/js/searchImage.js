// import ApiService from './apiService';
// import articlesTpl from '../templates/image.hbs';
// import LoadMoreBtn from './loadMoreBtn';

// const refs = {
//   searchForm: document.querySelector('.search-form'),
//   //   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
//   articlesContainer: document.querySelector('.gallery'),
// };

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const apiService = new ApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// // refs.loadMoreBtn.addEventListener('click', onLoadMore);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   apiService.query = e.currentTarget.elements.query.value;

//   if (apiService.query === '') {
//     return alert('неправильный ввод');
//   }

//   loadMoreBtn.show();
//   apiService.resetPage();
//   // appendArticlesMarkup(articles);
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   apiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }
