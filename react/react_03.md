# react_03

## Shared State
* state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우
* 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

---

## Composition
* '합성'이라는 뜻으로 이해하면 편함
* 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
* 여러 개의 컴포넌트들을 어떻게 조합할 것인지 고민 필요함

---

## Containment
* 하위 컴포넌트를 포함하는 형태의 합성 방법
* children이라는 prop를 사용해서 조합함
* Sidebar나 Dialog 같은 Box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없음

---

## Specialization
* 범용적인 개념을 구별이 되게 구체화하는 것
* 기존 객체 지향 언어에서는 상속(Inheritance)을 사용하여 Specialization을 구현
* React에서는 합성(Composition)을 사용하여 Specialization을 구현

---

## Inheritance
* 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것

---

### 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!

---

## 언제 Context를 사용하면 좋을까?
* 여러 개의 컴포넌트들이 접근해야하는 데이터
* 로그인 여부, 로그인 정보, UI 테마, 현재 선택 언어 등

---

## Context.Provider
* 데이터를 제공해주는 컴포넌트

---

## Provider value에서 주의해야 할 사항
* Provider 컴포넌트가 재렌더링될 때마다 모든 하위 consumer 컴포넌트가 재렌더링 됨

---

## Context.Consumer
```
<MyContext.Consumer>
    {value => // 컨텍스트의 값에 따라서 컴포넌트들을 렌더링}
</MyContext.Consumer>
```

---

## useContext()
```
function MyComponent(props) {
    const value = useContext(MyContext)

    return (
        ...
    )
}
```

---

## CSS
* Cascading Style Sheets

---

## Selector의 유형
* Element selector
* ID selector
* Class selector
* Universal selector
* Grouping selector
* Element의 상태와 관련된 selector(hover, active, focus 등)

---

## Layout과 관련된 속성
* display(none, block, inline, flex 등)
* visibility(visible, hidden 등)
* position(static, fixed, relative, absolute 등)

---

## font와 관련된 속성
* font-family
* font-size
* font-weight
* font-style

---

## 기타 속성
* background-color
* border

---

## Build
* 코드와 애플리케이션이 사용하는 이미지, CSS 파일 등의 파일을 모두 모아서 패키징하는 과정

---

## 배포
* build를 통해 생성된 정적인 파일들을 배포하려는 서버에 올리는 과정

---

## Automatic Batching
* 여러 가지 상태 업데이트를 한 번에 처리하는 것 -> 여러 상태 업데이트하더라도, 재렌더링 한 번만 발생

---

## Transitions
* 긴급한 업데이트와 긴급하지 않은 업데이트를 구분해서 처리하기 위한 개념
* 긴급한 업데이트: 사용자와 직접적인 인터렉션이 일어나는 경우(글자 입력, 버튼 클릭 등)
* 긴급하지 않은 업데이트: 사용자와 직접적인 인터렉션이 일어나지 않는 경우(서버로부터 결과 받아와서 보여주는 경우)

---

## Suspense
* 하위 컴포넌트(children)가 준비되기 전까지 렌더링을 중단하는 것
* P.S. 웹 사이트 규모, 컴포넌트 사이즈 커짐 -> Code Spliting 사용

---

## Strict Mode
* 개발 모드일 때 잠재적인 버그를 찾을 수 있는 모드

---

## 새로운 Hooks
* useId()
* useTransitions()
* useDeferredValue()
* useSyncExternalStore()
