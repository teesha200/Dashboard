import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          <Route path="/" element ={<Dashboard />}/>
          <Route path="/settings" element ={<Settings />}/>
        </Routes>
      </NavBar> 
    </div>
  );
}
export default App;