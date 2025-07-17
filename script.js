fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/periodic-table-lookup.json')
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById('table');
    const order = data.order;

    order.forEach(key => {
      const el = data[key];
      const div = document.createElement('div');
      div.className = 'element';
      div.style.gridColumn = el.xpos;
      div.style.gridRow = el.ypos;
      div.innerHTML = `
        <div class="num">${el.number}</div>
        <div class="symbol">${el.symbol}</div>
        <div class="name">${el.name}</div>
      `;
      table.appendChild(div);
    });
  })
  .catch(console.error);
