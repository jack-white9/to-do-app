import Project from './project'

export default class ProjectList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Chores'));
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

    deleteProject(projectName) { //bug: when multiple projects share name, it deletes the last project instead of the one specified
        for (let i = this.projects.length - 1; i >= 0; --i) {
            if (this.projects[i].name === projectName) {
                console.log('found')
                this.projects.splice(i, 1);
                break
            }
        }
    }
}