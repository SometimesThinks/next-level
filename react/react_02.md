# react_02

## State
* JS 객체
* React Component의 상태(데이터, 변경 가능한 데이터)
* state는 개발자가 직접 정의
* 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야함
* 직접 수정 불가(하면 안됨)

---

## Lifecycle
* React Component의 생명주기
* React Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트되다가 사라짐

---

## Function Component
* state 사용 불가
* lifecycle에 따른 기능 구현 불가
* **Hooks**

---

## Class Component
* 생성자에서 state를 정의
* setState() 함수를 통해 state 업데이트
* lifecycle methods 제공

---

## Hooks
* state, lifecycle, 최적화 관련 함수

---

## useState()
* state를 사용하기 위한 Hook
```
const [변수명, set함수명] = useState(초기값)
```

---

## useEffect()
* side effect(효과, 영향)를 수행하기 위한 Hook
* side effect는 다른 component에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없음
* react의 함수 component에서 side effect를 실행할 수 있게 해주는 Hook
```
useEffect(이펙트 함수, 의존성 배열)
-> 의존성 배열에 있는 변수들 중 값이 하나라도 변경되었을 때 실행됨

useEffect(이펙트 함수, [])
-> effect function이 mount, unmount시에 단 한 번씩만 실행됨

useEffect(이펙트 함수)
-> 의존성 배열 생략 시 component가 업데이트될 때마다 호출됨
```

---

## useMemo()
* Memoized value를 return하는 Hook
* 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨 -> 사용 의미 없음
* 의존성 배열이 빈 배열일 경우, component 마운트 시에만 호출됨
* P.S. Memoized value: Memoization된 value
```
const memoizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2)
    }
)
```

---

## useCallback()
* useMemo() Hook과 유사하지만 값이 아닌 함수를 반환
```
const memoizedCallback = useCallback(
    () => {
        doSomethong(의존성 변수1, 의존성 변수2)
    },
    [의존성 변수1, 의존성 변수2]
)
```
```
동일한 역할을 하는 두 줄의 코드

useCallback(함수, 의존성 배열)
useMemo(() => 함수, 의존성 배열)
```

---

## useRef()
* Reference를 사용하기 위한 Hook
* 내부의 데이터가 변경되었을 때 별도로 알리지 않음
* P.S. Reference: 특정 component에 접근할 수 있는 객체
```
const refContainer = useRef(초깃값)
```

---

## Hook 규칙
* 최상위 레벨에서만 호출해야함
* component가 렌더링될 때마다 항상 같은 순서로 호출되어야함
* React 함수 component에서만 Hook을 호출해야함

---

### eslint-plugin-react-hooks
* Hook 규칙을 따르는지, 안따르는지 알려주는 plugin

---

## Custom Hook
* 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 JS 함수
* 반드시 이름은 use로 시작해야함
* 여러 개의 component에서 하나의 Custom Hook을 사용할 때 component 내부에 있는 모든 state와 effects는 전부 분리되어있음
* 각 Custom Hook 호출에 대해서 분리된 state를 얻게 됨
* 각 Custom Hook 호출 또한 완전히 독립적

---

## Event(이벤트)
* 특정 사건을 의미(ex. 버튼 클릭 이벤트)

---

## Event Handler(Event Listener)
* 어떤 사건이 발생하면, 사건을 처리하는 역할

---

## Argument
* 함수에 전달할 데이터

---

## Conditional rendering
* 조건에 따른 렌더링(조건부 렌더링)
* 어떠한 조건에 따라서 렌더링이 달라지는 것

---

## Inline Condition
* 조건문을 코드 안에 집어 넣는 것

---

## Inline If
* if문의 경우, && 연산자를 사용

---

## Inlinf If-Else
* If-Else문의 경우 ? 연산자를 사용

---

## Component 렌더링 막는 방법
* null을 return하면 렌더링되지 않음

---

## Array(배열)
* JS의 변수나 객체들을 하나의 변수로 묶어놓은 것

---

## Key
* 각 객체나 아이템을 구분할 수 있는 고유한 값
* 아이템들을 구분하기 위한 고유한 문자열
* 같은 List에 있는 Elements 사이에서만 고유한 값이면 됨
* **map() 함수 안에 있는 Elements는 꼭 key가 필요함**

---

## Form
* 사용자로부터 입력을 받기 위해 사용

---

## HTML Form
* 자체적으로 state를 관리

---

## Controlled Components
* 모든 데이터를 state에서 관리
* 값이 React의 통제를 받는 Input Form Element
* 사용자의 입력을 직접적으로 제어할 수 있음

---

## File Input Tag
* 디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그
```
<input type='file' />
```