
function makeTable() {
  var nrows = document.getElementById("enterN").value;
  var ncol = document.getElementById("enterM").value;
  var tableGen = document.getElementById("tableNM");
  var tableVal = document.getElementById("btns");

  
  tableGen.innerHTML = "";
  tableVal.innerHTML = "";
  var ntable = "<table>";

  for (let i = 0; i < nrows; i++ ) {
    ntable += "<tr>";
    for (let j = 0; j < ncol; j++ ) { 
      ntable += `<td><input type='number' id=row${i}${j} class='tablegen'/></td>`;
    }
    ntable += "</tr>";
  }
  ntable += "</table>";
  tableGen.innerHTML = ntable;
  tableVal.innerHTML = "<button onclick='validate()' class = 'validate'>Validate sums</button>"

}

function validate() {
  var nrows = document.getElementById("enterN").value;
  var ncol = document.getElementById("enterM").value;
  var error = document.getElementById("error");
  var totalRow = [];
  var totalCol = [];

  for (let i = 0; i < nrows; i++ ) {
    var sum = 0;
    for (let j = 0; j < ncol; j++ ) {
      var numinpu = Number(document.querySelector(`#row${i}${j}`).value);
      if (numinpu % 1 == 0) {
        sum+= numinpu;
      } else {
        alert('Only Integers are allowed')
        return;
      }
    }
    totalRow.push(sum);
  }

  for (let a = 0; a < ncol; a++ ) {
    var sumc = 0;
    for (let b = 0; b < nrows; b++ ) {
      var numinpuc = Number(document.querySelector(`#row${b}${a}`).value);
      if (numinpuc % 1 == 0) {
        sumc += numinpuc;
      } else {
        alert('Only Integers are allowed')
        return;
      }
    }
    totalCol.push(sumc);
  }

  for (let k = 0; k < totalRow.length; k++) {
    if (totalRow[k] !== 100) {
      error.innerHTML = `<H2 class='error-text'>the sum in the row ${k} is not equal to 100</h2>`;
      return ;
    } else {
      error.innerHTML = "<H2 class='success'>the sum in all the rows are correct</h2>";
    }
  }

  for (let c = 0; c < totalCol.length; c++) {
    if (totalCol[c] !== 100) {
      errorc.innerHTML = `<H2 class='error-text'>the sum in the column ${c} is not equal to 100</h2>`;
      return ;
    } else {
      errorc.innerHTML = "<H2 class='success'>the sum in all the columns are correct</h2>";
    }
  }
} 


/*var total = array.reduce(function (previous, current) {
  var val = previous + current;
  return val;
}, 0); */


