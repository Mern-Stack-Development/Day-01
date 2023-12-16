import React from 'react';
import UserProfile from './Components/userProfile';
import Welcome from './Components/hello';
import State from './Components/count';

function App() {
  return (
    <div className="App">
      <Welcome name="Mern"/>
      <UserProfile
        name="John Doe"
        age={30}
        email="john@example.com"/>
      <State/>
    </div>
  );
}

export default App;
