import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

    tasks = [
        {title: "JS", isDone: true, priority: "medium"},
        {title: "HTML", isDone: true, priority: "low"},
        {title: "CSS", isDone: true, priority: "low"},
        {title: "React", isDone: false, priority: "high"}
    ];

    filterValue = "Completed";

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks = {this.tasks}/>
                    <TodoListFooter filterValue = {this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

