export default function twentyFourHr() {
  const twentyFourHrContainer = document.createElement('main');

  // Scroll snap container
  const snapWrap = document.createElement('div');
  snapWrap.className = 'snap-frame';

  for (let i = 0; i < 24; i += 1) {
    const element = document.createElement('div');
    element.className = 'snap-block';

    // Time label
    const time = document.createElement('div');
    time.className = 'block-time';
    time.innerText = i;
    element.appendChild(time);

    // Rain label
    const rain = document.createElement('div');
    rain.innerText = '36%';
    rain.className = 'block-rain';
    element.appendChild(rain);

    // Temperature label
    const weather = document.createElement('div');
    weather.innerText = 'sunny';
    weather.className = 'block-weather';
    element.appendChild(weather);

    // Temperature label
    const temp = document.createElement('div');
    temp.innerText = '20°';
    temp.className = 'block-temp';
    element.appendChild(temp);

    snapWrap.appendChild(element);
  }

  twentyFourHrContainer.appendChild(snapWrap);

  return twentyFourHrContainer;
}
