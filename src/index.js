import './style.css';
import loadhtml from './loadhtml.js';
import { addTaskPopup } from './addTask.js';
import { addTaskToObject } from './addTask.js';

console.log('index.js found')
loadhtml();
addTaskPopup();
addTaskToObject();