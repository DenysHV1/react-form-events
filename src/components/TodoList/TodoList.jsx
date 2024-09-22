export const TodoList = ({
   list,
   deleteFn,
   listLength,
   readyTasks,
   todoCompleted,
}) => {
   return (
      <ul className='todoList'>
         <h1>Task list</h1>
         <p>
            Tasks : <span>{listLength}</span>
         </p>
         <p>
            Done : <span>{readyTasks}</span>
         </p>
         {list.map(({ id, title, completed }) => {
            return (
               <li key={id} className='itemTodo'>
                  <input
                     onChange={() => todoCompleted(id)}
                     type='checkbox'
                     className='checkboxStyle'
                     checked={completed}
                  />
                  <p>{title}</p>
                  <button onClick={() => deleteFn(id)}>Delete</button>
               </li>
            )
         })}
      </ul>
   )
}
