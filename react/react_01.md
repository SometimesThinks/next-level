# react_01

## 라이브러리
* 자주 사용하는 기능들의 모음

---

## 사용자 인터페이스(User Interface, UI) 프레임워크, 라이브러리
* Angular, Vue -> 프레임워크(자체적인 흐름 가지고 있음)
* React -> 라이브러리(흐름 제어 권한 개발자에게 있음)

---

## React 장점
* 빠른 업데이트&렌더링 속도
* Component-Based -> 재사용성 높음
* Meta라는 회사의 프로젝트 -> 업데이트 및 발전 가능성 높음
* 활발한 지식 공유&커뮤니티
* React Native 이용 -> 모바일 앱 개발 가능

---

## React 단점
* 방대한 학습량(업데이트 주기 짧음)
* 높은 상태 관리 복잡도

---

### Virtual DOM
* react는 real DOM 아닌 virtual DOM 사용
* DOM의 상태 변화 발생 시 업데이트 필요한 최소한의 부분만 업데이트 및 렌더링 -> 렌더링 속도 빠륾

---

### 재사용성(Reusability)
* 재사용성 높음 -> 개발 기간 단축 가능
* 유지, 보수 용이함

---

## JSX
* A syntax extension to JavaScript(JavaScript + XML/HTML)
```
const element = <h1>Hello, world!</h1>
```

---

## JSX의 역할

```
* JSX를 사용한 코드
const element = (
    <h1 className="greeting">
        Hello, World!
    </h1>
)
```
```
* JSX를 사용하지 않은 코드
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, World!'
)

```
* 간결한 코드 작성 가능 -> 생산성 향상 가능
* 필수는 아님

---

## JSX 장점
* 간결한 코드 작성 가능
* 가독성 향상 -> 버그 발견 쉬움
* Injection Attacks 방어

---

## JSX 사용법
* XML/HTML 사이에 {} 이용해 JS 코드 작성

---

## Elements
* 어떤 물체를 구성하는 성분
* the smallest building blocks of React apps
* React app을 구성하는 가장 작은 블록들
* 화면에서 보이는 것들을 기술
```
React.createElement(
    type,
    [props],
    [...children]
)
```
---

## Elemets의 형태
* JS 객체 형태로 존재

---

## Elements의 특징
* immutable(불변의, 변할 수 없는)
* elements 생성 후에는 children이나 attributes를 바꿀 수 없음

---

## Component
* JS의 함수 개념과 비슷하게 생각하면 이해 쉬움
* React component의 입력: props
* React component의 출력: React element

---

## Component 특징
* 모든 component는 그들의 Props에 관해서는 Pure 함수와 같은 역할 해야함
* 모든 component는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줘야함
* **Component 이름은 항상 대문자로 시작해야함**

---

## Component 합성과 추출
* Component 안에 또 다른 Component를 쓸 수 있음(합성)
* Component를 나누어 또 다른 Component로 사용 가능(추출)
* 재사용이 가능한 Component를 많이 가지고 있을 수록 개발 속도 빨라짐

---

## Props
* property의 줄임말 + s
* component의 속성
* Component에 전달할 다양한 정보를 담고 있는 JS 객체

---

## Props 특징
* Read-Only(읽을 수만 있음)
* 값을 변경할 수 없음
* P.S. 변경하고 싶다면? 새로운 값을 component에 전달해 새 element 생성

---

## Function Component
```
function Welcome(props){
    return <h1>안녕, {props.name}</h1>
}
```

---

## Class Component
```
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>
    }
}
```