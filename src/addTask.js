export default function addTaskPopup() {
    const addTaskButton = document.querySelector('.addTask');
    addTaskButton.addEventListener('click', () => {
        const darkOverlay = document.createElement('div');
        darkOverlay.classList.add('darkOverlay');
        document.body.appendChild(darkOverlay);

        const popupContainer = document.createElement('container');
        popupContainer.classList.add('popupContainer');
        darkOverlay.appendChild(popupContainer);

        const popupHeading = document.createElement('p');
        popupHeading.classList.add('popupHeading');
        popupHeading.innerHTML = 'Add your task';
        popupContainer.appendChild(popupHeading);

        const taskForm = document.createElement('input');
        taskForm.setAttribute('type', 'text');
        taskForm.setAttribute('placeholder', 'What is your task?');
        taskForm.classList.add('taskForm');
        popupContainer.appendChild(taskForm);

        const timeForm = document.createElement('input');
        timeForm.setAttribute('type', 'text');
        timeForm.setAttribute('placeholder', 'When will it be done by?');
        timeForm.classList.add('timeForm');
        popupContainer.appendChild(timeForm);
    })
}