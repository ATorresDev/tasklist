// Variables
const form = document.querySelector('.task__form')
const add = document.querySelector('.add__item');
const taskList = document.querySelector('.task__list');
const tasks = document.querySelector('.task__input');
const deleteTask = document.querySelector('.delete');
const deleteAll = document.querySelector('.delete-all');


// load event listeners
loadEventListeners();

// all event listeners
function loadEventListeners() {
    // Add task
    add.addEventListener('click', addTask);
    // Remove task
    taskList.addEventListener('click', removeTasks);
    // Remove all tasks
    deleteAll.addEventListener('click', clearTasks);
}



// add task
function addTask(e){
    if(tasks.value === '') {
        alert('Add Tasks');
    } else {
   
    //create div element
    const div = document.createElement('div');
     //add class
    div.className = 'tasks__li flex flex-center';
    //create element
    const a = document.createElement('a');
    // set attribute
    a.setAttribute('href', '#');
    // add class
    a.className = 'delete';
    //create span
    const span = document.createElement('span');
    //add class
    span.className = 'material-icons delete';
    //add content
    span.innerHTML =  'delete_forever';
    //append span to a
    a.appendChild(span);
   //append span to div
    div.appendChild(a);
    //create li
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(tasks.value));
    //append li to div
    div.appendChild(li);
    //append div to ul
    taskList.appendChild(div);
    //clear task
    tasks.value = '';
    document.myform.mytasks.focus();
    e.preventDefault();
}
};


// Remove tasks
function removeTasks(e){
    if(e.target.parentElement.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
        document.myform.mytasks.focus();
        }
        
    }
    
}

// Remove all tasks
function clearTasks() {
     // Faster way
     //taskList.innerHTML = '';
     while(taskList.firstChild) {
         taskList.removeChild(taskList.firstChild);
         document.myform.mytasks.focus();
     }
}


