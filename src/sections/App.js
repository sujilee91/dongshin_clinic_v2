import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedkit, faHeartbeat, faStethoscope, faHospital  } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import Subject from './Department'
import Main from './Main'
import About from './About'
import Info from './Info'
import Map from './Map'
import Footer from './Footer'

library.add(faMedkit, faHeartbeat, faStethoscope, faHospital)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Subject/>
        <Info/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
