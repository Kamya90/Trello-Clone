//array to store the messages
var taskStorage= [];

//capturing input bar, + icon and empty text are to diplay the task
var task= document.getElementsByClassName('input work item').value;
var addToList=document.getElementById('addToList');
var display=document.getElementById('display');

//adding an eventyLIstener to + icon
addToList.addEventListener('click', displayTask);

//push the message to array, diplay it and add another input atrea and button for more tasks
function displayTask(e){
    e.preventDefault();
    taskStorage.push(task);
    //console.log(taskStorage);

    //create text node, create textbox, append the text in textbox as childNode
    var textBox= document.createElement('textarea');
    textarea.className='textarea';
    var textChild=document.createTextNode(task);
    textBox.appendChild
}

