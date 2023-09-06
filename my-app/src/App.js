import React from 'react';
import TaskList from './TaskList'; // Importe o componente TaskList

function App() {
  return (
    <div>
      {/* app.js é onde é renderizado todo o código react */}
      <h1>Meu Aplicativo de Tarefas</h1>
      <TaskList />
    </div>
  );
}

export default App;
