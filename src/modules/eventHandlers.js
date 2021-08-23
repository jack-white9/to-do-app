import Project from './project'
import ProjectList from './projectList'

export default function eventHandlers() {

    // Instantiate
    let projectList = new ProjectList;
    const addProject = document.querySelector('.addProject');
    const projectListContainer = document.querySelector('.projectListContainer');
    const taskListContainer = document.querySelector('.todoListContainer');
    let taskHeader = document.querySelector('.tasksHeader');
    let selectedProject = taskHeader.innerHTML;

    updateProjects();
    updateTasks(selectedProject);


    // consider: let selectedProject = taskHeader.innerHTML;
    // then change the value in the same way at the end of updateProject(), then updateProject() can track changes and reduce
    // clunkiness in functions and allow starting function call

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
                //deleteTaskClickListener();
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
                updateTasks(button.innerHTML);
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
        let currentProject = projectList.getProjects().filter(object => object.name === project)[0];
        let tasks = currentProject.getTasks().map(function (task) {
            return `
            <container class="todoContainer">
            <span class="circle"></span>
            <p class="todoText">${task.name}</p>
            <p class="delete">×</p> 
        </container>`
        }).join('');
        taskListContainer.innerHTML = tasks;
        taskHeader.innerHTML = project;
        selectedProject = taskHeader.innerHTML;
        deleteTaskClickListener();
    }

    // Add task
    const addTask = document.querySelector('.addTask');
    addTask.addEventListener('click', () => {
        taskListContainer.innerHTML += `
        <container class="todoContainer">
        <span class="circle"></span>
        <p class="todoText"><input type="text" class="taskInput"></input></p>
        <p class="delete">×</p> 
        `
        const taskInput = document.querySelector('.taskInput');
        taskInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && taskInput.value != '') {
                let currentProject = projectList.getProjects().filter(object => object.name === taskHeader.innerHTML);
                currentProject[0].addTask(taskInput.value, 'unchecked');
                updateTasks(taskHeader.innerHTML);
            } // add condition to reject tasks with duplicate names
        });
    })

    // Remove task
    function deleteTaskClickListener() {
        const deleteTask = document.querySelectorAll('.delete');
        deleteTask.forEach(button => {
            button.addEventListener('click', () => {
                let currentProject = projectList.getProjects().filter(project => project.name === selectedProject)[0];
                console.log(currentProject);
                let selectedTask = currentProject.getTasks().filter(object => object.name === button.parentNode.children[1].innerHTML)[0];
                console.log(selectedTask)
                projectList.getProjects()[0].deleteTask(selectedTask);
                console.log(projectList.getProjects()) // returns old project too for some reason
                updateTasks(taskHeader.innerHTML);
            });
        });
    }

    // Check/uncheck task
    

}