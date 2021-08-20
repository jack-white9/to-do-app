import Task from './task.js'

export default class TodoList {
    constructor() {
        this.tasks = []
        this.tasks.push(new Task('Vacuum the floor', 'unchecked'));
        this.tasks.push(new Task('Do the dishes', 'unchecked'));
        this.tasks.push(new Task('Fold the washing', 'unchecked'));
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(taskName, status) {
        this.tasks.push(new Task(taskName, status));
    }

    deleteTask(taskName) {
        const index = tasks.indexOf(taskName);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}