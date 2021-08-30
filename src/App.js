
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')

  const [alert, setalert] = useState(null)

  const showAlert = (message,type) => {
    setalert({
      msge: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#042d56"
      showAlert("dark mode has been enable", "success")
      
      // this how we create custom title for every function
      // document.title = `Textutile - Dark Mode`;
       
      // this is how we can irritate the User
      // setInterval(() => {
      //   document.title = `Textutile is Amazing`;
      // }, 2000);

      // setInterval(() => {
      //   document.title = `Download Textutile`;
      // }, 1500);

          
    }
    else {
      setmode('light') 
      document.body.style.backgroundColor = " white"
      showAlert("light mode has been enable", "success")
      // this how we create custom title for every function
      // document.title = `Textutile - Light Mode`;
    }
 }
  return (
    <>
        <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} about="About us" />
      
      <Alert alert = {alert}/>
           {/* <Navbar/> */}
          <div className="container my-5">
              <Switch>
                  <Route path="/about">
                  <About   mode={mode} />
                  </Route>
                  <Route path="/">
                    {/*showAlert={showAlert} it is use to pass the Function  */}
                  <Textform showAlert={showAlert} header="Try Textutils - word counter character counter remove extra space" mode={mode} />  
                  </Route>
                </Switch>
                  </div>
        </Router>

    </>
  );
}

export default App;
