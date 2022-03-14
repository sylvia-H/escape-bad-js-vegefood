const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data;
const table = document.querySelector('.table-content');

function renderData(originData) {
  let str = '';
  originData.forEach((item) => {
    const content = `<tr>
      <td>${item.作物名稱}</td>
      <td>${item.市場名稱}</td>
      <td>${item.上價}</td>
      <td>${item.中價}</td>
      <td>${item.下價}</td>
      <td>${item.平均價}</td>
      <td>${item.交易量}</td>
    </tr>`;
    str += content;
  });
  return str;
}
// eslint-disable-next-line no-undef
axios.get(url)
  .then((res) => {
    data = res.data.filter((el) => el.作物名稱);
    table.innerHTML = renderData(data);
  });

let showData = [];
let category = '';
const filter = document.querySelector('.filter');

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    table.innerHTML = renderData(showData);
  }
}

filter.addEventListener('click', filterCategory);
