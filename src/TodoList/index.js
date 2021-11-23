import React from "react"
const today = new Date();
function formatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday:'long'}
  ).format(date);
}
function TodoList(){
  return(
    <React.Fragment>
      <h1>Hedy Lamarr's Todos</h1>
      <img
      src="http://i.imgur.com/yXOvOSs.jpg"
      alt="Hedy Lamarr"
      className="photo"
      />
      <h1>To Do List for{formatDate(today)}</h1>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rchears a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </React.Fragment>
  )

}
export default TodoList