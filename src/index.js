import './style/style.scss';
import header from './components/header';
import twentyFourHr from './components/main';
import week from './components/week';

function component() {
  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild(header());
  container.appendChild(twentyFourHr());
  container.appendChild(week());

  return container;
}

document.body.appendChild(component());
