import DOMcontroller from './DOMcontroller';

const controller = (function factory() {
  async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=12e3d57611d7008bed26d747d8731449&units=metric`, {
      mode: 'cors',
    });
    const baseData = await response.json();

    // Handle the data
    const currentWeather = baseData.current.weather[0].description;
    const currentTemp = `${Math.round(baseData.current.temp)}°`;
    const currentHiLo = `H:${Math.round(baseData.daily[0].temp.max)}° L:${Math.round((baseData.daily[0].temp.min))}°`;
    const hourlyArray = baseData.hourly;
    const dailyArray = baseData.daily;

    // Set header values
    DOMcontroller.setHeadWeather(currentWeather);
    DOMcontroller.setHeadTemp(currentTemp);
    DOMcontroller.setHeadHiLo(currentHiLo);

    // Set 24hr values
    DOMcontroller.setScroll(hourlyArray);

    // Set daily values
    DOMcontroller.setDays(dailyArray);
  }

  async function searchCoord(city) {
    if (city === '') {
      throw new Error('Empty input');
    } else {
      DOMcontroller.setLoading();
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12e3d57611d7008bed26d747d8731449`, {
        mode: 'cors',
      });
      const baseData = await response.json();
      try {
        const { lat } = baseData.coord;
        const { lon } = baseData.coord;
        await getWeather(lat, lon);
      } catch {
        // If the search term returns no data
        throw new Error('SEarch term returned no data');
      }
      DOMcontroller.setSearch();
    }
  }

  return {
    searchCoord,
  };
}());

export default controller;
