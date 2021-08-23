import ProjectList from './projectList'

export default function eventHandlers() {

    // Instantiate
    let projectList = new ProjectList; // store to browser
    const addProject = document.querySelector('.addProject');
    const projectListContainer = document.querySelector('.projectListContainer');
    const taskListContainer = document.querySelector('.todoListContainer');
    let taskHeader = document.querySelector('.tasksHeader');
    let selectedProject = taskHeader.innerHTML;

    updateProjects();
    updateTasks(selectedProject);

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
        checkTaskClickListener()
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
                let selectedTask = currentProject.getTasks().filter(object => object.name === button.parentNode.children[1].innerHTML)[0];
                currentProject.deleteTask(selectedTask);
                updateTasks(taskHeader.innerHTML);
            });
        });
    }

    // Check/uncheck task
    function checkTaskClickListener() { // statuses get reset by updateTask() and updateProjects()
        const taskContainers = document.querySelectorAll('.todoContainer');
        taskContainers.forEach(button => { // this event listener is also triggered when the delete button is pressed
            button.addEventListener('click', () => {
                let currentProject = projectList.getProjects().filter(project => project.name === selectedProject)[0];
                let selectedTask = currentProject.getTasks().filter(object => object.name === button.children[1].innerHTML)[0]; // button.children[1] is an ugly use of index
                if (selectedTask.status === 'unchecked') {
                    selectedTask.setStatus('checked');
                    button.children[0].style.background = '#03DAC5';
                } else if (selectedTask.status === 'checked') {
                    selectedTask.setStatus('unchecked');
                    button.children[0].style.background = 'transparent';
                }
            })
        })
    }

}