function doFirst(){
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = addTask;

}

tasks = [];
function addTask(){
    let task = document.getElementById('task');
    let result = '';
    
    tasks.push(task.value);
    task.value = '';

    result += `<p>You have ${tasks.length} task(s) in your todo list.</p>`;

    result += `<h2 style="color: green;">Todo List</h2>`;
    result += `<ol><li>`;
        result += tasks.join(`</li><li>`);
    result += `</li></ol>`;

    document.getElementById('result').innerHTML = result;

    let list = document.querySelectorAll('#result li');
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',removeTask);
    }

    return false;
}
function removeTask(e){
    alert(e.target)
    alert(e.type)
}
window.addEventListener('load', doFirst);

// innerHTML

// innerText
// textContent