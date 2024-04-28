# javascript_02

## 변수
* **어떤 '하나의 값'을 저장할 수 있는 메모리 공간 / 메모리 공간에 붙인 이름**
* a = 1 --해석--> a에 1을 **할당**한다 / 1을 a에 **할당**한다

---

## 할당
* 어떠한 하나의 값을 stack 메모리에 적재한 후, 메모리 공간에 변수라는 이름을 붙이는 게 할당 
```
const ssafy = 32

const ssafy; // 변수 선언문
ssafy = 32; // 변수 할당문
```
---

## 재할당
* 사용했던 변수를 다시 할당하면 재할당

---

## let
* 블록 스코프(block scope)를 갖는 지역 변수를 선언
* 재할당 가능
* 재선언 불가능
```
let number = 10
number = 20
let number = 10
let number = 20 # 재선언 불가능
```

---

## const
* 블록 스코프(block scope)를 갖는 지역 변수를 선언
* 재할당 불가능
* 재선언 불가능
```
const number = 10
number = 10 # 재할당 불가능
const number = 10
const number = 20 # 재선언 불가능
const number
```

---
## 변수 선언 키워드

### 결론
```
var a = 1
let b = 2
const c = 3
```
* 사용 비율: 0 : 5(1) : 95(99)
* var 사용하지 않지만, 읽기 위해 공부 필요 + 면접 대비 공부  

---

## 블록 스코프(block scope)
* if, for, 함수 등의 '중괄호({}) 내부'를 가리킴
* 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능

---

### 어떤 변수 선언 키워드를 사용해야 할까?
* 기본적으로 const 사용을 권장
* **재할당**이 필요하다면 그 때 let으로 변경해서 사용

---

## 원시 자료형(Primitive Type)
* 변수에 값이 직접 저장되는 자료형(불변, 값이 복사)
* Number, String, Boolean, null, undefiend

---

## 원시 자료형 예시
* 변수에 할당될 때 값이 복사됨
* 변수 간에 서로 영향을 미치지 않음
```
const bar = 'bar'
console.log(bar)

bar.toUpperCase()
console.log(bar)
```

---

## 참조 자료형(Reference Type)
* 객체의 주소가 저장되는 자료형(가변, 주소가 복사)
* Objects(Object, Array, Function)

---

## 참조 자료형 예시
* 객체를 생성하면 객체의 메모리 주소를 변수에 할당
* 변수 간에 서로 영향을 미침
```
const obj1 = { name: 'Alice}
```

---

## null
* 변수의 값이 없음을 의도적으로 표현할 때 사용
```
let a = null
console.log(a)
```
---

## undefined
* 변수 선언 이후 직접 값을 할당하지 않으면 자동으로 할당됨
```
let b
console.log(b)
```

---

## Boolean
* true / false
* 조건문 또는 반복문에서 Boolean이 아닌 데이터 타입은 '자동 형변환 규칙'에 따라 true 또는 false로 변환됨

---

## 동등 연산자(==)
* 두 피연산자가 같은 값으로 평가되는지 비교 후 boolean 값을 반환
* '암묵적 타입 변환' 통해 타입을 일치시킨 후 같은 값인지 비교

---

## 일치 연산자(===)
* 두 연산자의 값과 타입이 모두 같은 경우 true를 반환
* 같은 객체를 가리키거나, 같은 타입이면서 같은 값인지를 비교
* 엄격한 비교 이뤄지며, 암묵적 타입 변환이 발생하지 않음
* **특수한 경우를 제외하고는 동등 연산자가 아닌 일치 연산자 사용을 권장**

---

## if
* 조건 표현식의 결과값을 boolean 타입으로 변환 후 참/거짓을 판단

---

## 삼항 연산자
```
condition ? expression1 : expression2
```
* condition: 평가할 조건(true 또는 false로 평가)
* expression1: 조건이 true일 경우 반환할 값 또는 표현식
* expression2: 조건이 false일 경우 반환할 값 또는 표현식
```
const age = 20
const message = (age >= 18) ? '성인' : '미성년자'

console.log(message) // '성인'
```
---

## for ...in
* 객체의 열거 가능한 속성(property)에 대해 반복
```
for (variable in object) {
    statement
}
```

---

## for ...of
* 반복 가능한 객체(배열, 문자열 등)에 대해 반복
```
for (variable of iterable) {
    statement
}
```

---

## 변수 선언 키워드 - 'var'
* 재할당 가능&재선언 가능
* 함수 스코프(function scope) 가짐
* '호이스팅'되는 특성으로 인해 예기치 못한 문제 발생 가능
* 변수 선언 시 var, const, let 키워드 중 하나를 사용하지 않으면 자동으로 var로 선언됨

---

## 함수 스코프(function scope)
* 함수의 중괄호 내부를 가리킴
* 함수 스코프를 가지는 변수는 함수 바깥에서 접근 불가능

---

## 호이스팅(hoisting)
* 변수를 선언 이전에 참조할 수 있는 현상
* 변수 선언 이전의 위치에서 접근 시 undefined를 반환
* JavaScript에서 변수들은 실제 실행 시, 코드의 최상단으로 끌어올려짐(hoisted) -> var로 선언된 변수는 선언 시에 undefined로 값이 초기화되는 과정 발생

---