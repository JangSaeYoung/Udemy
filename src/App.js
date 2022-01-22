import ExpenseItem from './comonents/Expenseltem.js';


function App() {
  return (
    <div>
      <p>제대로 확인하기</p>
      <p>This is also visible!</p>
      <ExpenseItem />
    </div>
  );
}

export default App;


// * 모든 컴포넌트는 APP.js에 내포되거나  컴포넌트에 내포될 것이다. 
// * 리엑트에서 컴포넌트는 자바스크립 함수일 뿐이다. 
// * 리엑트에서 소문자가 HTML요소를 만든다. 
// * 대문자로 시작하는 요소는 개발자가 정의한 요소다. /Html 요소처럼 써라! 