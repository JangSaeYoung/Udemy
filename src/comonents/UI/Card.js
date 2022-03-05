// 상자처럼 보이는 애들 
// 카드 모양의 쉘 역할을 한다. 
// 재사용 래퍼 컴포넌트 props.className
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;


