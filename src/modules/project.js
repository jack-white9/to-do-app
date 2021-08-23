import Task from './task';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
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
    const index = this.tasks.indexOf(taskName);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
