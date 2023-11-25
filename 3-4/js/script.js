// function to convert cad to usd 
function convertToUSD() {
    var CAD_Input = document.getElementById("CADdollarInput").value;
    var rate = 0.73; 
    var USDdollarValue = CAD_Input * rate;
    document.getElementById("output").innerHTML = "USD: $" + USDdollarValue.toFixed(4);
}
// function to convert usd to cad
function convertToCAD() {
    var USD_Input = document.getElementById("USDdollarInput").value;
    var rate = 1.36; 
    var CADdollarValue = USD_Input * rate;
    document.getElementById("output").innerHTML = "CAD: $" + CADdollarValue.toFixed(4);
}