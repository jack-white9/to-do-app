import Project from './project'
import ProjectList from './projectList'
import Task from './task'

export default function eventHandlers() {
    // Add project
    let projectList = new ProjectList;

    const addProject = document.querySelector('.addProject');
    const projectListContainer = document.querySelector('.projectListContainer');
    addProject.addEventListener('click', () => {
        projectListContainer.innerHTML += `
        <container class="projectItemContainer">
            <p class="projects"><input type="text" class="projectInput"></input></p>
            <p class="deleteProject">×</p> 
        </container>`
        const projectInput = document.querySelector('.projectInput');
        projectInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && projectInput.value != '') {
                console.log(document.querySelector('.projectInput').value);
                projectList.addProject(projectInput.value);
                console.log(projectList)
                updateProjects();
            }
        });
    });

    // cycles through project array and updates DOM
    function updateProjects() {
        let projects = projectList.getProjects().map(function (project) {
            return `
            <container class="projectItemContainer">
                <p class="projects">${project.name}</p>
                <p class="deleteProject">×</p> 
            </container>`
        }).join('');
        projectListContainer.innerHTML = projects;
    }
}




/*
export default function eventHandlers() {
    const todoList = new TodoList()
    const projectList = new ProjectList()

    // Add task
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
                // add check/uncheck task
                todoContainer.addEventListener('click', () => {
                    let todoContainerIndex = (Array.from(todoContainer.parentNode.children).indexOf(todoContainer)) - 3; // matches position of task with task object array
                    if (todoList.getTasks()[todoContainerIndex].status === 'unchecked') {
                        todoList.getTasks()[todoContainerIndex].setStatus('checked');
                        todoContainer.children[0].style.cssText = 'background: #03DAC5';
                    } else if (todoList.getTasks()[todoContainerIndex].status === 'checked') {
                        todoList.getTasks()[todoContainerIndex].setStatus('unchecked');
                        todoContainer.children[0].style.cssText = 'background: transparent';
                    }
                });
                todoContainer.querySelector('.delete').addEventListener('click', () => {
                    todoList.deleteTask(todoContainer.querySelector('.delete').parentElement.children[1].innerHTML) //this is not deleting task objects properly
                    todoContainer.querySelector('.delete').parentElement.remove();
                });
                todoContainer.removeChild(document.querySelector('.addTodo'));
                
            } else if (event.key === 'Enter' && todoInput.value == '') {
                tasksContainer.removeChild(todoContainer);
            }
        })
    });

    // Delete task
    let deleteTaskButtons = document.querySelectorAll('.delete');
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(todoList.tasks)
            todoList.deleteTask(button.parentElement.children[1].innerHTML) //this is not deleting task objects properly
            console.log(todoList.tasks)
            button.parentElement.remove();
        });
    });

    // Check/uncheck task
    const todoContainers = document.querySelectorAll('.todoContainer');
    todoContainers.forEach(todoContainer => {
        todoContainer.addEventListener('click', () => {
            let todoContainerIndex = (Array.from(todoContainer.parentNode.children).indexOf(todoContainer)) - 3; // matches position of task with task object array
            if (todoList.getTasks()[todoContainerIndex].status === 'unchecked') {
                todoList.getTasks()[todoContainerIndex].setStatus('checked');
                todoContainer.children[0].style.cssText = 'background: #03DAC5';
            } else if (todoList.getTasks()[todoContainerIndex].status === 'checked') {
                todoList.getTasks()[todoContainerIndex].setStatus('unchecked');
                todoContainer.children[0].style.cssText = 'background: transparent';
            }
        });
    });
}
*/