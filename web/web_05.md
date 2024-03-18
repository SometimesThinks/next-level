# web_05

## inline 요소는 content 크기만큼 영역을 차지하기 때문에 width와 height 속성 사용 불가능

---

## **CSS 명시도: !important > Inline > id 선택자 > class 선택자 > element(요소) 선택자**

---

## +(Adjacent Sibling Selector)
* 선택자와 선택자 사이에 + 사용 시 첫번째 선택자의 **바로 뒤에 나오는 형제 요소** 선택
* 선택자 사이의 관계가 바로 연속되는 형제 요소
* h2 + p => h2 바로 다음 p 요소 선택

---

## ~(General Sibling Selector)
* 선택자와 선택자 사이에 ~를 사용하면 첫번째 선택자 이후에 나오는 **모든 형제 요소** 선택
* 선택자 사이의 관계가 중간에 다른 요소 삽입되더라도 해당 요소 이후의 모든 형제 요소 선택
* h2 ~ p => h2 이후에 나오는 모든 p 요소 선택