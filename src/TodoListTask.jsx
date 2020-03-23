import React from "react";

class TodoListTask extends React.Component {
    onIsDOneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }
    render = (props) => {
        return (
            <div className="todoList-task">
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDOneChanged}
                />
                <span>{this.props.title}, {this.props.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;