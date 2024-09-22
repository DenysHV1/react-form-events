import { Component } from 'react'

import { TodoList } from './TodoList/TodoList'

import { Inputs } from './Inputs/Inputs'

const list = [
   { id: 1, title: 'Task 1', completed: false },
   { id: 2, title: 'Task 2', completed: false },
   { id: 3, title: 'Task 3', completed: false },
]

export class App extends Component {
   state = {
      todoList: list,
      numItems: list.length,
      data: {},
   }

   deleteTodo = idTodo => {
      this.setState(({ todoList, numItems }) => {
         return {
            todoList: todoList.filter(({ id }) => id !== idTodo),
            numItems: numItems - 1,
         }
      })
   }

   handleTodoListCompleted = todoId => {
      this.setState(prevState => ({
         todoList: prevState.todoList.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
         ),
      }))
   }

   getDataForm = data => {
      console.log(data)
      this.setState({ data: data })
   }

   render() {
      const { todoList } = this.state
      const { numItems } = this.state
      const doneTasks = todoList.reduce(
         (acc, { completed }) => (completed ? (acc += 1) : acc),
         0
      )

      return (
         <>
            <TodoList
               list={todoList}
               deleteFn={this.deleteTodo}
               listLength={numItems}
               readyTasks={doneTasks}
               todoCompleted={this.handleTodoListCompleted}
            ></TodoList>

            <Inputs getData={this.getDataForm}></Inputs>
         </>
      )
   }
}
