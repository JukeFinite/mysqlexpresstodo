import React from 'react';
import './app.css';
// Functional Components    Dumb Component


const purpleMode = true;

const RenderListItems = props => {
  return props.items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}

const Greetings = props => (
  <div>
    <h1>Hello World</h1>
    <p>Hi my name is { purpleMode ? props.name : 'Emmanuel'}</p>
    <p>{props.lastName}</p>
    <ul>
      <p>My favorite things to do in quarantine</p>
      <RenderListItems items={["Play videogames", 'Sleep', 'Code']}/>
    </ul>
    <ul>
      <p>My favorite movies to watch during the pandemic</p>
      <RenderListItems items={["Pulp Fiction", "John Wick", "Harry Potter"]}/>
    </ul>
  </div>
);


const App = props =>  (
  <div className="colorBlue" style={{ fontSize: '40px', backgroundColor: purpleMode ? 'purple' : 'green'}}>
    <Greetings name={props.name} lastName={props.lastName}/>
    <Greetings/>
  </div>
);



export default App;
