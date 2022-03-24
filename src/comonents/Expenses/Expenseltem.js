// 비용 아이템을 만드는 컴포넌트

import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // (1) props 가져올거야
     // function clickHandler() {}
    const [title, setTitle] = useState(props.title);  // dafault 값. 컴포넌트 함수 내에서만 작동한다. 

    const clickHandler = () => {
       setTitle('Updated!!!'); // 
        console.log(title);
    } 

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
         <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Change Title</button> 
        {/* 버튼을 클릭 시 title 출력이 달라진다.  */}
    </Card>
);
}

export default ExpenseItem;

//State 
//왜 const를 사용하는 가?
// 컴포넌트 인스턴스 기반 단위 => 즉, 하나 이상의 컴포넌트를 생성할 때도 개별 상태를 가지게 된다. 
// 상태는 컴포넌트 인스턴스 기반 단위로 나누어져 있다!!
// 새로운 값을 할당 할 거면서 왜 상수를 사용했을까? => '='를 사용하여 값을 할당하지 않았다. 
// useState를 불러옴으러써 React에게 우리를 위해 값을 manage해야 한다고 말하는 거다. 
