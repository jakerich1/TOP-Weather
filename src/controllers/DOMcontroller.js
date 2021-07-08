const DOMcontroller = (function factory() {
  function setLoading() {
    const searchButton = document.querySelector('#sButton');
    searchButton.innerHTML = '...loading';
  }

  function setSearch() {
    const searchButton = document.querySelector('#sButton');
    searchButton.innerHTML = 'search';
  }

  function setHeadWeather(content) {
    const headerWeather = document.querySelector('.weather-label');
    headerWeather.innerHTML = content;
  }

  function setHeadTemp(content) {
    const headerTemp = document.querySelector('.temp-label');
    headerTemp.innerHTML = content;
  }

  function setHeadHiLo(content) {
    const headerHiLo = document.querySelector('.hilo-label');
    headerHiLo.innerHTML = content;
  }

  function setScroll(content) {
    // Scrollable wrapper
    const scrollArea = document.querySelector('.snap-frame');
    scrollArea.innerHTML = '';

    for (let i = 0; i < content.length; i += 1) {
      const hourTemp = Math.round(content[i].temp);
      const hourWeather = content[i].weather[0].main;
      const hourTime = new Date(new Date().setHours(new Date().getHours() + i)).getHours();
      const hourRain = Math.round((content[i].pop) * 100);

      const element = document.createElement('div');
      element.className = 'snap-block';

      // Time label
      const time = document.createElement('div');
      time.className = 'block-time';
      time.innerText = hourTime;
      element.appendChild(time);

      // Rain label
      const rain = document.createElement('div');
      rain.innerText = `${hourRain}%`;
      rain.className = 'block-rain';
      element.appendChild(rain);

      // Temperature label
      const weather = document.createElement('div');
      weather.innerText = hourWeather;
      weather.className = 'block-weather';
      element.appendChild(weather);

      // Temperature label
      const temp = document.createElement('div');
      temp.innerText = `${hourTemp}°`;
      temp.className = 'block-temp';
      element.appendChild(temp);

      scrollArea.appendChild(element);
    }
  }

  function setDays(content) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    const dailyDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 1; i < content.length; i += 1) {
      dailyDate.setDate(dailyDate.getDate() + 1);

      const dailyRain = Math.round((content[i].pop) * 100);
      const dailyTemp = Math.round(content[i].temp.day);
      const dailyWeather = content[i].weather[0].description;
      const body1 = document.createElement('tr');

      const r1c1 = document.createElement('td');
      r1c1.innerText = days[dailyDate.getDay()];
      body1.appendChild(r1c1);

      const r1c2 = document.createElement('td');
      r1c2.innerText = dailyWeather;
      body1.appendChild(r1c2);

      const r1c3 = document.createElement('td');
      r1c3.innerText = `${dailyRain}%`;
      body1.appendChild(r1c3);

      const r1c4 = document.createElement('td');
      r1c4.innerText = `${dailyTemp}°`;
      body1.appendChild(r1c4);

      tableBody.appendChild(body1);
    }
  }

  return {
    setLoading,
    setSearch,
    setHeadWeather,
    setHeadTemp,
    setHeadHiLo,
    setScroll,
    setDays,
  };
}());

export default DOMcontroller;
