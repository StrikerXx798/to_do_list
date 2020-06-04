import {api} from "./api";
import {TaskType, TodoType, UpdateTaskType} from "../types/entities";
import {Dispatch} from "redux";

const ADD_TODOLIST_SUCCESS = "TodoList/Reducer/ADD_TODOLIST_SUCCESS";
const DELETE_TODOLIST_SUCCESS = "TodoList/Reducer/DELETE_TODOLIST_SUCCESS";
const DELETE_TASK_SUCCESS = "TodoList/Reducer/DELETE_TASK_SUCCESS";
const UPDATE_TODOLIST_TITLE_SUCCESS = "TodoList/Reducer/UPDATE_TODOLIST_TITLE_SUCCESS";
const ADD_TASK_SUCCESS = "TodoList/Reducer/ADD_TASK_SUCCESS";
const SET_TASKS_SUCCESS = "TodoList/Reducer/SET_TASKS_SUCCESS";
const UPDATE_TASK_SUCCESS = "TodoList/Reducer/UPDATE_TASK_SUCCESS";
const SET_TODOLISTS_SUCCESS = "TodoList/Reducer/SET_TODOLISTS_SUCCESS";

type InitialStateType = {
    todolists: Array<TodoType>
}

const initialState: InitialStateType = {
    todolists: []
};

const todolistReducer = (state = initialState, action: TodoActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_TASKS_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TODOLISTS_SUCCESS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case ADD_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: [action.newTodolist, ...state.todolists]
            };
        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case UPDATE_TODOLIST_TITLE_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) return tl;
                    else return {...tl, title: action.title}
                })
            };
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [action.newTask, ...tl.tasks]}
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            };


        default:
            return state
    }
};

export default todolistReducer;



// Action creators
type TodoActionTypes =
    AddTodolistSuccessType
    | GetTodolistsSuccessType
    | UpdateTaskSuccessType
    | DeleteTodoSuccessType
    | DeleteTaskSuccessType
    | UpdateTodolistTitleSuccessType
    | AddTaskSuccessTaskType
    | GetTasksSuccessType


type AddTodolistSuccessType = {
    type: typeof ADD_TODOLIST_SUCCESS,
    newTodolist:TodoType
}
const addTodolistSuccess = (newTodolist:TodoType): AddTodolistSuccessType => ({type: ADD_TODOLIST_SUCCESS, newTodolist: newTodolist});

type GetTodolistsSuccessType = {
    type: typeof SET_TODOLISTS_SUCCESS,
    todolists:Array<TodoType>
}

const getTodolistsSuccess = (todolists:Array<TodoType>): GetTodolistsSuccessType => ({type: SET_TODOLISTS_SUCCESS, todolists: todolists});

type UpdateTaskSuccessType = {
    type: typeof UPDATE_TASK_SUCCESS,
    taskId: string,
    obj: UpdateTaskType,
    todolistId: string
}

const updateTaskSuccess = (taskId: string, obj: UpdateTaskType, todolistId: string): UpdateTaskSuccessType => ({type: UPDATE_TASK_SUCCESS, taskId, obj, todolistId});

type DeleteTodoSuccessType = {
    type: typeof DELETE_TODOLIST_SUCCESS,
    todolistId: string
}

const deleteTodoSuccess = (todolistId: string): DeleteTodoSuccessType => ({type: DELETE_TODOLIST_SUCCESS, todolistId: todolistId});

type DeleteTaskSuccessType = {
    type: typeof DELETE_TASK_SUCCESS,
    todolistId: string,
    taskId: string
}

const deleteTaskSuccess = (todolistId: string, taskId: string): DeleteTaskSuccessType => ({type: DELETE_TASK_SUCCESS, todolistId, taskId});

type UpdateTodolistTitleSuccessType = {
    type: typeof UPDATE_TODOLIST_TITLE_SUCCESS,
    todolistId: string,
    title: string
}

const updateTodolistTitleSuccess = (todolistId: string, title: string): UpdateTodolistTitleSuccessType => ({type: UPDATE_TODOLIST_TITLE_SUCCESS, todolistId, title});

type AddTaskSuccessTaskType = {
    type: typeof ADD_TASK_SUCCESS,
    newTask: TaskType,
    todolistId: string
}

const addTaskSuccess = (newTask: TaskType, todolistId: string): AddTaskSuccessTaskType => ({type: ADD_TASK_SUCCESS, newTask, todolistId});

type GetTasksSuccessType = {
    type: typeof SET_TASKS_SUCCESS,
    tasks: Array<TaskType>,
    todolistId: string
}

const getTasksSuccess = (tasks: Array<TaskType>, todolistId: string): GetTasksSuccessType => ({type: SET_TASKS_SUCCESS, tasks, todolistId});

// Thunk creator
export const getTodolists = () => (dispatch: Dispatch<TodoActionTypes>) => {
    api.getTodolists()
        .then(res => {
            dispatch(getTodolistsSuccess(res.data));
        })
};

export const addTodolist = (title: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.createTodolist(title)
        .then(res => {
            let todolist = res.data.data.item;
            dispatch(addTodolistSuccess(todolist))
        });
};

export const getTasks = (todoId: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.getTasks(todoId)
        .then(res => {
            let allTasks = res.data.items;
            dispatch(getTasksSuccess(allTasks, todoId))
        });
};

export const addTask = (title: string, todoId: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.createTask(title, todoId)
        .then(res => {
            let newTask = res.data.data.item;
            dispatch(addTaskSuccess(newTask, todoId))
        });
};

export const changeTask = (taskId: string, todoId: string, task: TaskType, obj: UpdateTaskType) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.updateTask(taskId, todoId, task)
        .then(res => {
            dispatch(updateTaskSuccess(taskId, obj, todoId))
        })
};

export const deleteTodo = (todoId: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.deleteTodolist(todoId)
        .then(res => {
            dispatch(deleteTodoSuccess(todoId))
        });
};


export const deleteTask = (taskId: string, todoId: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.deleteTask(taskId, todoId)
        .then(res => {
            dispatch(deleteTaskSuccess(todoId, taskId))
        });
};

export const updateTitle = (title: string, todoId: string) => (dispatch: Dispatch<TodoActionTypes>) => {
    api.updateTodolistTitle(title, todoId)
        .then(res => {
            dispatch(updateTodolistTitleSuccess(todoId, title))
        });
};






