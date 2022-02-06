import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name: string = 'React'
  let age: number | string = 19
  let isStudent: boolean = true
  let hobbies: string[] = ['Robotics', 'Programming', 'Swimming', 'Computer Science', 'Electronics', 'Music', 'Finance', 'Space', 'Universe']


  // type pule
  let role: [string, number] = ['Programmer', 19]


  type familymembers = {
    name: string,
    age?: number,
  }


  let people: familymembers = {
    name: 'Abhay',
    age: 19,
  }
  // ? Defining Function type:
  let printName: (name: string) => void

  printName = (name) => {
    console.log(name)
  }

  printName('Abhay')

  let logname: (name: string) => void

  logname = (name) => {
    console.log(name)
  }
  logname('Abhay')

  // * how to define type of a function
  let add: (a: number, b: number) => number
  let subtract: (a: number, b: number) => number
  let multiply: (a: number, b: number) => number
  let divide: (a: number, b: number) => number


  add = (a, b) => {
    console.log(a + b)
    return (a + b)
  }
  add(2, 3)
  subtract = (a, b) => {
    return a - b
  }
  subtract(2, 3)

  multiply = (a, b) => {
    return a * b
  }

  console.log(typeof add)

  //? learning about interface in typescript

  interface name {
    name: string;
    age: number;
  }

  interface student extends name {
    class: string;
    rollno: number;
  }
  let student: student = {
    name: 'Abhay',
    age: 19,
    class: 'B.Tech',
    rollno: 230,
  }
  console.log(student)
  return (
    <div className="App">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores.
      <h2>
        {name}
      </h2>
      <h2>
        {age}
      </h2>
      <h1>
        {isStudent}
      </h1>
      <h1>
        {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
      </h1>

      <h1>
        Role: {role[0]}, Age:  {role[1]} years old
      </h1>

    </div>
  );
}

export default App;
