import ExpenseItem from './comonents/Expenseltem.js';

// 과제
// 네 개의 비용 아이템 => 배열을 계속 둘 거다. 하지만
// 4개의 비용 아이템을 만드는 컴포넌트
// 새로운 컴포넌트는 App.js에 만들어져야 함.
// expenses 의 props를 새 컴포넌트에 보내야 함. 
function App() {

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

  return (
    <div>
      <p>Let's get started!</p>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}/>
      <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}/>
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}/>
      <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}/>
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