import axios from "axios";
import {TaskType, TodoType} from "../types/entities";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/todo-lists",
    withCredentials: true,
    // меняем API-KEY на собственный
    headers: {"API-KEY": "cfaface2-28da-4d76-88dc-dbbe029d9acd"}
});

type CommonApiType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export const api = {
    getTodolists() {
        return instance.get("");
    },
    createTodolist(title: string) {
        return instance.post <CommonApiType<{item: TodoType}>>("", {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete <CommonApiType<{}>>(`/${todolistId}` )
    },
    updateTodolistTitle(title: string, todolistId: string) {
        return instance.put(`/${todolistId}`, {title: title})
    },
    getTasks(todolistId: string) {
        return instance.get(`/${todolistId}/tasks`)
    },
    createTask(newTaskTitle: string, todolistId: string) {
        return instance.post(`/${todolistId}/tasks`, {title: newTaskTitle});
    },
    updateTask(taskId: string, todolistId: string, task: TaskType) {
        return instance.put <CommonApiType<{item: TaskType}>>(`/${todolistId}/tasks/${taskId}`,  task);
    },
    deleteTask(taskId: string, todolistId: string) {
        return instance.delete<CommonApiType<{}>>(`/${todolistId}/tasks/${taskId}`)
    }
};




