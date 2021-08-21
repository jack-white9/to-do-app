import Project from './task.js'

export default class ProjectList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Homework'));
        this.projects.push(new Project('Chores'));
        this.projects.push(new Project('Charity'));
        this.projects.push(new Project('Work'));
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(projectName) {
        this.projects.push(new Project(projectName));
    }

    deleteProject(taskName) {
        const index = this.tasks.indexOf(taskName);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}