import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {
    componentDidMount() {
        this.restoreState()
    }

    nextTodoListId = 0;

    state = {
        todoLists: [
            {id: ' 1', title: 'Jenya'},
            {id: ' 2', title: 'Lera'},
            {id: ' 3', title: 'Anton'}
            ],
        filterValue: "All"
    };

    saveState = () => {
        localStorage.setItem ("our-state" + this.props.id, JSON.stringify(this.state))
    }

    restoreState = () => {
        let state = this.state
        let setAsString = localStorage.getItem("todolists");
        if (setAsString) {
            state = JSON.parse(setAsString);
        }
        this.setState(state, () => {
            this.state.todoLists.forEach(todoLists => {
                if (todoLists.id >= this.nextTodoListId)
                    this.nextTodoListId = todoLists.id + 1
            })
        });
    }

    addTodoList = (newTodoListName) => {
        let newTodoList = {
            title: newTodoListName,
            id: this.nextTodoListId
        }
        this.nextTodoListId++
        this.setState({todoLists:[...this.state.todoLists, newTodoList]}, this.saveState)
    }

    render = () => {
        let todoLists = this.state.todoLists.map(t => {
            return <TodoList id={t.id} title={t.title}/>
        })
        return (
            <>
                <AddNewItemForm addItem={this.addTodoList}/>
                <div className="App">
                    {todoLists}
                </div>
            </>
        )
    }
}

export default App;

