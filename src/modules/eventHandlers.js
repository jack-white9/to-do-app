import ProjectList from './projectList';

export default function eventHandlers() {
  // Instantiate
  const projectList = new ProjectList(); // store to browser
  const addProject = document.querySelector('.addProject');
  const projectListContainer = document.querySelector('.projectListContainer');
  const taskListContainer = document.querySelector('.todoListContainer');
  const taskHeader = document.querySelector('.tasksHeader');
  let selectedProject = taskHeader.innerHTML;

  // Add project
  addProject.addEventListener('click', () => {
    projectListContainer.innerHTML += `
        <container class="projectItemContainer">
            <p class="projects"><input type="text" class="projectInput"></input></p>
            <p class="deleteProject">×</p> 
        </container>`;
    const projectInput = document.querySelector('.projectInput');
    projectInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && projectInput.value != '') {
        projectList.addProject(projectInput.value);
        updateProjects();
      } // add condition to reject projects with duplicate names
    });
  });

  // Remove project
  function deleteProjectClickListener() {
    const deleteProject = document.querySelectorAll('.deleteProject');
    deleteProject.forEach((button) => {
      button.addEventListener('click', () => {
        projectList.deleteProject(button.parentNode.children[0].innerHTML);
        updateProjects();
      });
    });
  }

  // Make projects display their tasks
  function projectTasksClickListener() {
    const projectButtons = document.querySelectorAll('.projects');
    projectButtons.forEach((button) => {
      button.addEventListener('click', () => {
        updateTasks(button.innerHTML);
      });
    });
  }

  // Function to cycle through project array and update DOM
  function updateProjects() {
    const projects = projectList.getProjects().map((project) => `
            <container class="projectItemContainer">
                <p class="projects">${project.name}</p>
                <p class="deleteProject">×</p> 
            </container>`).join('');
    projectListContainer.innerHTML = projects;
    deleteProjectClickListener();
    projectTasksClickListener();
  }

  // Function to cycle through task array and update DOM
  function updateTasks(project) {
    const currentProject = projectList.getProjects().filter((object) => object.name === project)[0];
    const tasks = currentProject.getTasks().map((task) => `
            <container class="todoContainer">
            <span class="circle"></span>
            <p class="todoText">${task.name}</p>
            <p class="delete">×</p> 
        </container>`).join('');
    taskListContainer.innerHTML = tasks;

    // Look for checked tasks and apply style
    currentProject.getTasks().forEach((task) => {
      if (task.status === 'checked') {
        const circles = document.querySelectorAll('.circle');
        circles[currentProject.getTasks().indexOf(task)].classList.add('checked');
      }
    });

    taskHeader.innerHTML = project;
    selectedProject = taskHeader.innerHTML;
    deleteTaskClickListener();
    checkTaskClickListener();
  }

  // Add task
  const addTask = document.querySelector('.addTask');
  addTask.addEventListener('click', () => {
    taskListContainer.innerHTML += `
        <container class="todoContainer">
        <span class="circle"></span>
        <p class="todoText"><input type="text" class="taskInput"></input></p>
        <p class="delete">×</p> 
        `;
    const taskInput = document.querySelector('.taskInput');
    taskInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && taskInput.value != '') {
        const currentProject = projectList.getProjects().filter((object) => object.name === taskHeader.innerHTML);
        currentProject[0].addTask(taskInput.value, 'unchecked');
        updateTasks(taskHeader.innerHTML);
      } // add condition to reject tasks with duplicate names
    });
  });

  // Remove task
  function deleteTaskClickListener() {
    const deleteTask = document.querySelectorAll('.delete');
    deleteTask.forEach((button) => {
      button.addEventListener('click', () => {
        const currentProject = projectList.getProjects().filter((project) => project.name === selectedProject)[0];
        const selectedTask = currentProject.getTasks().filter((object) => object.name === button.parentNode.children[1].innerHTML)[0];
        currentProject.deleteTask(selectedTask);
        updateTasks(taskHeader.innerHTML);
      });
    });
  }

  // Check/uncheck task
  function checkTaskClickListener() {
    const taskContainers = document.querySelectorAll('.todoContainer');
    taskContainers.forEach((button) => { // this event listener is also triggered when the delete button is pressed (minor bug)
      button.addEventListener('click', () => {
        const currentProject = projectList.getProjects().filter((project) => project.name === selectedProject)[0];
        const selectedTask = currentProject.getTasks().filter((object) => object.name === button.children[1].innerHTML)[0]; // button.children[1] is an ugly use of index
        if (selectedTask.status === 'unchecked') {
          selectedTask.setStatus('checked');
          button.children[0].classList.toggle('checked');
        } else if (selectedTask.status === 'checked') {
          selectedTask.setStatus('unchecked');
          button.children[0].classList.toggle('checked');
        }
      });
    });
  }

  updateProjects();
  updateTasks(selectedProject);
}
