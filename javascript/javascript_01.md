# javascript_01

## ECMAScript
* Ecma International이 정의하고 있는 표준화된 스크립트 프로그래밍 언어 명세
* 스크립트 언어가 준수해야 하는 규칙, 세부사항 등을 제공

---

## DOM(The Document Object Model)
* 웹 페이지(Document)를 구조화된 **객체**(객관적인 실체)로 제공하여 프로그래밍 언어가 페이지 구조에 접근할 수 있는 방법을 제공
* 문서 구조, 스타일, 내용 등을 변경할 수 있도록 함

---

## DOM API
* 다른 프로그램 언어가 웹 페이지에 접근 및 조작할 수 있도록 페이지 요소들을 객체 형태로 제공하여 이에 따른 메서드 또한 제공

---

## DOM 특징
* DOM에서 모든 요소, 속성, 텍스트는 하나의 객체
* 모두 document 객체의 하위 객체로 구성됨

---

## DOM tree
* 브라우저는 HTML 문서를 해석하여 DOM tree라는 객체 트리로 구조화
* 객체 간 상속 구조가 존재

---

## DOM 핵심
* 문서의 요소들을 객체로 제공하여 다른 프로그래밍 언어에서 **접근**하고 **조작**할 수 있는 방법을 제공하는 API

---

## 'document' 객체
* 웹 페이지 객체
* DOM Tree의 진입점
* **페이지를 구성하는 모든 객체 요소를 포함**

---

## DOM 조작 시 기억해야 할 것
* **웹 페이지를 동적으로 만들기**
* **웹 페이지를 조작하기**

---

### 조작 순서
1. 조작하고자 하는 요소를 선택(또는 탐색)
2. 선택된 요소의 콘텐츠 또는 속성을 조작

---

## document.querySelector(selector)
* 제공한 선택자와 일치하는 **element 한 개 선택**
* 제공한 CSS selector를 만족하는 첫 번째 element 객체를 반환(**없다면 null 반환**)

---

## document.querySelectorAll(selector)
* 제공한 선택자와 일치하는 **여러 element를 선택**
* 제공한 CSS selector를 만족하는 NodeList를 반환

---

## 'classList' property
* 요소의 클래스 목록을 DOMTokenList(유사 배열) 형태로 반환

---

## element.classList.add()
* 지정한 클래스 값을 추가

---

## element.classList.remove()
* 지정한 클래스 값을 제거

---

## element.classList.toggle()
* 클래스가 존재한다면 제거하고 false를 반환
* 존재하지 않으면 클래스를 추가하고 true를 반환

---

## element.getAttribute()
* 해당 요소에 지정된 값을 반환(조회)

---

## element.setAttribute(name, value)
* 지정된 요소의 속성 값을 설정
* 속성이 이미 있으면 기존 값을 갱신

---

## element.removeAttribute()
* 요소에서 지정된 이름을 가진 속성 제거

---

## 'textContent' property
* 요소의 텍스트 콘텐츠를 표현

---

## document.createelement(tagName)
* 작성한 tagName의 HTML 요소를 생성하여 반환

---

## Node.appendChild()
* 한 Node를 특정 부모 Node의 자식 NodeList 중 마지막으로 삽입
* 추가된 Node 객체를 반환

---

## Node.removeChild()
* DOM에서 자식 Node를 제거
* 제거된 Node를 반환

---

## 'style' property
* 해당 요소의 모든 style 속성 목록을 포함하는 속성

---

## Node
* DOM의 기본 구성 단위
* DOM 트리의 각 부분은 Node라는 객체로 표현됨
* Document Node -> HTML 문서 전체를 나타내는 노드
* Element Node -> HTML 요소를 나타내는 노드(ex. <p>)
* Text Node -> HTML 텍스트(Element Node 내의 텍스트 컨텐츠를 나타냄)
* Attribute Node -> HTML 요소의 속성을 나타내는 노드

---

## NodeList
* DOM 메서드를 사용해 선택한 Node의 목록
* 배열과 유사한 구조를 가짐
* index로만 각 항목에 접근 가능
* JavaScript의 배열 매세드 사용 가능
* querySelectAll()에 의해 반환되는 NodeList는 DOM의 변경사항을 실시간으로 반영하지 않음
* DOM이 나중에 변경되더라도 이전에 이미 선택한 NodeList 값은 변하지 않음

---

## Element
* Node의 하위 유형
* Element는 DOM 트리에서 HTML 요소를 나타내는 특별한 유형의 Node
* \<p>, \<div>, \<span>, \<body> 등의 HTML 태그들이 Element 노드를 생성
* Node의 속성과 메서드를 모두 가지고 있으며 추가적으로 요소 특화된 기능(className, innerHTML, id 등)을 가지고 있음
* 모든 Element는 Node이지만, 모든 Node가 Element인 것은 아님

---

## Parsing
* 구문 분석, 해석
* 브라우저가 문자열을 해석하여 DOM Tree로 만드는 과정
* HTML, CSS는 동시에 parsing 과정 후 JS parsing 과정 진행되므로 \<script>\</script>는 \</body> 바로 위에 위치해야함
* 현재는 **\<script>를 \<header>에 위치시킨 후, 'defer' 속성 사용할 수도 있음**

---

## 보충 수업

### 함수
* 입력을 받아 출력을 return하는 일정된 코드

---

### method(메소드)
* 객체 안에 있는 함수
* 함수 안에 method가 포함되있는 개념

---

### console.log
* console이라는 객체 안에 log라는 method