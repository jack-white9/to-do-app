import Task from './task.js'

export default function taskList() {
    let taskListArray = [];

    document.querySelector('.addTask').addEventListener('click', () => {
        const confirmForms = document.querySelector('.confirmForms');
        confirmForms.addEventListener('click', () => {
            // Add text input to array as an object
            taskListArray.push(new Task(document.querySelector('.taskForm').value));
            console.log(taskListArray);
            // close popup
            document.body.removeChild(document.querySelector('.darkOverlay'));
            // update UI to display taskListArray
            //
        })
    });
}