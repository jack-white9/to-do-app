import '../style.css';
import Project from './project'
import ProjectList from './projectList';
import Task from './task';

export default function UI() {
    const wrapper = document.createElement('wrapper');
    wrapper.innerHTML += `
        <container class="projectContainer">
            <h1 class="projectHeader">Projects</h1>
            <hr class="projectDivider"></hr>
            <container class="projectListContainer"></container>
            <p class="projects addProject">+ Add Project</p>
        </container>
        <container class="tasksContainer">
            <container class="tasksHeaderContainer">
                <h1 class="tasksHeader">Chores</h1>
                <p class="edit">Edit</p>
            </container>
            <hr class="tasksDivider"></hr>
            <h2 class="tasksSubheader">I have to do these to keep the house tidy.</h2>
            <container class="todoListContainer"></container>
            <p class="addTask">+ Add Task</p>
        </container>
    `
    document.body.appendChild(wrapper);

    // Example project
    let projectList = new ProjectList;
    const projectListContainer = document.querySelector('.projectListContainer');
    let projects = projectList.getProjects().map(function (project) {
        return `
        <container class="projectListContainer">
            <p class="projects">${project.name}</p>
        </container>`
    }).join('');
    projectListContainer.innerHTML += projects;


    // Example tasks
    let chores = new Project('Chores');
    const todoListContainer = document.querySelector('.todoListContainer');
    let taskList = chores.getTasks().map(function (task) {
        return `
        <container class="todoContainer">
            <span class="circle"></span>
            <p class="todoText">${task.name}</p>
            <p class="delete">×</p> 
        </container>`
    }).join('');
    todoListContainer.innerHTML += taskList;
    
}