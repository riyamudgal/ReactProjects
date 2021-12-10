import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
// import AddProduct from './components/funcComponent';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
           
      <Navbar/>
        
        <Switch>
        
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/classComponent" component={AddInventory}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <AddInventory/>
        <h1>Product Inventory form by Reactjs</h1>
        
      
      </Switch>
        {/* <AddProduct/> */}
        {/* <h1>We will cover here:</h1>
        <ul>
          <li>Reactjs ref vs syntheticEvent</li>
          <li>Form in reactjs</li>
          <li>Reactjs Hook: useState()</li>
          <li>React components: functional vs class</li>
          <li>Add product name, price, quantity in inventory data</li>
          <li>React-Bootstrap use case</li>
        </ul> */} 
      
      </header>
    </div>
    </Router>
  );
}

export default App;
