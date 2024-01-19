import './App.css';
import { BrowserRouter ,Routes, Route, Switch} from 'react-router-dom'
import  Navbar from './components/navbar';
import Cards from './pages/cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/cards" Component={Cards}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
