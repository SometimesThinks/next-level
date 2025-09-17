# 🛡️ TypeScript 타입 가드 (Type Guards)

## 📋 개요

타입 가드는 TypeScript에서 런타임에 타입을 검사하고, 컴파일 타임에 타입을 좁혀주는 기능입니다. 이를 통해 더 안전하고 정확한 타입 체크를 할 수 있습니다.

## 🎯 기본 개념

### 타입 가드란?

타입 가드는 **런타임에 타입을 검사하는 함수**로, TypeScript 컴파일러에게 "이 값이 특정 타입이다"라고 알려주는 역할을 합니다.

```typescript
// 타입 가드 함수
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// 사용 예시
function processValue(value: unknown) {
  if (isString(value)) {
    // 이 블록에서 value는 string 타입으로 좁혀짐
    console.log(value.toUpperCase()); // ✅ 에러 없음
  }
}
```

## 🔍 타입 가드 문법

### 1. `value is Type` 문법

```typescript
function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}
```

### 2. `c is Text` 예시 (마크다운 파싱)

```typescript
import type { Text, Heading } from 'mdast';

function remarkCollectToc(toc: TocItem[]) {
  return () => (tree: Root) => {
    visit(tree, 'heading', (node: Heading) => {
      const text = node.children
        .filter((c): c is Text => c.type === 'text') // 타입 가드 사용
        .map((c) => c.value) // c는 이제 Text 타입으로 좁혀짐
        .join(' ');
    });
  };
}
```

## 🚀 타입 가드의 장점

### 1. 타입 안정성

```typescript
// 타입 가드 없이
function processNode(node: unknown) {
  if (node.type === 'text') {
    // node는 여전히 unknown 타입
    console.log(node.value); // ❌ 에러: Property 'value' does not exist
  }
}

// 타입 가드 사용
function isTextNode(node: unknown): node is Text {
  return typeof node === 'object' && node !== null && 'type' in node && node.type === 'text';
}

function processNode(node: unknown) {
  if (isTextNode(node)) {
    // node는 이제 Text 타입으로 좁혀짐
    console.log(node.value); // ✅ 에러 없음
  }
}
```

### 2. 코드 가독성

```typescript
// 명확한 의도 표현
const textNodes = children.filter((c): c is Text => c.type === 'text');
const headingNodes = children.filter((c): c is Heading => c.type === 'heading');
```

## 📚 다양한 타입 가드 패턴

### 1. 기본 타입 검사

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
```

### 2. 객체 타입 검사

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'email' in value &&
    typeof (value as any).id === 'number' &&
    typeof (value as any).name === 'string' &&
    typeof (value as any).email === 'string'
  );
}
```

### 3. 유니온 타입 검사

```typescript
type Status = 'loading' | 'success' | 'error';

function isStatus(value: unknown): value is Status {
  return typeof value === 'string' && ['loading', 'success', 'error'].includes(value);
}
```

### 4. 배열 타입 검사

```typescript
function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isUserArray(value: unknown): value is User[] {
  return Array.isArray(value) && value.every((item) => isUser(item));
}
```

## 🔧 실제 사용 예시

### 마크다운 AST 처리

```typescript
import type { Root, Heading, Text, Paragraph, Code } from 'mdast';

// 각 노드 타입별 타입 가드
function isHeading(node: any): node is Heading {
  return node.type === 'heading';
}

function isText(node: any): node is Text {
  return node.type === 'text';
}

function isParagraph(node: any): node is Paragraph {
  return node.type === 'paragraph';
}

function isCode(node: any): node is Code {
  return node.type === 'code';
}

// 사용 예시
function processMarkdownNodes(nodes: any[]) {
  nodes.forEach((node) => {
    if (isHeading(node)) {
      // node는 Heading 타입
      console.log(`Heading level ${node.depth}: ${node.children.map((c) => c.value).join('')}`);
    } else if (isText(node)) {
      // node는 Text 타입
      console.log(`Text: ${node.value}`);
    } else if (isParagraph(node)) {
      // node는 Paragraph 타입
      console.log('Paragraph with children:', node.children.length);
    } else if (isCode(node)) {
      // node는 Code 타입
      console.log(`Code block (${node.lang}): ${node.value}`);
    }
  });
}
```

### API 응답 처리

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

interface User {
  id: number;
  name: string;
}

// API 응답 타입 가드
function isApiResponse<T>(
  value: unknown,
  dataGuard: (data: unknown) => data is T,
): value is ApiResponse<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    'data' in value &&
    typeof (value as any).success === 'boolean' &&
    dataGuard((value as any).data)
  );
}

// 사용 예시
async function fetchUser(id: number): Promise<User | null> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();

  if (isApiResponse(data, isUser)) {
    return data.data; // data.data는 User 타입으로 좁혀짐
  }

  return null;
}
```

## ⚠️ 주의사항

### 1. 타입 가드는 런타임 검사

```typescript
// 잘못된 예시 - 컴파일 타임에만 체크
function badTypeGuard(value: unknown): value is string {
  return true; // 런타임 검사 없음
}

// 올바른 예시 - 런타임 검사 포함
function goodTypeGuard(value: unknown): value is string {
  return typeof value === 'string';
}
```

### 2. 타입 가드 함수는 순수 함수여야 함

```typescript
// 부작용이 있는 타입 가드는 피해야 함
let counter = 0;
function badTypeGuard(value: unknown): value is string {
  counter++; // 부작용
  return typeof value === 'string';
}
```

### 3. 복잡한 타입은 단계적으로 검사

```typescript
// 복잡한 객체는 단계적으로 검사
function isComplexObject(value: unknown): value is ComplexObject {
  if (typeof value !== 'object' || value === null) return false;

  const obj = value as any;

  // 필수 속성 검사
  if (!('id' in obj) || typeof obj.id !== 'number') return false;
  if (!('name' in obj) || typeof obj.name !== 'string') return false;

  // 선택적 속성 검사
  if ('email' in obj && typeof obj.email !== 'string') return false;

  return true;
}
```

## 🎯 모범 사례

### 1. 타입 가드 함수 네이밍

```typescript
// is + 타입명 패턴
function isString(value: unknown): value is string { ... }
function isUser(value: unknown): value is User { ... }
function isApiResponse(value: unknown): value is ApiResponse { ... }
```

### 2. 재사용 가능한 타입 가드

```typescript
// 공통 타입 가드를 별도 파일에 정의
// src/types/guards.ts
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// 사용
import { isString, isNumber } from './types/guards';
```

### 3. 타입 가드와 함께 사용할 수 있는 유틸리티

```typescript
// 타입 가드와 함께 사용하는 유틸리티 함수
function filterByType<T>(array: unknown[], typeGuard: (value: unknown) => value is T): T[] {
  return array.filter(typeGuard);
}

// 사용 예시
const mixedArray = [1, 'hello', true, 'world', 42];
const strings = filterByType(mixedArray, isString); // ['hello', 'world']
const numbers = filterByType(mixedArray, isNumber); // [1, 42]
```

## 📚 참고 자료

- [TypeScript 공식 문서 - 타입 가드](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [TypeScript Deep Dive - 타입 가드](https://basarat.gitbook.io/typescript/type-system/typeguard)
- [MDN - typeof 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)
