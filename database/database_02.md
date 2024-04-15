# database_02

## Many to One relationships(N:1 or 1:N)
* 한 테이블의 0개 이상의 레코드가 다른 테이블의 레코드 한 개와 관련된 관계
* Comment(N) - Article(1)

---

## ForeignKey(to, on_delete)
* N:1 관계 설정 모델 필드
* 작성하는 위치와 관계없이 테이블 필드 마지막에 생성됨

---

### to
* 참조하는 모델 class 이름

---

### on_delete
* 외래 키가 참조하는 객체(1)가 사라졌을 때, 외래 키를 가진 객체(N)를 어떻게 처리할 지를 정의하는 설정(데이터 무결성)
* CASCADE: 부모 객체(참조된 객체)가 삭제 됐을 때 이를 참조하는 객체도 삭제

---

## 역참조
* N:1 관계에서 1에서 N을 참조하거나 조회하는 것
* 1 -> N
* N은 외래 키를 통해 물리적으로 참조 가능하나, 1은 N을 참조하기 위한 별도의 역참조 기능 필요
```
artivle.comment_set.all()
```
모델 인스턴스.related manager(역참조 이름).QuerySet API

---

## related manager
* N:1 혹은 M:N 관계에서 역참조 시에 사용하는 매니저
* 'objects' -> QuerySet API 사용한 것처럼 'related manager' -> QuerySet API 사용 가능

---

### related manager 이름 규칙
* N:1 관계에서 생성되는 related manager의 이름은 참조하는 '모델명_set' 이름 규칙으로 만들어짐

---

## save(commit=False)
* DB에 저장하지 않고 인스턴스만 반환(Create, but don't save the new instance)

---