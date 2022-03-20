import React from 'react';
import NewExpense from './comonents/NewExpense/NewExpense';
import Expenses from './comonents/Expenses/Expenses';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


// return React.createElement(
//   'div', {},
//   React.createElement('h1', {}, "Let's get started"),
//   React.createElement(Expenses, {items: expenses})
// );
// }



  return (
    <div>
      <NewExpense />
      <Expenses items= {expenses} />
      
    </div>
  );
}

export default App;


// * 모든 컴포넌트는 APP.js에 내포되거나  컴포넌트에 내포될 것이다. 
// * 리엑트에서 컴포넌트는 자바스크립 함수일 뿐이다. 
// * 리엑트에서 소문자가 HTML요소를 만든다. 
// * 대문자로 시작하는 요소는 개발자가 정의한 요소다. /Html 요소처럼 써라! 

// * 유동적 출력 
// * props