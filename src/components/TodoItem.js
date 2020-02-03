import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={ btnStyle }>X</button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
    background: '#ff0000',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    float: 'right',
    padding: '5px 9px'
}

// Example of using a style variable
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;