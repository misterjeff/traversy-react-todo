import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input
                    name="title"
                    onChange={this.onChange}
                    placeholder="Add to-do..."
                    style={{ flex: '10', padding: '5px' }}
                    type="text"
                    value={this.state.title}
                />
                <input
                    className="btn"
                    style={{ flex: '1' }}
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}

export default AddTodo;