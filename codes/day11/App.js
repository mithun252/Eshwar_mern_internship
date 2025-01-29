import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Users from './Users';
import { Createuser } from './createuser';
import Updateuser from './updateuser';

function App() {
  return (  
    <div className="App">
      <BrowserRouter>
      <div className='head'>
        <nav>
          <div className='user'>
            <Link to='/users'>user</Link>
            </div>
          <div className='createuser'>
            <Link to='/createuser'>create user</Link>
  
          </div>
          <div className='updateuser'>
            <Link to='/updateuser'>update user</Link>
          </div>
        </nav>

      </div>
      <Routes>
        <Route path='/users' element={<Users/>} />
        <Route path='/createuser' element={<Createuser />} />
        <Route path='/updateuser' element={<Updateuser />} />
      </Routes>
      
      </BrowserRouter>

     
    </div>
  );
}

export default App;