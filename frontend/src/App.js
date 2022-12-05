import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      Bhaisahab
      <Routes>
       <Route path="/" element=<Homepage/>  ></Route>
       <Route path="/chat" element=<Chat/>  ></Route>
       <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
