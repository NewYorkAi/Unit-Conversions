document.getElementById('convert-temperature').addEventListener('click', function() {
    var celsius = document.getElementById('c').value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('f').value = fahrenheit.toFixed(2);
});

document.getElementById('convert-weight').addEventListener('click', function() {
    var kilograms = document.getElementById('kg').value;
    var pounds = kilograms * 2.205;
    document.getElementById('lbs').value = pounds.toFixed(2);
});

document.getElementById('convert-distance').addEventListener('click', function() {
    var kilometers = document.getElementById('km').value;
    var miles = kilometers / 1.609;
    document.getElementById('mi').value = miles.toFixed(2);
});
