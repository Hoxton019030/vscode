function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = setEvent;

}
function setEvent(){
    let events = ['click','select','contextmenu','change','input'];

    for(let i = 0; i < events.length; i++){
        let yourCheck = document.getElementById(events[i]);

        if(yourCheck.checked){
            document.addEventListener(events[i], report);
            // window.addEventListener(events[i], report);  // for resize event
        }else{
            document.removeEventListener(events[i], report);
        }
    }

    result = document.getElementById('result');
    result.value = ''

    return false;
}
function report(e){
    // 印出: 「DIV --> click」
    result.value += `${e.target.nodeName} ---> ${e.type} \n`;

}
window.addEventListener('load', doFirst);
// window.onload =  doFirst;