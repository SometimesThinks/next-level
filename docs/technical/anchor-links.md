# 🔗 앵커 링크 동작 원리

## 📋 개요

앵커 링크는 HTML의 `id` 속성을 기반으로 페이지 내 특정 요소로 이동하는 기능입니다. 블로그 포스트에서 목차(TOC)를 클릭했을 때 해당 섹션으로 스크롤되는 기능을 구현할 때 사용됩니다.

## 🎯 동작 원리

### 1. HTML ID 속성 생성

```html
<h1 id="hello-world">Hello World</h1>
<h2 id="section-1">섹션 1</h2>
<h3 id="typescript-타입-가드">TypeScript 타입 가드</h3>
```

### 2. 앵커 링크 사용

```html
<!-- 같은 페이지 내 이동 -->
<a href="#hello-world">Hello World로 이동</a>
<a href="#section-1">섹션 1로 이동</a>

<!-- 다른 페이지의 특정 섹션으로 이동 -->
<a href="/posts/my-post#hello-world">포스트의 Hello World 섹션으로</a>
```

### 3. URL에서 직접 접근

```
https://example.com/post#hello-world
https://example.com/post#section-1
```

## 🔄 브라우저 동작 과정

1. **링크 클릭** → 브라우저가 `href="#hello-world"`를 감지
2. **ID 검색** → 페이지에서 `id="hello-world"`인 요소를 찾음
3. **스크롤 이동** → 해당 요소를 화면 상단에 위치시킴
4. **URL 업데이트** → 주소창에 `#hello-world` 추가

## 💻 구현 방법

### 마크다운에서 ID 자동 생성

```typescript
// lib/posts.ts
import { visit } from 'unist-util-visit';
import type { Root, Heading, Text } from 'mdast';

function remarkCollectToc(toc: TocItem[]) {
  return () => (tree: Root) => {
    visit(tree, 'heading', (node: Heading) => {
      const text = node.children
        .filter((c): c is Text => c.type === 'text')
        .map((c) => c.value)
        .join(' ');

      // ID 생성: 소문자 변환 + 공백을 하이픈으로 치환
      const id = text.toLowerCase().replace(/\s+/g, '-');

      // HTML 속성 추가
      (node.data ??= {}).hProperties = { id };

      // 목차에 추가
      toc.push({ depth: node.depth, value: text, id });
    });
  };
}
```

### ID 생성 규칙

```typescript
// 예시 변환
"Hello World" → "hello-world"
"안녕하세요" → "안녕하세요"
"TypeScript는 좋아요" → "typescript는-좋아요"
"API 사용법 (v2.0)" → "api-사용법-(v2.0)"
```

## 📝 실제 사용 예시

### 마크다운 입력

```markdown
# 목차

- [소개](#소개)
- [설치 방법](#설치-방법)
- [사용법](#사용법)
- [고급 기능](#고급-기능)

## 소개

여기는 소개 내용입니다...

## 설치 방법

여기는 설치 방법입니다...

## 사용법

여기는 사용법입니다...

## 고급 기능

여기는 고급 기능입니다...
```

### HTML 출력

```html
<h1>목차</h1>
<ul>
  <li><a href="#소개">소개</a></li>
  <li><a href="#설치-방법">설치 방법</a></li>
  <li><a href="#사용법">사용법</a></li>
  <li><a href="#고급-기능">고급 기능</a></li>
</ul>

<h2 id="소개">소개</h2>
<p>여기는 소개 내용입니다...</p>

<h2 id="설치-방법">설치 방법</h2>
<p>여기는 설치 방법입니다...</p>

<h2 id="사용법">사용법</h2>
<p>여기는 사용법입니다...</p>

<h2 id="고급-기능">고급 기능</h2>
<p>여기는 고급 기능입니다...</p>
```

## ⚠️ 주의사항

### 1. ID 중복 방지

```typescript
// 중복 ID 체크 및 처리
const existingIds = new Set<string>();
const id = text.toLowerCase().replace(/\s+/g, '-');
let finalId = id;
let counter = 1;

while (existingIds.has(finalId)) {
  finalId = `${id}-${counter}`;
  counter++;
}

existingIds.add(finalId);
```

### 2. 특수 문자 처리

```typescript
// URL-safe한 ID 생성
const id = text
  .toLowerCase()
  .replace(/[^\w\s-]/g, '') // 특수문자 제거
  .replace(/\s+/g, '-') // 공백을 하이픈으로
  .replace(/-+/g, '-') // 연속된 하이픈을 하나로
  .replace(/^-|-$/g, ''); // 앞뒤 하이픈 제거
```

### 3. 한글 처리

```typescript
// 한글도 그대로 유지 (URL 인코딩은 브라우저가 처리)
const id = text
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w\s-가-힣]/g, ''); // 한글 범위 포함
```

## 🚀 고급 기능

### 1. 부드러운 스크롤

```css
html {
  scroll-behavior: smooth;
}
```

### 2. 스크롤 오프셋 (고정 헤더 고려)

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  scroll-margin-top: 80px; /* 헤더 높이만큼 오프셋 */
}
```

### 3. 현재 섹션 하이라이트

```javascript
// Intersection Observer를 사용한 현재 섹션 감지
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 현재 보이는 섹션의 목차 항목 하이라이트
      updateActiveTocItem(entry.target.id);
    }
  });
});

// 모든 헤딩 요소 관찰
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
  observer.observe(heading);
});
```

## 📚 참고 자료

- [MDN - HTML id 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/id)
- [MDN - 앵커 링크](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#href)
- [unist-util-visit 문서](https://github.com/syntax-tree/unist-util-visit)
- [remark 플러그인 개발 가이드](https://unifiedjs.com/learn/guide/create-a-plugin/)
