import Project from './project'

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

    deleteProject(projectName) {
        const index = this.projects.indexOf(projectName);
        if (index > -1) {
            this.projects.splice(index, 1);
        }
    }
}