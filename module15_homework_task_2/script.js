// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  alert(`Ширина окна = ${width}; высота окна = ${height}`)
});

