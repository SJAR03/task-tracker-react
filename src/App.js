import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF';
import Task_listComponent from './components/container/task_list';

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
        <Task_listComponent></Task_listComponent>
      </header>
    </div>
  );
}

export default App;
