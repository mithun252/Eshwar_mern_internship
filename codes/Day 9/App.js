import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import  Home  from './home';
import { About } from './about';
import { Contact } from './contact';
import { User} from './user';
import './home.css';
import Formtoredux from './formtoredux';
import { Newform } from './newform';
function App() {
  return (
    <Router>
    <div className="App">
      <nav>
            <div className="hm">
              <Link to="/home">Home</Link>
            </div>
              <div className='ab'>
              <Link to="/about">About</Link>
              </div>
            <div className='con'>
              <Link to="/contact">Contact</Link>
           </div>
           <div className='us'>
              <Link to="/users">Users</Link>
          </div>
          <div className='fr'>
            <Link to="/formtoredux">form</Link>
          </div>
          <div>
            <Link to="/newform">newform</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/users" Component={User}/>
          <Route path="/formtoredux" Component={Formtoredux}/>
          <Route path="/newform" Component={Newform}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
