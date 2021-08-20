import TodoList from './taskList';
export default function eventHandlers() {
    const todoList = new TodoList()

    const tasksContainer = document.querySelector('.tasksContainer')
    const addTaskButton = document.querySelector('.addTask');
    addTaskButton.addEventListener('click', () => {
        // Add text form
        console.log(todoList.tasks)
        const todoContainer = document.createElement('container');
        todoContainer.classList.add('todoContainer');
        todoContainer.innerHTML = `
            <span class="circle"></span>
            <input type="text" class="addTodo"></text>
            `
        tasksContainer.insertBefore(todoContainer, document.querySelector('.addTask'));

        // Take text form input and add to tasks
        const todoInput = document.querySelector('.addTodo');
        document.querySelector('.addTodo').addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && todoInput.value != '') {
                todoList.addTask(todoInput.value, 'unchecked');
                todoContainer.innerHTML += `
                    <p class="todoText">${todoInput.value}</p>
                    <p class="delete">×</p> 
                `
                todoContainer.removeChild(document.querySelector('.addTodo'));
                addDeleteButton();
            } else if (event.key === 'Enter' && todoInput.value == '') {
                tasksContainer.removeChild(todoContainer);
            }
        })
    });

    function addDeleteButton() {
        let deleteTaskButtons = document.querySelectorAll('.delete');
        deleteTaskButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('click!')
            });
        });
    }

    addDeleteButton(); // this is being double counted

}
