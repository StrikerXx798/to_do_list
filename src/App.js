import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    newTaskTitleRef = React.createRef();

    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "medium"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "React", isDone: false, priority: "high"}
        ],

        filterValue: "Completed"
    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        let newTask = {
            title: newText,
            isDone: true,
            priority: "low"
        };
        let newTasks =
            [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onAddTaskClick = {this.onAddTaskClick} newTaskTitleRef = {this.newTaskTitleRef} />
                    <TodoListTasks tasks = {this.state.tasks}/>
                    <TodoListFooter filterValue = {this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

