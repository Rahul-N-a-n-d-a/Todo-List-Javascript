const todoList = JSON.parse(localStorage.getItem('todoList')) || [{ name: '', date: '' }];

displayTodoList();

function displayTodoList() {
    let task = '';
    todoList.forEach((element, index) => {
        let { name, date } = element;
        let todoTask = `<div>${name}</div>
                        <div>${date}</div> 
                        <button class="todo-delete-button js-delete-todo-button">Delete</button>`;
        task += todoTask;
    });

    document.querySelector('.js-todoList').innerHTML = task;

    document.querySelectorAll('.js-delete-todo-button').forEach((f, i) => {
        f.addEventListener('click', () => {
            todoList.splice(i, 1);
            displayTodoList();
            localStorage.setItem('todoList', JSON.stringify(todoList));
        })
    });

}

function addTodo() {
    const inputElement = document.querySelector('.js-todo-name');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-todo-date');
    const date = dateInputElement.value;
    if (name && date !== '') {
        todoList.push({ name, date });
        localStorage.setItem('todoList', JSON.stringify(todoList));
        displayTodoList();
        inputElement.value = '';
        dateInputElement.value = '';
    } else if (name === '') {
        alert('Enter a todo');
    } else if (date === '') {
        alert('Enter date');
    } else {
        alert('error');
    }
}

document.querySelector('.js-addtodo-button').addEventListener('click', () => {
    addTodo();
});

