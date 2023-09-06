import React, { useState } from 'react';
import TaskList from './TaskList';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return; // Não permite adicionar tarefas vazias

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      {/* Exibir a lista de tarefas usando o componente TaskList */}
      <TaskList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />

    </div>
  );
}

export default TodoApp;
