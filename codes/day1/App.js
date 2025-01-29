// import logo from './logo.svg';
// import './App.css';
// import {Rough} from './rough';
// import Parent from './parent';
// import Home from './home';
// // function App() {
//   return (
//     <div>
      
//       {/* <Rough name="vishal " age="19" />
//       <Rough name="bhupe" age="19"/>
//       <Rough name="mithun" age="19"/>
//       <Rough name="nigga " age="19"/>
//      */}
//      <Home/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//   <div>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//   </div>
//   )
    
// }
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           MITHUN
//         </a>
//       </header>
//     </div>
  


// import './App.css';
// import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
// import About  from './about';
// import Contact  from './contact';
// import {Home} from './home';

// function App() {
//     return (
//       <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//           <Link to="/home">Home</Link>
//           </li>
//           <li>
//           <Link to="/about">About</Link>
//           </li>
//           <li>
//           <Link to="/contact">Contact</Link>
//           </li>
//           </ul>
//          </nav>
//             <Routes>
//             <Route  path="/home" Component={Home}/>
//             <Route path="/about" Component={About}/>
//             <Route path="/contact" Component={Contact}/>
//             </Routes>
//       </div>
//       </Router>
//   );
// }

// export default App;
// import React,{useState} from 'react';
// const App = () =>
//   {
//     const [count,set] = useState(0);
//     const add = () =>
//     {
//       set(count+1)
//     }
//     const minus = () =>
//     {
//       set()
//       set(count-1)
//     }
//     const reset = () =>
//     {
//       set(0) 
//     }
//     return(
//       <div>
//         <h1>Counter : {count}</h1>
//         <button onClick={minus}>-</button> <span>Click</span> <button onClick={add}>+</button>
//         <br />
//         <button onClick={reset}>Reset</button>
//       </div>
//     )
//   }
//   export default App;




// import './App.css';
// import Spread from './spread';
// function App() {
//     return (
//       <div>
//         <Spread/>
//       </div>
//        );
//       }
      
//       export default App;
      /*<Router>
      <div>
        <nav>
          <ul>
            <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          </ul>
         </nav>
            <Routes>
            <Route  path="/home" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            </Routes>
            <Counter/>
      </div>
      </Router>*/
      /*import logo from './logo.svg';
import './App.css';
import {Rough} from './day4/rough';
import {BrowserRouter as Router,Route,Switch,Link, Routes} from 'react-router-dom';
import { Home } from './day4/home';
import { About } from './day4/about';
import { Contact } from './day4/contact';
import { Counter } from './day4/counter';*/


// import './App.css';
// import { Child1 } from './child1';
// import { Parent1 } from './parent1';
// import { Grandparent } from './grandparent';
// import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div>
      
//       <Parent1 />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import ProductList from './productlist';
// import ShoppingCart from './shoppingcart';

// function App() {
//     // State for the cart
//     const [cart, setCart] = useState([]);

//     // Products list
//     const products = ['Laptop', 'Smartphone', 'Headphone'];

//     // Function to add a product to the cart
//     const addToCart = (item) => {
//         setCart([...cart, item]);
//     };

//     return (
//         <div className="App">
//             <h1>ShoppingCart</h1>
//             <h3>Items in the Cart:</h3>
//             <ShoppingCart cart={cart} />
//             <h3>Product List</h3>
//             <ProductList products={products} addToCart={addToCart} />
//         </div>
//     );
// }

// export default App;
