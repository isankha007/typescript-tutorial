import React from 'react';
import './App.css';
import InputField from './component/InputField';

// let name:string;
// let age:number | string;
// let isStudent: boolean;
// let hobbies:string[];
// let role:[number,string];

// function printName(name:string){
//   console.log(name);
// }
// printName: (name:string)=> never;

// // printName('Sankhadeep');

// interface Person {
//   name:string;
//   age?: number;
// }
// let person:Person={
//   name:'sankha',
// }
// let lostsOfPeaple:Person[];


const App:React.FC =()=> {
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
