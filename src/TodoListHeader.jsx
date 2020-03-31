import React from "react";

class TodoListHeader extends React.Component {
    newTaskTitleRef = React.createRef();

    state = {
        error: false,
        title: ""
    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        if (newText === '')  {
            this.setState({error: true})}
        else {
            this.setState({error: false})
            this.props.addText(newText)
        };
    };

    onTitleChange = () => {
        this.setState({error: false});
    };

    onKeyPress = (e) => {
       if(e.key === "Enter") {
           this.onAddTaskClick();
       }
    };

    render = (props) => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={this.state.error === true ? "error": ''}
                           ref={this.newTaskTitleRef}
                           type="text"
                           placeholder="New task name"
                           onChange={this.onTitleChange}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}/>
                    <button onClick = {this.onAddTaskClick} >Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;