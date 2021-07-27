// import logo from './logo.svg';
// import JoinModal from './JoinModal'
import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Route,
  Switch,
  // Link,
} from "react-router-dom";
import Navigation from './Pages/Navigation';
import Login from './Pages/Login' 
import Register from './Pages/Register' 
import Chart from './Pages/Chart' 
import Home from './Pages/Home'
import GuardRoute from './Pages/GuardRoute'

function App (){
  const [isLogin, setLogin] = useState(false);
  const member = [
    // {"username": "admin", "password": "admin", "job": "Developer", "gender": "Male", "desc" : "aku adalah anak gembala", "aggrement": true },
    // {"username": "member", "password": "member", "job": "Jr Developer", "gender": "Female", "desc" : "aku adalah anak petani", "aggrement": false },
  ]
    return(
     <div className="App">
       <Navigation isLogin={isLogin} setLogin={setLogin}/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" > 
            <Login setLogin={setLogin} member={member}/>
          </Route>
          <Route  path="/register">
            <Register member={member}/>
          </Route>
          <GuardRoute  path="/chart"  isLogin={isLogin}>
            <Chart/>
          </GuardRoute>
       </Switch>
       {/* <p>{member[0].username}</p> */}
     </div>
    )
}

export default App;

// //  <>
// <JoinModal /> 
// </>
