import controller from './controller';

const listener = (function factory() {
  function staticElements() {
    const searchInput = document.querySelector('#sInput');
    const searchButton = document.querySelector('#sButton');
    searchButton.addEventListener('click', () => {
      controller.searchCoord(searchInput.value);
    });
  }

  return {
    staticElements,
  };
}());

export default listener;
