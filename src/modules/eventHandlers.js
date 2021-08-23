import ProjectList from './projectList'

export default function eventHandlers() {

    let projectList = new ProjectList;
    const addProject = document.querySelector('.addProject');
    const projectListContainer = document.querySelector('.projectListContainer');

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
            }
        });
    });

    // Remove project
    function deleteProjectClickListener() {
    const deleteProject = document.querySelectorAll('.deleteProject');
    deleteProject.forEach(button => {
        button.addEventListener('click', () => {
            console.log(projectList.getProjects());
            projectList.deleteProject(button.parentNode.children[0].innerHTML);
            console.log(projectList.getProjects());
            updateProjects();
            })
        })
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
        deleteProjectClickListener(); // Give the items their event listeners
    }
}