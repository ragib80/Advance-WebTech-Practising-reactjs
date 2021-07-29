
import { useState } from 'react';
import './App.css';

function App() {
  const departments = ['CSE', 'CIS', 'EEE', 'ARCH']

  const courses = [
    { courseName: 'AWPT', ID: '1108' },
    { courseName: 'DS', ID: '1109' },
    { courseName: 'DM', ID: '1110' },
    { courseName: 'IDB', ID: '1111' },
    { courseName: 'HCI', ID: '1112' },

  ]


  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ul>
          <h4>Available Department</h4>
          {
            departments.map(department => <li>{department}</li>)
          }
          <h4>Course names</h4>
          {
            courses.map(course => <li>{course.courseName}</li>)
          }
        </ul>
        {
          courses.map(course => <Course course={course}></Course>)
        }


        <Person name="ragib" id="18-38278-2" department={departments[0]} />
        <Person name="shahriar" id="18-635-5" department={departments[1]} />
        <Person name="XYZ" id="17-6589-2" department={departments[1]} />

      </header>
    </div>
  );
}

function Counter() {
  const countStyle = {
    border: '3px solid green',
    margin: '10px',
    width: '300px',
    height: '300px'
  }
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    //const newCount = count + 1;
    //setCount(newCount)
    setCount(count + 1);
  }
  return (
    <div style={countStyle}>
      <h3>Count Game</h3>
      <h1>count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div >
  )
}

const alertFunction = () => {
  alert("Registerd!");
}

function Course(props) {
  const courseStyle = {
    border: '1px solid blue',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    height: '300px',
    width: '300px',
    float: 'left'
  }
  const { courseName, ID } = props.course;
  console.log(courseName, ID)
  return (
    <div style={courseStyle}>
      <h2>Course  Name : {props.course.courseName}</h2>
      <h4>Id:{props.course.ID} </h4>
      <button onClick={alertFunction}>Register now</button>
    </div>
  )

}

function Person(props) {
  const personStyle = {
    border: '3px solid yellow',
    margin: '10px',
    width: '400px'
  }

  return (
    <div style={personStyle}>

      <h1>Name: {props.name}</h1>
      <h3>ID: {props.id}</h3>
      <h4>Department: {props.department}</h4>

    </div >

  );
}


export default App;
