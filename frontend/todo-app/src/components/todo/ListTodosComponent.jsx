import React, { Component } from "react";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn Dance",
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Become an expert at dance",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Go to Srilanka",
          done: false,
          targetDate: new Date()
        }
      ]
    };
  }

  render() {
    return (
      <div className="ListTodosComponent">
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>Done</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;