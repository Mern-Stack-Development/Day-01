import React from 'react';
import UserProfile from './Components/userProfile';
import State from './Components/count';
import Welcome from './Components/hello';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <UserProfile
        name="John Doe"
        age={30}
        email="john@example.com"/>
      <State/>
    </div>
  );
}

export default App;


{/* <Welcome name="Mern"/>
<UserProfile
  name="John Doe"
  age={30}
  email="john@example.com"/>
<State/> */}