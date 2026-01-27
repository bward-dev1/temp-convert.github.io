// Function to clear all input fields
function reset() {
  document.getElementById('fahr').value = '';
  document.getElementById('cels').value = '';
  document.getElementById('kel').value = '';
}

// Function to convert temperatures based on which input was changed
function convert(degrees) {
  var x = 0;
  var y = 0;

  if (degrees === "fahrenheit") {
    var fahrValue = document.getElementById("fahr").value;
    if (fahrValue === '') {
      document.getElementById("cels").value = '';
      document.getElementById("kel").value = '';
      return;
    }
    x = (fahrValue - 32) * 5 / 9;
    x = x.toFixed(2);
    document.getElementById("cels").value = x;

    y = (parseFloat(fahrValue) + 459.67) * 5 / 9;
    y = y.toFixed(2);
    document.getElementById("kel").value = y;

  } else if (degrees === "celsius") {
    var celsValue = document.getElementById("cels").value;
    if (celsValue === '') {
      document.getElementById("fahr").value = '';
      document.getElementById("kel").value = '';
      return;
    }
    x = celsValue * 9 / 5 + 32;
    x = x.toFixed(2);
    document.getElementById("fahr").value = x;

    y = parseFloat(celsValue) + 273.15;
    y = y.toFixed(2);
    document.getElementById("kel").value = y;

  } else if (degrees === "kelvin") {
    var kelValue = document.getElementById("kel").value;
    if (kelValue === '') {
      document.getElementById("fahr").value = '';
      document.getElementById("cels").value = '';
      return;
    }
    x = (kelValue - 273.15) * 9 / 5 + 32;
    x = x.toFixed(2);
    document.getElementById("fahr").value = x;

    y = kelValue - 273.15;
    y = y.toFixed(2);
    document.getElementById("cels").value = y;
  }
}
