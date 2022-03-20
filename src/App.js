import { useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';

function App() {
  const[questionNumber, setQuestionNumber] =useState(1);
  const moneyPyramid = [
    {id:1, amount: '$100'},
    {id:2, amount: '$200'},
    {id:3, amount: '$300'},
    {id:4, amount: '$500'},
    {id:5, amount: '$1000'},
    {id:6, amount: '$2000'},
    {id:7, amount: '$4000'},
    {id:6, amount: '$8000'},
    {id:9, amount: '$15000'},
    {id:10, amount: '$50,000'},
  ].reverse();
  return (
    <div className="App">
      <div className='main'>
        <div className='top'>
          <div className='timer'>
            30
          </div>
        </div>
        <div className='bottom'><Trivia/></div>
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
           {moneyPyramid.map((m)=> (
          <li className= {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className='moneyListItemNumber'>{m.id}</span>
          <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
           ))}
          
           
        </ul>
      </div>
    </div>
  );
}

export default App;
