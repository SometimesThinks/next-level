# database_01

## 데이터베이스(DB)
* 체계적인 **데이터 모음**

---

## 데이터
* 저장이나 처리에 효율적인 형태로 변환된 정보

---

## 파일(File) 이용 데이터 저장 방식
* 어디서나 쉽게 사용 가능
* 데이터를 구조적으로 관리하기 어려움

---

## 스프레드 시트(Spreadsheet) 이용 데이터 저장 방식
* 테이블의 열과 행을 사용해 데이터를 구조적으로 관리 가능

---

### 스트레드 시트의 한계
* 크기: 일반적으로 약 100만 행까지 저장 가능
* 보안: 단순히 파일이나 링크 소유 여부에 따른 단순한 접근 권한 기능 제공
* 정확성: 만약 데이터가 여러 시트에 분산되어 있다면 변경에 누락이 생기거나 추가 문제 발생 가능

---

## 데이터베이스 역할
* 데이터를 (구조적으로) 저장하고 조작(CRUD)

---

## 관계형 데이터베이스
* 데이터 간에 관계가 있는 데이터 항목들의 모음
* 테이블, 행, 열의 정보를 구조화하는 방식
* 서로 관련된 데이터 포인터를 저장하고 이에 대한 액세스를 제공

---

## 관계
* 여러 테이블 간의 (논리적) 연결
* 관계로 인해 두 테이블을 사용하여 데이터를 다양한 형식으로 조회할 수 있음

---

## 관계형 데이터베이스 관련 키워드
1. Table(aka. Relation): 데이터를 기록하는 곳
2. Field(aka. Column, Attribute): 각 필드에는 고유한 데이터 형식(타입)이 지정됨
3. Record(aka. Row, Tuple): 각 레코드에는 구체적인 데이터 값이 저장됨
4. Database(aka. Schema): 테이블의 집합
5. Primary Key(기본 키, PK)
* 각 레코드의 고유한 값
* 관계형 데이터베이스에서 레코드의 식별자로 활용
6. Foreign Key(외래 키, FK)
* 테이블의 필드 중 다른 테이블의 레코드를 식별할 수 있는 키
* 다른 테이블의 기본 키를 참조
* 각 레코드에서 서로 다른 테이블 간의 관계를 만드는 데 사용

---

## DBMS(Database Management System)
* 데이터베이스를 관리하는 소프트웨어 프로그램
* 데이터 저장 및 관리를 용이하게 하는 시스템
* 데이터베이스 사용자 간의 인터페이스 역할
* 사용자가 데이터 구성, 업데이트, 모니터링, 백업, 복구 등을 할 수 있도록 도움

---

## RDBMS(Relational Database Management System)
* 관계형 데이터베이스를 관리하는 소프트웨어 프로그램
* SQLite, MySQL, PostgreSQL, OracleDatabase 등

---

## SQL(Structure Query Language)
* 데이터베이스에 정보를 저장하고 처리하기 위한 프로그래밍 언어
* **Structure Query**: 테이블의 형태로 구조화된 관계형 데이터베이스에게 요청을 질의(요청)

---

## SQL Syntax
* SQL 키워드는 대소문자를 구분하지 않음(대문자 작성 권장)
* 각 SQL Statements 끝에는 세미콜론(';')이 필요
```
SELECT column_name FROM table_name;
```

---

## SQL Statements
* SQL을 구성하는 가장 기본적인 코드 블록

---

### DDL(Data Definition Language) - 데이터 정의
* 데이터의 기본 구조 및 형식 변경
* CREATE, DROP, ALTER

---

### DQL(Data Query Language) - 데이터 검색
* 데이터 검색
* SELECT

---

### DML(Data Manipulation Language) - 데이터 조작
* 데이터 조작(추가, 수정, 삭제)
* INSERT, UPDATE, DELETE

---

### DCL(Data Control Language) - 데이터 제어
* 데이터 및 작업에 대한 사용자 권한 제어
* COMMIT, ROLLBACK, GRANT, REVOKE

---

## Query
* **데이터베이스로부터 정보를 요청**하는 것
* 일반적으로 SQL로 작성하는 코드를 쿼리문(SQL문)이라고 함

---

## SELECT statement
* 데이블에서 데이터 조회 및 반환
* '*'(asterisk)를 사용하여 모든 필드 선택

---

## ORDER BY statement
* 조회 결과의 레코드를 정렬
* FROM clause 뒤에 위치
* 오름차순(ASC, 기본값), 내림차순(DESC)

---

## DISTINCT statement
* 조회 결과에서 중복된 레코드를 제거
* SELECT 키워드 바로 뒤에 위치

---

## WHERE statement
* 조회 시 특정 검색 조건을 지정

---

## LIKE Operator
* 값이 특정 패턴에 일치하는지 확인
* Wildcards와 함께 사용

---

### Wildcard Characters
* %: 0개 이상의 문자열과 일치하는지 확인
* _: 단일 문자와 일치하는지 확인

---

## LIMIT clause
* 조회하는 레코드 수를 제한
* FROM clause 뒤에 위치

---

## LIMIT syntax
* 하나 또는 두개의 인자 사용(0 또는 양의 정수)
* row_count는 조회하는 최대 레코드 수를 지정
```
SELECT select_list
FROM table_name
LIMIT [offset,] row_count;
```

---

## GROUP BY clause
* 레코드를 그룹화하여 요약본 생성
* '집계 함수'와 함께 사용

---

## Aggregation Functions(집계 함수)
* 값에 대한 계산을 수행하고 단일한 값을 반환하는 함수
* SUM, AVG, MAX, MIN, COUNT

---

## HAVING clause
* 집계 항목에 대한 세부 조건을 지정
* 주로 GROUP BY와 함께 사용, GROUP BY 없다면 WHERE처럼 동작

---

## SELECT statement 실행 순서
1. 테이블에서(FROM)
2. 특정 조건에 맞추어(WHERE)
3. 그룹화 하고(GROUP BY)
4. 만약 그룹화 조건이 있다면 맞추고(HAVING)
5. 조회하여(SELECT)
6. 정렬하고(ORDER BY)
7. 특정 위치의 값을 가져옴(LIMIT)

---

## CREATE TABLE statement
* 테이블 생성

---

## CREATE TABLE syntax
* 각 필드에 적용할 데이터 타입 작성
* 테이블 및 필드에 대한 제약조건(constraints) 작성
```
CREATE TABLE table_name (
    column_1 data_type constraints,
);
```

---

## Constraints(제약 조건)
* 테이블의 필드에 적용되는 규칙 또는 제한 사항
* 데이터의 무결성을 유지하고 데이터베이스의 일관성을 보장

---

### PRIMARY KEY
* 해당 필드를 기본 키로 지정
* INTEGER 타입에만 적용되며 INT, BIGINT 등과 같은 다른 정수 유형은 적용되지 않음

---

### NOT NULL
* 해당 필드에 NULL 값을 허용하지 않도록 지정

---

### FOREIGN KEY
* 다른 테이블과의 외래 키 관계를 정의

---
## AUTOINCREMENT keyword
* 자동으로 고유한 정수 값을 생성하고 할당하는 필드 속성

---

### AUTOINCREMENT 특징
* 필드의 자동 증가를 나타내는 특수한 키워드
* 주로 primary key 필드에 적용
* INTEGER PRIMARY KEY **AUTOINCREMENT**가 작성된 필드는 항상 새로운 레코드에 대해 이전 최대 값보다 큰 값을 할당
* 삭제된 값은 무시되며 재사용할 수 없게 됨

---

## ALTER TABLE statement
* 테이블 및 필드 조작
* ALTER TABLE ADD: 필드 추가
* ALTER TABLE RENAME COLUMN: 필드 이름 변경
* ALTER TABLE RENAME TO: 테이블 이름 변경

---

## DROP TABLE statement
* 테이블 삭제
```
DROP TABLE table_name;
```

---

## INSERT statement
* 테이블 레코드 삽입

---

## INSERT syntax
* INSERT INTO절 다음에 테이블 이름과 괄호 안에 필드 목록 작성
* VALUES 키워드 다음 괄호 안에 필드에 삽입할 값 목록 작성
```
INSERT INTO table_name (c1, c2, ...)
VALUES (v1, v2, ...);
```

---

## UPDATE statement
* 테이블 레코드 수정

---

### UPDATE syntax
* SET 절 다음에 수정할 필드와 새 값을 지정
* WHERE절에서 수정할 레코드를 지정하는 조건 작성
* WHERE절을 작성하지 않으면 모든 레코드를 수정
```
UPDATE table_name
SET column_name = expression,
[WHERE condition];
```

---

## DELETE statement
* 테이블 레코드 삭제

---

### DELETE syntax
* WHERE절을 작성하지 않으면 모든 레코드를 삭제
```
DELETE FROM table_name
[WHERE condition];
```

---

## JOIN이 필요한 순간
* 테이블을 분리하면 데이터 관리는 용이해질 수 있으나 출력시에는 문제가 있음
* 테이블 한 개만을 출력할 수 밖에 없어 다른 테이블과 결합하여 출력하는 것이 필요해짐
* 이러한 상황에 JOIN 사용

---

## JOIN clause
* 둘 이상의 테이블에서 데이터를 검색하는 방법

---

## INNER JOIN clause
* 두 테이블에서 값이 일치하는 레코드에 대해서만 결과를 반환

---

## INNER JOIN syntax
* FROM절 이후 메인 테이블 지정(table_a)
* INNER JOIN절 이후 메인 테이블과 조인할 테이블을 지정(table_b)
* ON 키워드 이후 조인 조건을 작성
* 조인 조건은 table_a와 table_b 간의 레코드를 일치시키는 규칙을 지정
```
SELECT select_list
FROM table_a
INNER JOIN table_b
ON table_b.fk = table_a.pk
```

---

## LEFT JOIN clause
* 오른쪽 테이블의 일치하는 레코드와 함께 왼쪽 테이블의 모든 레코드 반환

---

## LEFT JOIN syntax
* FROM절 이후 왼쪽 테이블 지정(table_a)
* LEFT JOIN절 이후 오른쪽 테이블 지정(table_b)
* ON 키워드 이후 조인 조건을 작성(왼쪽 테이블의 각 레코드를 오른쪽 테이블의 모든 레코드와 일치시킴)
```
SELECT select_list
FROM table_a
LEFT JOIN table_b
ON table_b.FK = table_a.PK;
```
---

## LEFT JOIN 특징
* 왼쪽 테이블의 모든 레코드를 표기
* 오른쪽 테이블과 매칭되는 레코드가 없으면 NULL을 표시

---