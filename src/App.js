import './App.css';
import Infinitescroll from './components/Infintescroll';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Todo } from './components/Todo';
import { Fetchdata } from './components/Fetchdata';
import { Weather } from './components/Weather';
import { Pagination } from './components/Pagination';
import { Formvalidation } from './components/Formvalidation';
import { Useinfintescroll } from './hooks/Useinfintescroll';
import { Chat } from './components/Chat';
import { Userapi } from './components/Userapi';
import { Createtodo } from './backend-todo/Createtodo';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/infintescroll' element={<Infinitescroll />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/fetchdata' element={<Fetchdata />} />
          <Route path='/weather' element={<Weather />}  />
          <Route path='/page' element={<Pagination />}  />
          <Route path='/form' element={<Formvalidation />}  /> 
          <Route path='/socialmedia' element={<Useinfintescroll/>} />
          <Route path='/chat' element={<Chat />}  />
          <Route path= '/user' element={<Userapi />} />
          <Route path='/backendtodo' element= {<Createtodo />} />
         </Routes>
      </Router>
       
    </div>
  );
}

export default App;
