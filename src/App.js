import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingF';
// import Task_listComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Greeting Component jsx */}
        {/* <Greeting name={"Juan"}></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Juan"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <Task_listComponent></Task_listComponent> */}
        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        <Ejemplo2></Ejemplo2>
      </header>
    </div>
  );
}

export default App;
