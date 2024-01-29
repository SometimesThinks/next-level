# algorithm_01

## Algorithm(알고리즘)
: 유한한 단계를 통해 문제를 해결하기 위한 절차나 방법

---

## 시간 복잡도(Time Complexity)
- 실제 걸리는 시간을 측정한다.
- 실행되는 명령문의 개수를 계산한다.

---

### Big-O Notation(빅-오 표기법)
: 시간 복잡도 함수 중에서 가장 큰 영향력을 주는 n항만을 표시한다.

---

## 배열
: 일정한 자료형의 변수들을 하나의 이름으로 열거하여 사용하는 자료구조

---

### 배열 연습문제 gravity
```
N = int(input()) # 상자가 쌓여있는 가로 길이
arr = list(map(int, input().split()))

max_v = 0 # 가장 큰 낙차
for i in range(N - 1): # 낙차를 구할 위치
    cnt = 0 # 오른쪽에 있는 더 낮은 높이의 개수
    for j in range(i + 1, N):
        if arr[i] > arr[j]:
            cnt += 1
    if max_v < cnt: # 최대 낙차보다 크면
        max_v = cnt
print(max_v)
```

## 정렬

### 버블 정렬(Bubble Sort)
* 인접한 두 개의 우너소를 비교하며 자리를 계속 교환하는 방식
* 시간 복잡도 : O(N^2)
```
N = 6
arr = [7, 2, 5, 3, 1, 4]

def asc(arr, N):
    for i in range(N - 1, 0, -1): # 정렬할 구간의 마지막 인덱스
        for j in range(i): # 비교할 두 원소 중 왼쪽의 인덱스
            if arr[j] > arr[j + 1]: # 오름차순은 큰 수를 오른쪽으로
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def dec(arr, N):
    for i in range(N - 1, 0, -1): # 정렬할 구간의 마지막 인덱스
        for j in range(i): # 비교할 두 원소 중 왼쪽의 인덱스
            if arr[j] < arr[j + 1]: # 내림차순은 작은 수를 오른쪽으로
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```