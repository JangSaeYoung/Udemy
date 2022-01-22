import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
// 루트 컴포넌트를 위해 한 번만!!!! 하는 일!!!


// 1. index.js 파일이 실행되는 첫 번째 파일이다. 
// (1) react-dom / react  => 리엑트 라이브러리 
// (2) render 메소드  : 두 개의 매개변수 갖음.
// (3) defalt 자바스크립트 돔 API
//   - 글로벌도큐먼트객체 : ID로 특정 돔 HTML 요소를 선택.
//   - public/index.html => 하나의 HTML 파일만이 브라우저에 전달
//   - 싱글HTML파일 -> 리엑트 싱글 페이지 앱/ 스크린에서 뭘 보게 될지 업데이트 하는 것. 
//   - public/index.html
// 2. <APP /> => 우리가 Import한 것. 
//   - JS파일 중의 하나라면 .js 삭제해야 한다. 
//   - ex) import App from './App';
// 3. 앱도 결국 컴포넌트다.
//   - <APP /> 컴포넌트에 root라는 id가 있다. 
//   - ( <App />, document.getElementById('root'));
//   - import 와 export defalt 사용
// 4. JSX 
//   - 자바스크립트 내에 있는 HTML 코드 
//   - 변형된 코드 ( 개발자도구 / Sources 에서 확인 가능 )
//   - 브라우저에서 작동하는 언어로 변환
//   - 

// 5. 자바스크립트에서는 document.getElementByID('root').innerHTML = '' 
// => 내부 HTML을 어딘가에 설정해야해 했음. 
// => 위스타그램이랑 비교해서 볼것 (벨로그) 섹션3/30.
// => 명령형 (확실한 단계별 지시가 있다.)
// => 성가실 수 있다.  모든 지시를 일일이 적어야함. 
// => 리엑트는 요소라는 개념을 포함한다.

