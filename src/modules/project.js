import TodoList from './taskList.js'

export default class Project extends TodoList {
    constructor(name) {
        this.name = name;
        // perhaps todolist should be a child of the project class, inheriting the task objects from the project. idrk.
    }
}