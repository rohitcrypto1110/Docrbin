import { Component } from 'react';
import { Routes, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.js';
import UserPage from './Pages/UserPage.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/:id' element={<UserPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
