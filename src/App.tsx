import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolist, getTodolists} from "./reducer";
import {AppStateType} from "./store";
import {TodoType} from "../types/entities";

type mapDispatchToProps = {
    getTodolists: () => void
    addTodolist: (title:string) => void
}

type mapStateToProps = {
    todolists: Array<TodoType>
}

type PropsType = mapDispatchToProps & mapStateToProps


class App extends React.Component<PropsType> {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.getTodolists()
    };

    addTodoList = (title) => {
        this.props.addTodolist(title)
    };

    render = () => {
        const todolists = this.props.todolists.map(tl => {
            return <TodoList key={tl.id}
                             id={tl.id}
                             title={tl.title}
                             tasks={tl.tasks}/>
        });

        return (
            <div>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        todolists: state.todolist.todolists
    }
};

export default connect<mapStateToProps, mapDispatchToProps, {}, AppStateType>(mapStateToProps, {getTodolists, addTodolist})(App);
