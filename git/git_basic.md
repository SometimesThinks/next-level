# git 개념 & git 기본 명령어
## 개념
working directory(local, 내 컴퓨터)  
staging area(무대, 가상의 공간)  
repository(github, 저장소)

---
## 기본 명령어

### git add  
: local에 있는 자료의 '변경사항'을 'stage'에 추가한다

### git commit  
: stage에 올라간 '변경사항'에 쪽지/메모를 남긴다  
***주의** : 좋은 commit message를 쓰자

### git push  
: stage에 올라와있는 파일을 저장소로 옮긴다  
*주의 : add, commit 없이 push 불가능

### git pull  
: repository에서 local로 '변경 사항'을 가져온다.

### git clone
: repository에서 local로 그대로 가져온다  
**주의 : 부모/ 자식 모두 git 저장소가 있다면 git 꼬일 가능성 높음**

---

### git branch
: 현재 위치를 알려준다 ex) *master

### git checkout 'ff6e013'
: 과거의 시점으로 가서 볼 수 있다 : GUI 이용해도 됨

### git revert 'ff6e013'
: 과거의 시점으로 돌아갈 수 있다 -> 충돌 났을 때와 같은 화면이 나타난다
**혹은 git push 취소하는 방법을 사용할 수도 있다**  
**다만, git revert가 선호된다(취소한 push도 참고할 상황이 생길 수 있다)**

---
### git 협업 과정 :  
fork -> add, commit, push -> pull request -> merge

### git clone vs git pull
새 폴더를 생성해 git clone 다시 받을 수 있다  
혹은 git pull을 사용할 수 있다

**파일의 크기가 크다면 clone 시간 오래 걸릴 수 있기 때문에 pull이 더 적절하다**  
**파일의 크기가 작다면 clone이 더 빠르고 쉬운 방법일 수 있다**

---

## git은 현업에서 많이 쓰이고, 매우 중요하다!

### 개발 시작 mindset
---
**무한대로 늘려서 생각해봐라(10,000번으로 늘려서 생각해봐라)**
: git reset HEAD [file]  
: git add .  
: git commit --amend