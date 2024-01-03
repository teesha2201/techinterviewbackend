
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Navbar/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Nav/>
     </BrowserRouter>
    </div>
  );
}

export default App;
