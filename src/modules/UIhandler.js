import '../style.css';

export default function UIhandler() {
    const wrapper = document.createElement('wrapper');
    wrapper.innerHTML += `
        <container class="projectContainer">
            <h1 class="projectHeader">Projects</h1>
            <hr class="projectDivider"></hr>
            <p class="projects">Homework</p>
            <p class="projects">Chores</p>
            <p class="projects">Charity</p>
            <p class="projects">Work</p>
            <p class="projects addProject">+ Add Project</p>
        </container>
        <container class="tasksContainer">
            <container class="tasksHeaderContainer">
                <h1 class="tasksHeader">Chores</h1>
                <p class="edit">Edit</p>
            </container>
            <hr class="tasksDivider"></hr>
            <h2 class="tasksSubheader">I have to do these to keep the house tidy.</h2>
            <container class="todoContainer">
                <span class="circle"></span>
                <p class="todoText">Vacuum the floors</p>
                <p class="delete">×</p> 
            </container>
            <container class="todoContainer">
                <span class="circle"></span>
                <p class="todoText">Do the dishes</p>
                <p class="delete">×</p> 
            </container>
            <container class="todoContainer">
                <span class="circle"></span>
                <p class="todoText">Fold the washing</p>
                <p class="delete">×</p> 
            </container>
            <p class="addTask">+ Add Task</p>
        </container>
    `
    document.body.appendChild(wrapper);
}