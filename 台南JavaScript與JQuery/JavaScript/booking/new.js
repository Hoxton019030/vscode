function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;

}
function calculate(){
    // let start = document.getElementById('start');
    // let end = document.getElementById('end');

    let day = 24 * 60 * 60 * 1000;   // 一天的總毫秒數
    
    let startDate = new Date(start.value);
    let endDate = new Date(end.value);
    // console.log(endDate - startDate);
    let message = '';
    
    if(startDate <= endDate){
        let diff = endDate - startDate;

        if(diff <= day){
            interval = 1;
        }else{
            // interval = diff / day + ' day';
            interval = Math.round(diff / day);
        }
        // console.log(interval);
        message += `The room has been scheduled starting on ${startDate.toLocaleDateString()} and ending on ${endDate.toLocaleDateString()}, which is a period of ${interval} day`;
    }else{
        message += `The start date must come before the end date.`;
    }
   
    feedback.innerHTML = message;

    return false;
}
window.addEventListener('load', doFirst);