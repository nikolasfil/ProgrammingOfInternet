'use strict';

import fs from 'fs/promises';

let tasks = [];

export let getAllTasks = async (userId) => {
    try {
        let data = await fs.readFile('model/json-file/task-list-model-json-file.json');
        tasks = JSON.parse(data);
        return tasks.filter(task => task.user_id === userId);
    }
    catch (err) {
        throw err;
    }
}

export let addTask = async (newTask, userId) => {
    try {
        let data = await fs.readFile('model/json-file/task-list-model-json-file.json');
        tasks = JSON.parse(data);
        newTask.id = tasks.length + 1;
        newTask.user_id = userId;
        newTask.createdAt = new Date().toISOString();   
        newTask.status = false;
        tasks.push(newTask);
        await fs.writeFile('model/json-file/task-list-model-json-file.json', JSON.stringify(tasks));
        return true;
    }
    catch (err) {
        throw err;
    }
}

export let toggleTask = async (taskId, userId) => {
    try {
        let data = await fs.readFile('model/json-file/task-list-model-json-file.json');
        tasks = JSON.parse(data);
        let task = tasks.find(task => task.id === taskId && task.user_id === userId);
        task.status = !task.status;
        await fs.writeFile('model/json-file/task-list-model-json-file.json', JSON.stringify(tasks));
        return true;
    }
    catch (err) {
        throw err;
    }
}

export let removeTask = async (taskId, userId) => {
    try {
        let data = await fs.readFile('model/json-file/task-list-model-json-file.json');
        tasks = JSON.parse(data);
        tasks = tasks.filter(task => task.id !== taskId || task.user_id !== userId);
        await fs.writeFile('model/json-file/task-list-model-json-file.json', JSON.stringify(tasks));
        return true;
    }
    catch (err) {
        throw err;
    }
}

