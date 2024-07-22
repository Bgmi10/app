import './App.css';
import Infinitescroll from './components/Infintescroll';
import {BrowserRouter as Router , Routes , Route, Outlet} from 'react-router-dom'
import { Todo } from './components/Todo';
import { Fetchdata } from './components/Fetchdata';
import { Weather } from './components/Weather';
import { Pagination } from './components/Pagination';
import { Formvalidation } from './components/Formvalidation';
import { Useinfintescroll } from './hooks/Useinfintescroll';
import { Chat } from './components/Chat';
import { Userapi } from './components/Userapi';
import { Createtodo } from './backend-todo/Createtodo';
import { Dummyproduct } from './components/Dummyproduct';
import { Dummydetailpage } from './components/Dummydetailpage';
import { Phoneotpinput } from './components/Phoneotpinput';
import { Colorswitcher } from './components/Colorswitcher';
import { Accordion } from './components/Accordion';
import { Bookstoresearch } from './components/Bookstoresearch';
import { Todolist_2 } from './components/Todolist_2';
import { Pagniation_2 } from './components/Pagniation_2';
import { Dynamicfor } from './components/Dynamicfor';
import { CommentContainer } from './components/CommentContainer';
import { Protectedroutes } from './components/Protectedroutes';
import { Editui } from './components/text _editor/Editui';
import { Home } from './components/text _editor/Home';
import { Protectedroutefortexteditor } from './components/text _editor/Protectedroutefortexteditor';
import { BookUI } from './components/book _api/BookUI';
import { Simpletodo } from './components/simpletodo/Simpletodo';
import { Weather1 } from './components/Weather/Weather1';
import { Tictac } from './components/Tic toa/Tictac';
import { Traffic } from './components/Traffic';
import { Mousetracker } from './components/Mousetracker';
import { Accordian3 } from './components/Accordian/Accordian3';
import { Mainpage } from './components/Addtocart/Mainpage';
import Searchbar22 from './components/SearchbarUI/Searchbar22';


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
          <Route path='/dummyproduct' element={<Dummyproduct />} />
          <Route path='/dummyproductdetail/:id' element={<Dummydetailpage />} />
          <Route path='/phoneotp' element={<Phoneotpinput />} />
          <Route path='/colorswitcher' element={<Colorswitcher />} />
          <Route path='/accordion' element ={<Accordion />} />
          <Route path='/searchbook' element={<Bookstoresearch />} />
          <Route path='/todo-2' element={<Todolist_2 />}/> 
          <Route path='/pagination-2' element={<Pagniation_2 />}/> 
          <Route element={<Protectedroutes children={<Outlet />} />} >
          <Route path='/dynamic-form' element={<Dynamicfor /> } />
          <Route path='/nested-comment' element ={<  CommentContainer />} />
          </Route>
          <Route element={<Protectedroutefortexteditor childrenroute={<Outlet />}/>} >
        
        
          </Route>
          <Route path='/' element={<Editui />} />
          <Route path='/home-editor' element={<Home />} />
          <Route path='/book-api' element={<BookUI />} />
          <Route path='/simple-todo' element={<Simpletodo />} />
          <Route path='/weather-1' element={<Weather1 />} />
          <Route path='/tic' element={<Tictac />} /> 
          <Route path='/traffic' element={<Traffic />} />
          <Route path='/trackmousemove' element={<Mousetracker />} />
          <Route path='/accordian3' element={<Accordian3 />}  />
          <Route path = '/addtocart' element={<Mainpage />} />
          <Route path = '/searchbarui' element={< Searchbar22/>} />
           
          </Routes>
      </Router>
       
    </div>
  );
}

export default App;
