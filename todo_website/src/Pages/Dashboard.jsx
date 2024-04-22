import React, { useState } from 'react';
import Header from '../../components/Header';
import { Card, Button, Form, Modal, Col, Row } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling
import Add from '../../components/Add';
import View from '../../components/View';

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [todoTitles, setTodoTitles] = useState(['', '', '', '', '']);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTodo = () => {
    const newTodos = [...todos];
    const newProject = {
      title: projectTitle,
      todos: todoTitles.map(title => ({ title: title.trim(), completed: false }))
    };
    newTodos.push(newProject);
    setTodos(newTodos);
    setProjectTitle('');
    setTodoTitles(['', '', '', '', '']);
    setShow(false);
  };

  const handleChangeProjectTitle = event => {
    setProjectTitle(event.target.value);
  };

  const handleChangeTodoTitle = (event, index) => {
    const newTodoTitles = [...todoTitles];
    newTodoTitles[index] = event.target.value;
    setTodoTitles(newTodoTitles);
  };
  const handleCheckboxChange = (projectIndex, todoIndex) => {
    const newTodos = [...todos];
    newTodos[projectIndex].todos[todoIndex].completed = !newTodos[projectIndex].todos[todoIndex].completed;
    setTodos(newTodos);
  };
  const getCompletedTodoCount = (project) => {
    return project.todos.filter(todo => todo.completed).length;
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-4">
        <Add/>
        </div>
        <div className="col-lg-8">
        <div>
        <h2>All Projects</h2>

        
      </div>
      <View/>
  
        </div>
      </div>
      
      
    </>
  );
}

export default Dashboard;
