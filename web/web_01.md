# web_01

## World Wide Web
* 인터넷으로 연결된 컴퓨터들이 정보를 공유하는 거대한 정보 공간

---

## Web
* Web site, Web application 등을 통해 사용자들이 정보를 검색하고 상호 작용하는 기술

---

## Web site
* 인터넷에서 여러 개의 Web page가 모인 것으로, 사용자들에게 정보나 서비스를 제공하는 공간

---

## Web page
* HTML, CSS, JS 등의 웹 기술을 이용하여 만들어진,  "Web site"를 구성하는 하나의 요소

---

## HTML
* HyperText Markup Language
* 웹 페이지의 **의미와 구조를 정의**하는 언어

---

### HyperText
* 웹 페이지를 다른 페이지로 연결하는 링크
* 참조를 통해 사용하가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트

---

### Markup Language
* 태그 등을 이용하여 문서나 데이터의 **구조를 명시**하는 언어 ex) HTML, Markdown

---

## HTML 구조

### \<!DOCKTYPE html>
* '브라우저'가 이 문서가 html5 파일임을 알 수 있게 해주는 라인

---

### \<html lang="en"></html>
* 전체 페이지의 콘텐츠를 포함
* 모든 tag는 html tag의 자식으로 배치되어야함

---

### <meta>
* meta란 무엇에 대한 data로 이해하면 됨

---

## HTML Element(요소)
* Opening tag
* Closing tag
* Self closing tag
* **Opening tag + Content + Closing tag => Element**

---

### Inline Element  
ex) \<span>\</span>
* 줄바꿈이 발생하지 않는다.
* 영역이 컨텐츠의 크기만큼 차지한다.
* 높이와 넓이를 지정할 수 없다.

---

### Block Element
ex) \<div>\</div>
* 줄바꿈이 발생한다.
* 영역이 한 줄을 차지한다.
* 높이와 넓이를 지정할 수 있다.

---

## HTML Attributes(속성)

### 규칙
* 속성은 요소 이름과 속성 사이에 공백이 있어야 함
* 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백으로 구분함
* 속성 값은 열고 닫는 따옴표로 감싸야 함

---

### 목적
* 나타내고 싶지 않지만 추가적인 기능, 내용을 담고 싶을 때 사용
* CSS에서 해당 요소를 선택하기 위한 값으로 활용됨

---

### HTML attributes(속성) vs CSS property(속성)
* attributes(속성) -> '정적인'
* property(속성) -> '동적인'

---

## CSS
* Cascading Style Sheet
* 웹 페이지의 **디자인과 레이아웃**을 구성하는 언어
* 선택자(Selector)
* 속성(Property): Value(값) -> 선언(Declaration)

---

## CSS 적용 방법

### 인라인(Inline) 스타일
* HTML 요소 안에 style 속성 값으로 작성

---

### 내부(Internal) 스타일 시트
* head 태그 안에 style에 작성

---

### 외부(External) 스타일 시트
* 별도의 CSS 파일 생성 후 HTML link 태그를 사용해 불러오기

---

## 명시도(Specificity)
* 결과적으로 요소에 적용할 CSS 선언을 결정하기 위한 알고리즘
* CSS Selector에 가중치를 계산하여 어떤 스타일을 적용할지 결정
* 동일한 요소를 가리키는 2개 이상의 CSS 규칙이 있는 경우, 가장 높은 명시도를 가진 Selector가 승리하여 스타일이 적용됨

---

### 명시도가 높은 순서
1. Importance(**!important**)
2. Inline 스타일
3. 선택자(id > class > 요소)
4. 소스 코드 선언 순서

---

### !important
* 다른 우선순위 규칙보다 우선하여 적용하는 키워드
* Cascade의 구조를 무시하고 강제로 스타일을 적용하는 방식이므로 사용을 권장하지 않음

---

### 계단식(Cascade)
* 한 요소에 동일한 가중치를 가진 선택자가 적용될 때 CSS에서 마지막에 나오는 선언이 사용됨

---

## CSS 상속
* 기본적으로 CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속해 재사용성을 높임
1. 상속 되는 속성
* text 관련 요소(font, color, text-align 등)
2. 상속 되지 않는 속성:
* box model 관련 요소(width, height, border, box-sizing 등)
* position 관련 요소(position, top/right/bottom/left, z-index 등)