function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = addTask;
}
tasks = [];
function addTask(){
    let task = document.getElementById('task');
    let result ='';

    task.push(task.value);
    task.value= '';

    result +=`You have ${task.length} task(s) in your todo-list.<br>`;

    
    document.getElementById('result').innerHTML =result;

    return false;
}

window.addEventListener('load', doFirst);