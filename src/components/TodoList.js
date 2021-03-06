import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: 'all',
        toggleAllComplete: true
    }
    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));

    }
    toggleComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }))
    };
    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    };
    handleDeleteTodo = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }
    removeAllTodosThatAreComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }));
    }

    render() {
        let todos = [];
        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {todos.map(todo =>
                    (
                        <Todo
                            text={todo.text}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            todo={todo}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                        />
                    )
                )}
                <div> todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                <button onClick={() => this.updateTodoToShow("all")}>all</button>
                <button onClick={() => this.updateTodoToShow("active")}>active</button>
                <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
                {this.state.todos.some(todo => todo.complete) ? <div><button onClick={this.removeAllTodosThatAreComplete}>remove all complete todos</button></div> : null}
                <div>
                    <button onClick={() =>
                        this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                complete: this.state.toggleAllComplete
                            })),
                            toggleAllComplete: !this.state.toggleAllComplete
                        })
                    }
                    >
                        toggle all complete: {`${this.state.toggleAllComplete}`}
                    </button>
                </div>
            </div>
        );
    }
}