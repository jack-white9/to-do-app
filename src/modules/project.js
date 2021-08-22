import TodoList from './taskList.js'

export default class Project extends TodoList {
    constructor(name) {
        this.name = name;
    }
}