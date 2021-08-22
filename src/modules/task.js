export default class Task {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
    setStatus(_status) {
        this.status = _status;
    }
}