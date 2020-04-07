import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    newTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All"
    };

    saveState = () => {
        localStorage.setItem ("our-state", JSON.stringify(this.state))
    }

    restoreState = () => {

    }

    addTask = (newText) => {
        let newTask = {
            id: this.newTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.newTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState( {
            tasks: newTasks
        }, this.saveState);
    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        }, this.saveState);
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            }
            else {
                return {...t, ...obj};
            }
        });
        this.setState({
            tasks: newTasks
        }, this.saveState)
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   tasks={this.state.tasks.filter(t => {
                                       if (this.state.filterValue === "All") {
                                           return true;
                                       }
                                       if (this.state.filterValue === "Active") {
                                           return t.isDone === false;
                                       }
                                       if (this.state.filterValue === "Completed") {
                                           return t.isDone === true;
                                       }
                                   })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

