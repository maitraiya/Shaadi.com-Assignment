import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {Route,NavLink, Routes} from 'react-router-dom';
import Login from './Login/Login';
import Contacts from './List/Contacts';

class App extends Component{
  render(){
    return(
      <>
        <Routes>
          <Route path="/" exact="true" element={<Login />} />
          <Route path="/home" exact="true" element={<Contacts />} />
        </Routes>
      </>
    );
  }
}
export default App;
