import React from 'react';
import './App.css';
import { Person, Country} from './Components/Person'

function App() {
  return (
    <div className="App">
      <Person
          name= 'San.D'
          email="san.d@xyz.com"
          age={21}
          isMarried={true}
          friends={['Jake','jessica','Jerry']}
          country = {Country.India}
      />
    </div>
  );
}

export default App;
