import React from 'react';
import { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const  [todo, setTodo] = useState("");
  const  [todos, setTodos] = useState(["Menyapu", "Mengepel", "Memasak"]);

  const handleClick = (todo) => {


    setTodos([...todos, todo]);
    // todos.push(todo);
    // alert(todos);
  }

  const handleChange = (todo) => {
    setTodo(todo)
  }
  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleClick={handleClick} handleChange={handleChange} todo={todo}/>
      <ToDoList todos={todos}/>
    </div>
  );
};

export default ToDo;
