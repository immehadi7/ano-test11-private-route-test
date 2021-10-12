import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './AllCompo/Home/Home';
import Shop from './AllCompo/Shop/Shop';
import Regis from "./AllCompo/Regis/Regis";
import Login from "./AllCompo/Login/Login";
import './App.css';
import Header from './AllCompo/Header/Header';
import Context from './Context/Context';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './AllCompo/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
       <Context>
       <BrowserRouter>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                      <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <PrivateRoute path="/shop">
                    <Shop></Shop>
                </PrivateRoute>
                <PrivateRoute path='/place_order'>
                      <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <Route path="/registration_page">
                    <Regis></Regis>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
            </Switch>
        </BrowserRouter>  
         </Context>   


    </div>
  );
}

export default App;
