# Tailwind CSS Typography 클래스 순서 문제

## 문제 상황

MD 파일을 렌더링할 때 `prose-foreground` 클래스가 적용되지 않는 문제가 발생했습니다.

```tsx
// 문제가 되는 코드
<div
  className="prose-foreground prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>
```

**결과**: 텍스트 색상이 테마에 맞게 변경되지 않음

## 원인 분석

### 1. **CSS 특이성 (Specificity) 문제**

```css
/* Tailwind CSS의 기본 prose 스타일 */
.prose {
  color: #374151; /* 기본 회색 */
}

/* prose-foreground 클래스 */
.prose-foreground {
  color: hsl(var(--foreground)); /* 테마 색상 */
}
```

**문제**: `prose` 클래스가 `prose-foreground`보다 나중에 와서 색상을 오버라이드함

### 2. **prettier-plugin-tailwindcss의 정렬 순서**

`prettier-plugin-tailwindcss`는 알파벳 순서로 클래스를 정렬합니다:

```
prose-foreground → prose → prose-lg → max-w-none
```

하지만 CSS에서는 **나중에 오는 클래스가 우선순위**를 가지므로, `prose`가 `prose-foreground`를 덮어씁니다.

## 해결 방법들

### 방법 1: 클래스 순서 수동 조정 (임시 해결)

```tsx
// 올바른 순서
<div
  className="prose prose-lg prose-foreground max-w-none"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>
```

**단점**: Prettier가 다시 정렬하면 문제 재발생

### 방법 2: !important 사용 (빠른 해결)

```tsx
<div
  className="prose prose-lg !text-foreground max-w-none"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>
```

**단점**: CSS 안티패턴, 유지보수 어려움

### 방법 3: Tailwind CSS 설정으로 근본 해결 (추천)

`tailwind.config.js`에 typography 설정을 추가:

```js:tailwind.config.js
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ... 기존 설정 ...
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-lead': 'hsl(var(--muted-foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-bullets': 'hsl(var(--muted-foreground))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--border))',
            '--tw-prose-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-code': 'hsl(var(--muted-foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--muted))',
            '--tw-prose-th-borders': 'hsl(var(--border))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
```

## 왜 이 방법이 문제를 해결하는가?

### 1. **CSS 변수 시스템 활용**

```css
/* 기본 prose 클래스 */
.prose {
  color: hsl(var(--foreground)); /* CSS 변수 사용 */
}

/* 다크 모드에서 자동으로 색상 변경 */
.dark .prose {
  color: hsl(var(--foreground)); /* 다크 모드 색상 */
}
```

### 2. **테마 시스템과 완전 통합**

- **라이트 모드**: `--foreground: 0 0% 9%` (어두운 색)
- **다크 모드**: `--foreground: 0 0% 96%` (밝은 색)

### 3. **클래스 순서에 독립적**

```tsx
// 어떤 순서로 써도 동일하게 작동
className = 'prose prose-lg max-w-none prose-foreground';
className = 'prose-foreground prose prose-lg max-w-none';
```

## 추가 이점

### 1. **일관성**

- 전체 프로젝트에서 동일한 타이포그래피 색상
- 테마 변경 시 자동으로 모든 요소 업데이트

### 2. **유지보수성**

- `!important` 없이 깔끔한 코드
- CSS 특이성 문제 해결

### 3. **확장성**

- 새로운 색상 변수 추가 시 쉽게 적용
- 다른 컴포넌트에서도 동일한 패턴 사용 가능

## 적용 후 결과

```tsx
// 간단하고 깔끔한 코드
<div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
```

**결과**:

- ✅ 다크/라이트 모드에서 올바른 텍스트 색상
- ✅ Prettier 정렬과 충돌 없음
- ✅ 유지보수하기 쉬운 코드

## 참고 자료

- [Tailwind Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Prettier Tailwind CSS Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
