# web_02

## CSS Box Model
* 모든 HTML 요소를 사각형 박스로 표현하는 개념
* 내용(content), 안쪽 여백(padding), 테두리(border), 외부 간격(margin)으로 구성되는 개념

---

## Box 구성 요소
* Content: 콘텐츠가 표시되는 영역
* Padding: 콘텐츠 주위에 위치하는 공백 영역
* Margin: 이 박스와 다른 요소 사이의 공백, 가장 바깥쪽 영역
* Border: 콘텐츠와 패딩을 감싸는 테두리 영역

---

## Box 타입
* Block
```
.index{
    display: block;
}
```
* Inline
```
.index{
    display: inline;
}
```

---

### Normal Flow
* CSS를 적용하지 않았을 경우 웹 페이지 요소가 기본적으로 배치되는 방향

---

### block 타입
* 항상 새로운 행으로 나뉨
* width와 height 속성을 사용하여 너비와 높이를 지정할 수 있음
* 기본적으로 width 속성을 지정하지 않으면 Box는 Inline 방향으로 사용 가능한 공간을 모두 차지함(너비를 사용가능한 공간의 100%로 채우는 것)
* h1~6, p, div

---

### inline 타입
* 새로운 행으로 나뉘지 않음
* width와 height 속성을 사용할 수 없음
* 수직 방향: padding, margins, borders가 적용되지만 다른 요소를 밀어낼 수 없음
* 수평 방향: padding, margins, borders가 적용되어 다른 요소를 밀어낼 수 있음
* a, img, span

---

### 수평 정렬 -> 행 가운데 정렬
* block -> margin 0px auto
* inline -> '부모' 요소에 text-align: center

---

### inline-block 타입
* Inline과 Block 요소 사이의 중간 지점을 제공하는 display 값
* block 요소의 특징을 가짐
* width 및 height 속성 사용 가능
* padding, margin 및 border로 인해 다른 요소가 밀려남
* **요소가 줄 바꿈 되는 것을 원하지 않으면서 너비와 높이를 적용하는 싶은 경우에 사용**

---

### none 타입
* 요소를 화면에 표시하지 않고, 공간조차 부여되지 않음

---

## CSS Layout
* 각 요소의 위치와 크기를 조정하여 웹 페이지의 디자인을 결정하는 것
* display, position, float, flexbox 등

---

## CSS Position
* 요소를 **Normal Flow**에서 제거하여 다른 위치로 배치하는 것
* 다른 요소 위에 올리기, 화면의 특정 위치에 고정시키기 등

---

## Position 유형

### static
* 기본값
* 요소를 Normal Flow에 따라 배치

---
### relative
* 요소를 Normal Flow에 따라 배치
* 자기 자신을 기준으로 이동
* 요소가 차지하는 공간은 static일 때와 같음

---

### absolute
* 요소를 Normal Flow에서 제거
* **가장 가까운 부모 요소 중 'static이 아닌' 부모 요소를 기준으로 배치됨**
* 문서에서 요소가 차지하는 공간이 없어짐

---

### fixed
* 요소를 Normal Flow에서 제거
* 현재 화면영역(viewport)을 기준으로 이동
* 문서에서 요소가 차지하는 공간이 없어짐

---

### sticky
* 요소를 Normal Flow에 따라 배치
* 요소가 일반적인 문서 흐름에 따라 배치되다가 스크롤이 특정 임계점에 도달하면 그 위치에서 고정됨(fixed)
* 만약, 다음 sticky 요소가 나오면 다음 sticky 요소가 이전 sticky 요소의 자리를 대체
* **why?** -> 이전 sticky 요소가 고정되어 있던 위치와 다음 sticky 요소가 고정되어야 할 위치가 겹치게 되기 때문

---

## z-index
* 요소가 겹쳤을 때 어떤 요소 순으로 위에 나타낼 지 결정
* 정수 값을 사용해 Z축 순서를 지정
* 더 큰 값을 가진 요소가 작은 값의 요소를 덮음

---

### Position의 역할
* 전체 페이지에 대한 레이아웃을 구성하는 것이 아닌 페이지 특정 항목의 위치를 조정하는 것

---

## CSS Flexbox
* 요소를 행과 열 형태로 배치하는 1차원 레이아웃 방식
* '공간 배열'&'정렬'

---

### main axis(주 축)
* flex item들이 배치되는 기본 축
* main start에서 시작하여 main end 방향으로 배치(기본 값)

---

### cross axis(교차 축)
* main axis에 수직인 축
* cross start에서 시작하여 cross end 방향으로 배치(기본 값)

---

### Flex Container
* display: flex; 혹은 display: inline-flex;가 설정된 부모 요소
* 이 컨테이너 1차 자식 요소들이 Flex Item이 됨
* flexbox 속성 값들을 사용하여 자식 요소 Flex Item들을 배치하는 주체

---
### 목적에 따른 속성 분류
1. 배치
* flex-direction
* flex-wrap
2. 공간 분배
* justify-content
* align-content
3. 정렬
* align-items
* align-self  
\* justitfy(주 축)  
\* align(교차 축)
---

## 반응형 레이아웃
* 다양한 디바이스와 화면 크기에 자동으로 적응하여 콘텐츠를 최적으로 표시하는 웹 레이아웃 방식