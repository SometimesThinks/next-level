# django_03

## App URL mapping
* 각 앱에 URL을 정의하는 것
* 프로젝트와 각 앱이 URL을 나누어 관리를 편하게 하기 위함

---

## include()
* 프로젝트 내부 앱들의 URL을 참조할 수 있도록 매핑하는 함수
* URL의 일치하는 부분까지 잘라내고, 남은 문자열 부분은 후속 처리를 위해 include된 URL로 전달

---

## Naming URL patterns
* URL에 이름을 지정하는 것
* path 함수의 name 인자를 정의해서 사용

---

## url tag
* 주어진 URL 패턴의 이름과 일치하는 절대 경로 주소를 반환
* {% url 'index' %} ---> {% url 'articles:index' %}

---

## Django Model
* DB의 테이플을 정의하고 데이터를 조작할 수 있는 기능들을 제공
* 테이블 구조를 설계하는 '청사진(blueprint)'

---

### model class 작성
```
# articles/models.py

class Article(models.Model):
    title = models.CharField(max_length=10)
    content = models.TextField()
```

---

### 제약 조건
* 데이터가 올바르게 저장되고 관리되도록 하기 위한 규칙
* '숫자만 저장하도록, 문자가 100자까지만 저장되도록 하는 등'

---

## Migrations
* model 클래스의 변경사항(필드 생성, 수정, 삭제 등)을 DB에 최종 반영하는 방법
* makemigrations ---> migrate

---

### python manage.py makemigrations
* model class를 기반으로 최종 설계도(migration) 작성

---

### python manage.py migrate
* 최종 설계도를 DB에 전달하여 반영

---

### 정리
* model class에 변경사항(1)이 생겼다면, 반드시 새로운 설계도를 생성(2)하고, 이를 DB에 반영(3)해야 한다.
(1) model class 변경
(2) makemigrations
(3) migrate

---

## Model Field
* DB 테이블의 필드(열)을 정의하며, 해당 필드에 저장되는 데이터 타입과 제약조건을 정의

---

## CharField()
* 길이의 제한이 있는 문자열을 넣을 때 사용
* 필드의 최대 길이를 결정하는 max_length는 필수 인자

---

## TextField()
* 글자의 수가 많을 때 사용

---

## DateTimeField()
* 날짜와 시간을 넣을 때 사용

---

### auto_now
* 데이터가 저장될 때마다 자동으로 현재 날짜시간을 저장

---

### auto_now_add
* 데이터가 처음 생성될 때만 자동으로 현재 날짜시간을 저장

---

## Automatic admin interface
* Django는 추가 설치 및 설정 없이 자동으로 관리자 인터페이스를 제공
* 데이터 확인 및 테스트 등을 진행하는데 매우 유용

---

### Migrations 기타 명령어
* python manage.py makemigrations
* python manage.py migrate
* python manage.py showmigrations
* python manage.py sqlmigrate articles 0001

---

### CRUD
* 소프트웨어가 가지는 기본적인 데이터 처리 기능
* Create(저장), Read(조회), Update(갱신), Delete(삭제)