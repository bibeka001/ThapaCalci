import React from "react";
import {add, div,  sub, mult, } from './calci';

function App(){
return (
  <>
  <ul>
    <li>sum of two no is {add(40,4)}</li>
    <li> {div(40,14)}</li>
    <li>{sub(40,4)}</li>
    <li>{mult(40,4)}</li>
  </ul>
 );
}

export default App; 