import TodoList from './taskList.js'

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = TodoList.tasks;
    }
}