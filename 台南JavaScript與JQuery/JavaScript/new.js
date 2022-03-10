function doFirst() {
    document.getElementById(`theForm`).onsubmit = calculate;
}
function calculate(){
    let quantity = document.getElementById('quantity').value;
    let price =document.getElementById('price').value;
    let tax = document.getElementById('tax').value;
    let discount = document.getElementById('discount').value;

    let result =quantity * price;
    tax = tax /100;
    tax++;
    result = result *tax;
    result = result - discount;

    Document.getElementById('result').innterText = result.
}
window.addEventListener('load', doFirst);
