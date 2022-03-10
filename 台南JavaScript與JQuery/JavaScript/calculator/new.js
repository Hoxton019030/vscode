function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
}
function calculate(){
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let tax = document.getElementById('tax').value;
    let discount = document.getElementById('discount').value;

    let result = quantity * price;

    tax = tax / 100;    // tax /= 100;
    tax++;   // 1.05

    result = result * tax;  // result *= tax;
    result = result - discount;  // result -= discount;

    document.getElementById('result').innerText = result.toFixed(3);

    return false;
}
window.addEventListener('load', doFirst);