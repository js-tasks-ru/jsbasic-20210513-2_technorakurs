function makeDiagonalRed(table) {
  Array.from(table.rows).forEach((str, i) => {
    str.cells[i].style.backgroundColor = 'red'
    i++
  });
}
