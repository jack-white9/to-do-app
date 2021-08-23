import Project from './project'
import ProjectList from './projectList'

export default function eventHandlers() {

    // Instantiate
    let projectList = new ProjectList;
    const addProject = document.querySelector('.addProject');
    const projectListContainer = document.querySelector('.projectListContainer');
    const taskListContainer = document.querySelector('.todoListContainer');

    updateProjects();

    // Add project
    addProject.addEventListener('click', () => {
        projectListContainer.innerHTML += `
        <container class="projectItemContainer">
            <p class="projects"><input type="text" class="projectInput"></input></p>
            <p class="deleteProject">×</p> 
        </container>`
        const projectInput = document.querySelector('.projectInput');
        projectInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && projectInput.value != '') {
                projectList.addProject(projectInput.value);
                updateProjects();
            } // add condition to reject projects with duplicate names
        });
    });

    // Remove project
    function deleteProjectClickListener() {
    const deleteProject = document.querySelectorAll('.deleteProject');
    deleteProject.forEach(button => {
        button.addEventListener('click', () => {
            projectList.deleteProject(button.parentNode.children[0].innerHTML);
            updateProjects();
            })
        })
    }

    // Make projects display their tasks
    function projectTasksClickListener() {
        const projectButtons = document.querySelectorAll('.projects');
        projectButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(updateTasks(button.innerHTML));
            });
        });
    }

    // Function to cycle through project array and update DOM
    function updateProjects() {
        let projects = projectList.getProjects().map(function (project) {
            return `
            <container class="projectItemContainer">
                <p class="projects">${project.name}</p>
                <p class="deleteProject">×</p> 
            </container>`
        }).join('');
        projectListContainer.innerHTML = projects;
        deleteProjectClickListener(); // Give the projects their event listeners
        projectTasksClickListener();
    }

    // Function to cycle through task array and update DOM
    function updateTasks(project) {
        let taskArray = projectList.getProjects().filter(object => object.name === project);
        let tasks = taskArray[0].getTasks().map(function (task) {
            return `
            <container class="todoContainer">
            <span class="circle"></span>
            <p class="todoText">${task.name}</p>
            <p class="delete">×</p> 
        </container>`
        }).join('');
        taskListContainer.innerHTML = tasks;
    }

    // Add task

    // Remove task

    // Check/uncheck task
}