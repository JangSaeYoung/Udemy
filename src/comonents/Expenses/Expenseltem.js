// 비용 아이템을 만드는 컴포넌트
// 파일 이름을 보고 어떤 로직과 HTML코드가 파일 안에 있을지 알수 있다. 
// => 즉, 파일명은 로직과 HTML코드를 예상할 수 있는 이름으로 지어야한다. 

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // (1) props 가져올거야

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
);
}

export default ExpenseItem;



