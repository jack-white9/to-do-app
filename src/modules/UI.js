import '../style.css';
import Project from './project';
import ProjectList from './projectList';

export default function UI() {
// Skeleton HTML
  const wrapper = document.createElement('wrapper');
  wrapper.innerHTML += `
    <container class="projectContainer">
        <h1 class="projectHeader">Projects</h1>
        <hr class="projectDivider"></hr>
        <container class="projectListContainer"></container>
        <p class="addProject">+ Add Project</p>
    </container>
    <container class="tasksContainer">
        <container class="tasksHeaderContainer">
            <h1 class="tasksHeader">Chores</h1>
            <p class="edit">Edit</p>
        </container>
        <hr class="tasksDivider"></hr>
        <h2 class="tasksSubheader"><i>Click a task to check it off.</i></h2>
        <container class="todoListContainer"></container>
        <p class="addTask">+ Add Task</p>
    </container>
`;
  document.body.appendChild(wrapper);

  // Example projects
  const projectList = new ProjectList();
  const projectListContainer = document.querySelector('.projectListContainer');
  const projects = projectList.getProjects().map((project) => `
    <container class="projectItemContainer">
        <p class="projects">${project.name}</p>
        <p class="deleteProject">×</p> 
    </container>`).join('');
  projectListContainer.innerHTML += projects;

  // Example project contents
  const chores = new Project('Chores');
  const todoListContainer = document.querySelector('.todoListContainer');
  const taskList = chores.getTasks().map((task) => `
    <container class="todoContainer">
        <span class="circle"></span>
        <p class="todoText">${task.name}</p>
        <p class="delete">×</p> 
    </container>`).join('');
  todoListContainer.innerHTML += taskList;
}
