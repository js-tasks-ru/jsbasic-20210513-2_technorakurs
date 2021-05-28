function highlight(table) {
  Array.from(table.querySelector('tbody').rows).forEach((str, i) => {
    let cells = str.querySelectorAll('td');
    cells.forEach((item) => {
      if (item.textContent === 'm') {
        item.closest('tr').classList.add('male')
      }
      if (item.textContent === 'f') {
        item.closest('tr').classList.add('female')
      }
      
      if (Number(item.textContent) < 18){
        item.closest('tr').style.cssText="text-decoration: line-through"
      }
    })
    let cellsAtt = Array.from(cells).filter(el => el.hasAttribute('data-available'));
    if (cellsAtt.length === 0) {
      str.setAttribute('hidden', true)
    };
    cellsAtt.forEach((cell) => {
      if (cell.getAttribute('data-available') === 'true') {
        cell.closest('tr').classList.toggle('available')
      }
      else { cell.closest('tr').classList.toggle('unavailable') }
    })


  })
}
