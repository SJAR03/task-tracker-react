// import logo from './logo.svg';
import './App.css';
// import Father from './components/container/father';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import GreetingStyled from './components/pure/greetingStyled';
// import OptionalRender from './components/pure/optionalRender';
// import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Greeting Component jsx */}
      {/* <Greeting name={"Juan"}></Greeting> */}
      {/* Componente de ejemplo funcional */}
      {/* <GreetingF name="Juan"></GreetingF> */}
      {/* Componente de listado de tareas */}
      {/* <Task_listComponent></Task_listComponent> */}
      {/* <GreetingStyled name="Juan"></GreetingStyled> */}
      {/* Ejemplo de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 name={"Martin"}>
        Todo lo que hay aquí, es tratado como props.children
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* </header> */}
      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}

      {/* Ejemplo de uso de formik y yup */}
      {/* <LoginFormik></LoginFormik> */}

      <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
