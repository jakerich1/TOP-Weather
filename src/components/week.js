export default function week() {
  const weekContainer = document.createElement('div');
  weekContainer.className = 'week';

  // Table container
  const table = document.createElement('table');
  table.id = 'seven-table';

  // Table heading
  const tableHead = document.createElement('thead');
  const tHeadRow = document.createElement('tr');

  const dayCol = document.createElement('th');
  dayCol.innerText = 'Day';
  tHeadRow.appendChild(dayCol);

  const weatherCol = document.createElement('th');
  weatherCol.innerText = 'Weather';
  tHeadRow.appendChild(weatherCol);

  const rainCol = document.createElement('th');
  rainCol.innerText = 'Rain';
  tHeadRow.appendChild(rainCol);

  const tempCol = document.createElement('th');
  tempCol.innerText = 'Temperature';
  tHeadRow.appendChild(tempCol);

  tableHead.appendChild(tHeadRow);
  table.appendChild(tableHead);

  // Table body
  const tableBody = document.createElement('tbody');
  table.appendChild(tableBody);

  // Row

  for (let i = 0; i < 7; i += 1) {
    const body1 = document.createElement('tr');

    const r1c1 = document.createElement('td');
    r1c1.innerText = 'Monday';
    body1.appendChild(r1c1);

    const r1c2 = document.createElement('td');
    r1c2.innerText = 'Sunny';
    body1.appendChild(r1c2);

    const r1c3 = document.createElement('td');
    r1c3.innerText = '43%';
    body1.appendChild(r1c3);

    const r1c4 = document.createElement('td');
    r1c4.innerText = '19°';
    body1.appendChild(r1c4);

    tableBody.appendChild(body1);
  }

  weekContainer.appendChild(table);

  return weekContainer;
}
