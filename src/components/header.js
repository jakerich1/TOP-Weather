export default function header() {
  const headerContainer = document.createElement('header');

  // Search container
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-cont';

  const searchLabel = document.createElement('span');
  searchLabel.id = 'search-label';
  searchLabel.innerText = 'City:';
  searchContainer.appendChild(searchLabel);

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter city name';
  searchContainer.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.innerText = 'search';
  searchContainer.appendChild(searchButton);

  headerContainer.appendChild(searchContainer);

  // Summary weather data
  const summaryContainer = document.createElement('div');
  summaryContainer.className = 'summary-cont';

  const weatherLabel = document.createElement('span');
  weatherLabel.className = 'weather-label';
  weatherLabel.innerText = 'Cloudy';
  summaryContainer.appendChild(weatherLabel);

  const tempLabel = document.createElement('span');
  tempLabel.className = 'temp-label';
  tempLabel.innerText = '19°';
  summaryContainer.appendChild(tempLabel);

  const hiloLabel = document.createElement('span');
  hiloLabel.className = 'hilo-label';
  hiloLabel.innerText = 'H:21 L:13°';
  summaryContainer.appendChild(hiloLabel);

  headerContainer.appendChild(summaryContainer);

  return headerContainer;
}
