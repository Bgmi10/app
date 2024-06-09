import './App.css';
import Infinitescroll from './components/Infintescroll';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/infintescroll' element={<Infinitescroll />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
