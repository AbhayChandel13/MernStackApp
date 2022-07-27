import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Signup from './components/Users/Signup';
// import Login from './components/Users/Login';
// import Dashboard from './components/Dashboard';
// import About from './components/About'
// import Contact from './components/Contact';
// import Error from './components/error';
// import Logout from './components/Logout'
 



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  ReactDOM.render(
    
  <React.StrictMode>
    <App />
    {/* <UserContext.Provider value={{state, dispatch}}>
    <Router>
    <Routes>
    <Route path="/" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>

    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/logout" element={<Logout />}></Route>



    <Route path="*" element={<Error />} />
    </Routes>
  
    </Router>
    </UserContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
