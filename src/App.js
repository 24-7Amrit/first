import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToDoHome } from './todo/to_do_home';
import { UserRegister } from './todo/user_register';
import { UserLogin } from './todo/user_login';
import { UserDashboard } from './todo/user_dashboard';
import { AddTask } from './todo/add_task';
import { EditTask } from './todo/edit_task';
import { UserError } from './todo/user_error';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
                <header>
                {/* <div>TO-DO</div> */}
                </header>
                <section>
                  <Routes>
                    <Route path='/' element={<ToDoHome />} />
                    <Route path='register' element={<UserRegister/>}/>
                    <Route path='login' element={<UserLogin/>}/>
                    <Route path='dashboard' element={<UserDashboard/>}/>
                    <Route path='add-task' element={<AddTask/>}/>
                    <Route path='edit-task' element={<EditTask/>}/>
                    <Route path='error' element={<UserError/>}/>
                  </Routes>
                </section>
              </BrowserRouter>
              







      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
