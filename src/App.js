import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RemoveDuplicateArrayOfObjects from './Trails/RemoveDuplicateArrayOfObjects';
import TimeFormater from './Trails/TimeFormater';
import ReactCounterUp from './Trails/ReactCounterUp';
import LearnRouter from './Trails/LearnRouter';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <RemoveDuplicateArrayOfObjects /> */}
//         {/* <TimeFormater /> */}
//         <ReactCounterUp />
//         {/* Tutorials works */}
//       </div>
//     );
//   }
// }

function App() {

  return (
    <div className="App">
      <h3>Hello</h3>
      <LearnRouter />
    </div>
  );
}

export default App;