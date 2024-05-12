# vue_06

## Routing
* 네트워크에서 경로를 선택하는 프로세스
* 웹 애플리케이션에서 다른 페이지 간의 전환과 경로를 관리하는 기술

---

## SSR에서의 Routing
* 서버 측에서 수행
* 서버가 사용자가 방문한 URL 경로를 기반으로 응답을 전송
* 링크를 클릭하면 브라우저는 서버로부터 HTML 응답을 수신하고 새 HTML로 전체 페이지를 다시 로드

---

## CSR에서의 Routing
* 클라이언트 측에서 수행
* 클라이언트 측 JavaScript가 새 데이터를 동적으로 가져와 전체 페이지를 다시 로드하지 않음

---

## SPA에서 Routing이 없다면
* 유저가 URL을 통한 페이지의 변화를 감지할 수 없음
* 페이지가 무엇을 렌더링 중인지에 대한 상태를 알 수 없음
* 브라우저의 뒤로 가기 기능을 사용할 수 없음
* 페이지는 1개이지만, 주소에 따라 여러 컴포넌트를 새로 렌더링하여 마치 여러 페이지를 사용하는 것처럼 보이도록 해야함

---

## Vue Router
* Vue 공식 라우터(The official Router for Vue.js)

---

## RouterLink
* 페이지를 다시 로드하지 않고 URL을 변경하여 URL 생성 및 관련 로직을 처리
* HTML의 \<a> 태그를 렌더링

---

## RouterView
* RouterLink URL에 해당하는 컴포넌트를 표시
* 원하는 곳에 배치하여 컴포넌트를 레이아웃에 표시할 수 있음

---

## router/index.js
* 라우팅에 관련된 정보 및 설정이 작성되는 곳
* router에 URL과 컴포넌트를 매핑

---

## views
* RouterView 위치에 렌더링 할 컴포넌트를 배치
* 기존 components 폴더와 기능적으로 다른 것은 없으며 단순 분류의 의미로 구성됨
* 일반 컴포넌트와 구분하기 위해 컴포넌트 이름을 View로 끝나도록 작성하는 것을 권장

---

## Named Routes
* 경로에 이름을 지정하는 라우팅

---

## Dynamic Route Matching
* URL의 일부를 변수로 사용하여 경로를 동적으로 매칭

---

## 매개변수를 사용한 동적 경로 매칭
* 주어진 패턴 경로를 동일한 컴포넌트에 매핑해야하는 경우 활용

---

## Nested Routes
* 중첩된 라우팅
* 애플리케이션의 UI는 여러 레벨 깊이로 중첩된 컴포넌트로 구성되기도 함
* 이 경우 URL을 중첩된 컴포넌트의 구조에 따라 변경되도록 이 관계를 표현할 수 있음
* 주의: 컴포넌트 간 부모-자식 관계 관점이 아닌 URL에서의 중첩된 관계를 표현하는 관점으로 봐야함
---

## children 옵션
* 배열 형태로 필요한 만큼 중첩 관계를 표현할 수 있음

---

## Programmatic Navigation(프로그래밍 방식 네비게이션)
* RounterLink 대신 JavaScript를 사용해 페이지를 이동하는 것
* 프로그래밍으로 URL 이동하기
* router의 인스턴스 메서드를 사용해 RouterLink로 \<a> 태그를 만드는 것처럼 프로그래밍으로 네비게이션 관련 작업을 수행할 수 있음

---


## router.push()
* 다른 위치로 이동하기(Navigate to a different location)
* 다른 URL로 이동하는 메서드
* 새 항목을 history stack에 push하므로 이전 URL로 이동할 수 있음
* RouterLink를 클릭했을 때 내부적으로 호출되는 메서드이므로, RouterLink를 클릭하는 것은 router.push()를 호출하는 것과 같음

---

## router.replace()
* 현재 위치 바꾸기(Replace current location)
* push 메서드와 달리 history stack에 새로운 항목을 push 하지 않고 다른 URL로 이동(이동 전 URL로 뒤로 가기 불가)

---

## Navigation Guard
* Vue router를 통해 특정 URL에 접근할 때 다른 URL로 redirect를 하거나 취소하여 내비게이션을 보호
* 라우트 전환 전/후 자동으로 실행되는 Hook

---

## Globally Guard(전역 가드)
* 애플리케이션 전역에서 모든 라우트 전환에 적용되는 가드
* 작성위치: index.js

---

## Per-route(라우터 가드)
* 특정 라우트에만 적용되는 가드
* 작성위치: index.js의 각 routes

---

## In-component(컴포넌트 가드)
* 컴포넌트 내에서만 적용되는 가드
* 작성위치: 각 컴포넌트의 \<script> 내부

---


## 보충 수업

---

## route vs router 
* {{ $route }} -> 현재 활성화된 객체
* {{ $router }} -> 애플리케이션 전체 단 1개, 전반적인 라우트들을 관리
* $router.back() 뒤로 가기
* $router.path(경로) / params(파라미터들)
* 둘 다 각 객체들의 프로퍼티, 메서드
---

## 구조와 로직의 분리
* component의 vue 파일 -> 로직(views'에' 그려질 것들)
* view의 vue 파일 -> 구조(이동할 페이지, 껍데기)