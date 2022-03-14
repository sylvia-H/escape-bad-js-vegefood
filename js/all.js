// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
var url = 'https://hexschool.github.io/js-filter-data/data.json';
var data;

function renderData(data) {
  var str = ''
  data.forEach((item, index) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符)
    var content = `<tr>
      <td>${item.作物名稱}</td>
      <td>${item.市場名稱}</td>
      <td>${item.上價}</td>
      <td>${item.中價}</td>
      <td>${item.下價}</td>
      <td>${item.平均價}</td>
      <td>${item.交易量}</td>
    </tr>`
    str += content
  });
  return str;
}

axios.get(url)
  .then(function (res) {
    console.log(res.data);
    data = res.data.filter(a => a.作物名稱)
    // TODO: 之後拆成 renderData 函式
    table.innerHTML = renderData(data);
  })

var table = document.querySelector('.table-content')
var showData = []

var category = ''
var filter = document.querySelector('.filter')

filter.addEventListener('click', filterCategory)

function filterCategory(e) {
  if (e.target.nodeName == 'BUTTON') {
    category = e.target.dataset.category
    showData = data.filter((i) => {
      return i.種類代碼 == category
    })
    // TODO: 之後拆成 renderData 函式
    table.innerHTML = renderData(showData);
  } else {
    return;
  }
}

