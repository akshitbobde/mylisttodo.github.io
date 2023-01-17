const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck);
//Functions

function addTodo(e){
    //prevent from refreshing the list and deleting choices
    e.preventDefault();
    //TODO DIV to usme n list rehnegi li matlab aur button add karne ko and delete karne ko 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create the li in the div element
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton );

    //append to list
    todoList.appendChild(todoDiv);

    //clear value at todo input
    todoInput.value = " "
}


function deleteCheck(e){
    const item = e.target;
    //delete button
    if(item.classList[0]==='trash-btn'){ //it means first class that is added and we click to vo delete hona chaiye
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}