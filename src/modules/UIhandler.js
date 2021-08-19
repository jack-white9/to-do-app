import '../style.css';

export default function UIhandler() {
    //wrapper contents
    const wrapper = document.createElement('wrapper');
    document.body.appendChild(wrapper);
    const projectContainer = document.createElement('container');
    projectContainer.classList.add('projectContainer');
    wrapper.appendChild(projectContainer);

    const tasksContainer = document.createElement('container');
    tasksContainer.classList.add('tasksContainer');
    wrapper.appendChild(tasksContainer);

    //project container contents
    const projectHeader = document.createElement('h1');
    projectHeader.classList.add('projectHeader');
    projectHeader.innerHTML = 'Projects';
    projectContainer.append(projectHeader);

    const projectDivider = document.createElement('hr');
    projectDivider.classList.add('projectDivider');
    projectContainer.append(projectDivider);

    const homework = document.createElement('p');
    homework.classList.add('projects');
    homework.innerHTML = 'Homework';
    projectContainer.append(homework);

    const chores = document.createElement('p');
    chores.classList.add('projects');
    chores.innerHTML = 'Chores';
    projectContainer.append(chores);

    const charity = document.createElement('p');
    charity.classList.add('projects');
    charity.innerHTML = 'Charity';
    projectContainer.append(charity);

    const work = document.createElement('p');
    work.classList.add('projects');
    work.innerHTML = 'Work';
    projectContainer.append(work);

    const addProject = document.createElement('p');
    addProject.classList.add('projects');
    addProject.classList.add('addProject');
    addProject.innerHTML = '+ Add Project';
    projectContainer.append(addProject);

    //tasks container contents
    const tasksHeaderContainer = document.createElement('container');
    tasksHeaderContainer.classList.add('tasksHeaderContainer');
    tasksContainer.appendChild(tasksHeaderContainer);

    const tasksHeader = document.createElement('h1');
    tasksHeader.classList.add('tasksHeader');
    tasksHeader.innerHTML = 'Chores';
    tasksHeaderContainer.appendChild(tasksHeader);

    const edit = document.createElement('p');
    edit.classList.add('edit');
    edit.innerHTML = 'Edit';
    tasksHeaderContainer.appendChild(edit);

    const tasksDivider = document.createElement('hr');
    tasksDivider.classList.add('tasksDivider');
    tasksContainer.appendChild(tasksDivider);

    const tasksSubheader = document.createElement('h2');
    tasksSubheader.classList.add('tasksSubheader');
    tasksSubheader.innerHTML = 'I have to do these to keep the house tidy.';
    tasksContainer.appendChild(tasksSubheader);


    const containerTask1 = document.createElement('container');
    containerTask1.classList.add('todoContainer');
    tasksContainer.appendChild(containerTask1);

    const circle1 = document.createElement('span');
    circle1.classList.add('circle');
    containerTask1.appendChild(circle1);

    const task1 = document.createElement('p');
    task1.classList.add('todoText');
    task1.innerHTML = 'Vacuum the floor';
    containerTask1.appendChild(task1);

    const containerTask2 = document.createElement('container');
    containerTask2.classList.add('todoContainer');
    tasksContainer.appendChild(containerTask2);

    const circle2 = document.createElement('span');
    circle2.classList.add('circle');
    containerTask2.appendChild(circle2);

    const task2 = document.createElement('p');
    task2.classList.add('todoText');
    task2.innerHTML = 'Do the dishes';
    containerTask2.appendChild(task2);

    const containerTask3 = document.createElement('container');
    containerTask3.classList.add('todoContainer');
    tasksContainer.appendChild(containerTask3);

    const circle3 = document.createElement('span');
    circle3.classList.add('circle');
    containerTask3.appendChild(circle3);

    const task3 = document.createElement('p');
    task3.classList.add('todoText');
    task3.innerHTML = 'This is a really long task that gets cut off ear...';
    containerTask3.appendChild(task3);

    const containerTask4 = document.createElement('container');
    containerTask4.classList.add('todoContainer');
    tasksContainer.appendChild(containerTask4);

    const circle4 = document.createElement('span');
    circle4.classList.add('circle');
    containerTask4.appendChild(circle4);

    const task4 = document.createElement('p');
    task4.classList.add('todoText');
    task4.innerHTML = 'Fold the washing';
    containerTask4.appendChild(task4);

    const addTask = document.createElement('p');
    addTask.classList.add('addTask');
    addTask.innerHTML = '+ Add Task';
    tasksContainer.appendChild(addTask);

    const addTaskButton = document.querySelector('.addTask');
    const exitPopup = document.createElement('p');
    exitPopup.classList.add('exitPopup');
    exitPopup.innerHTML = '×';

    const darkOverlay = document.createElement('div');
    darkOverlay.classList.add('darkOverlay');
    
    const popupContainer = document.createElement('container');
    popupContainer.classList.add('popupContainer');

    const popupHeading = document.createElement('p');
    popupHeading.classList.add('popupHeading');
    popupHeading.innerHTML = 'Add your task';

    const taskForm = document.createElement('input');
    taskForm.setAttribute('type', 'text');
    taskForm.setAttribute('placeholder', 'What is your task?');
    taskForm.classList.add('taskForm');

    const confirmForms = document.createElement('button');
    confirmForms.classList.add('confirmForms');
    confirmForms.innerHTML = 'Add Task';

    addTaskButton.addEventListener('click', () => {
        document.body.appendChild(darkOverlay);
        darkOverlay.appendChild(popupContainer);
        popupContainer.appendChild(exitPopup);
        popupContainer.appendChild(popupHeading);
        popupContainer.appendChild(taskForm);
        popupContainer.appendChild(confirmForms)     
    });

    exitPopup.addEventListener('click', () => {
        document.body.removeChild(darkOverlay);
    });
}