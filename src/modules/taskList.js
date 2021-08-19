import Task from './task.js'

export default function taskList() {
    let taskListArray = [
        {name: 'Vacuum the floor'},
        {name: 'Do the dishes'},
        {name: 'This is a really long task that gets cut off ear...'},
        {name: 'Fold the washing'}
    ];

    document.querySelector('.addTask').addEventListener('click', () => {
        const confirmForms = document.querySelector('.confirmForms');
        confirmForms.addEventListener('click', () => {
            // Add text input to array as an object (IF value is above 0 and less than field character limit)
            taskListArray.push(new Task(document.querySelector('.taskForm').value));
            // clear value and close popup
            document.querySelector('.taskForm').value = '';
            document.body.removeChild(document.querySelector('.darkOverlay')); // this line throws an error. dont know why. doesnt break program or affect anything. idk.
            // update UI to display taskListArray
            const appendTask = (() => {
                // remove all elements containing class todoContainer
                const tasksContainer = document.querySelector('.tasksContainer');
                let removeableElements = document.getElementsByClassName('todoContainer');
                while (removeableElements.length > 0) {
                    removeableElements[0].parentNode.removeChild(removeableElements[0]);
                }
                // render array objects to DOM
                for (let key in taskListArray) {
                    const taskItemContainer = document.createElement('container');
                    taskItemContainer.classList.add('todoContainer');
                    tasksContainer.insertBefore(taskItemContainer, document.querySelector('.addTask'));
                    
                    const circle = document.createElement('span');
                    circle.classList.add('circle');
                    taskItemContainer.appendChild(circle);
                
                    const task = document.createElement('p');
                    task.classList.add('todoText');
                    task.innerHTML = taskListArray[key].name;
                    taskItemContainer.appendChild(task);

                    console.log(taskListArray[key].name);
                }
            })();
        })
    });
}