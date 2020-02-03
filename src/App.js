// Traversy - React JS Crash Course (https://www.youtube.com/watch?v=sBws8MSXN7A)
// Stopped at 1:08:24

import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk dog',
        completed: false
      },
      {
        id: 3,
        title: 'Grocery shop',
        completed: false
      }
    ]
  }

  // Toggle completion of to-do item
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete to-do item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
