import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedkit, faHeartbeat, faStethoscope, faHospital  } from '@fortawesome/free-solid-svg-icons'

library.add(faMedkit, faHeartbeat, faStethoscope, faHospital)

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
