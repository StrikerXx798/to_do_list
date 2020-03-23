import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "medium"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "React", isDone: false, priority: "high"}
        ],

        filterValue: "Completed"
    };

    addText = (newText) => {
        let newTask = {
            title: newText,
            isDone: true,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t != task) {
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTasks
        });
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addText = {this.addText} newTaskTitleRef = {this.newTaskTitleRef} />
                    <TodoListTasks changeStatus = {this.changeStatus} tasks = {this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true
                        }
                    })}/>
                    <TodoListFooter filterValue = {this.state.filterValue} changeFilter = {this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

