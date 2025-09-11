# TypeScript as const와 readonly 타입 어설션

## 문제 상황

`as const`를 사용한 객체에서 `Object.entries()`를 사용할 때 다음과 같은 타입 에러가 발생합니다:

```
Argument of type 'string' is not assignable to parameter of type 'never'.
```

## 원인 분석

### `as const`의 타입 추론

```typescript
// as const 없이
const TAG_CATEGORIES = {
  Frontend: ['React', 'Next.js', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
};
// 타입: { Frontend: string[]; Backend: string[]; }

// as const 사용시
const TAG_CATEGORIES = {
  Frontend: ['React', 'Next.js', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
} as const;
// 타입: { readonly Frontend: readonly ['React', 'Next.js', 'TypeScript']; readonly Backend: readonly ['Node.js', 'Express']; }
```

### 문제 발생 지점

```typescript
Object.entries(TAG_CATEGORIES).map(([categoryName, categoryTags]) => {
  // categoryTags의 타입이 readonly ['React', 'Next.js', ...]
  // 하지만 includes() 메서드는 일반 string[]을 기대
  categoryTags.includes(tag.name); // ❌ 타입 에러!
});
```

## 해결 방법들

### 방법 1: `readonly string[]` 타입 어설션 (권장)

```typescript
Object.entries(TAG_CATEGORIES).map(([categoryName, categoryTags]) => ({
  name: categoryName,
  tags: allTags.filter((tag) => (categoryTags as readonly string[]).includes(tag.name)),
}));
```

**장점:**

- `as const`의 타입 안전성 유지
- 불변성 보장
- IDE 자동완성 지원

### 방법 2: `as const` 제거

```typescript
export const TAG_CATEGORIES = {
  Frontend: ['React', 'Next.js', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
}; // as const 제거
```

**단점:**

- 타입 안전성 손실
- 런타임에만 오류 발견 가능

### 방법 3: 명시적 타입 정의

```typescript
export const TAG_CATEGORIES: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
};
```

## 실무에서의 선택 기준

### `as const` + 타입 어설션 사용 (권장)

```typescript
export const TAG_CATEGORIES = {
  Frontend: ['React', 'Next.js', 'TypeScript'],
  Backend: ['Node.js', 'Express'],
} as const;

// 사용시 타입 어설션
(categoryTags as readonly string[]).includes(tag.name);
```

**이유:**

- ✅ **타입 안전성**: 컴파일 타임에 정확한 타입 체크
- ✅ **자동완성**: IDE에서 정확한 값들만 제안
- ✅ **불변성**: 실수로 배열을 수정하는 것을 방지
- ✅ **성능**: 런타임 오버헤드 없음
- ✅ **실무 표준**: 대부분의 실무 프로젝트에서 사용

## 언제 `as const`를 사용해야 하는가?

### ✅ 사용하는 경우

- **설정 객체**: 카테고리, 상수, 설정값들
- **타입 안전성이 중요한 경우**
- **IDE 자동완성이 중요한 경우**
- **팀 규모가 큰 경우**
- **불변성이 중요한 경우**

### ❌ 사용하지 않는 경우

- 런타임에 동적으로 변경되는 경우
- 매우 간단한 설정
- 타입 어설션이 너무 복잡해지는 경우

## 추가 팁

### 타입 어설션을 더 깔끔하게

```typescript
// 헬퍼 함수 생성
const isTagInCategory = (tag: string, categoryTags: readonly string[]) =>
  (categoryTags as readonly string[]).includes(tag);

// 사용
tags: allTags.filter((tag) => isTagInCategory(tag.name, categoryTags));
```

### 타입 가드 사용

```typescript
const isStringArray = (arr: unknown): arr is string[] =>
  Array.isArray(arr) && arr.every((item) => typeof item === 'string');

// 사용
if (isStringArray(categoryTags)) {
  categoryTags.includes(tag.name);
}
```

## 결론

**실무에서는 `as const` + 타입 어설션 방법을 권장합니다.**

- 타입 안전성과 불변성을 유지하면서
- 필요한 경우에만 타입 어설션을 사용하여
- 코드의 품질과 유지보수성을 향상시킬 수 있습니다.

## 참고 자료

- [TypeScript as const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
- [TypeScript readonly arrays](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
- [TypeScript type assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

