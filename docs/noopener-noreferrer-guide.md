# noopener와 noreferrer 속성 가이드

## 개요

`noopener`와 `noreferrer`는 HTML의 `<a>` 태그에서 `target="_blank"`와 함께 사용되는 보안 및 개인정보 보호 속성입니다.

## 속성 설명

### noopener

**목적**: 새 창에서 열린 페이지가 원본 페이지의 `window.opener`에 접근하지 못하게 차단

**동작 원리**:

- `target="_blank"`로 새 창을 열면 기본적으로 `window.opener`가 설정됨
- `noopener`를 추가하면 `window.opener`가 `null`로 설정됨
- 새 창에서 `window.opener.location = '악성사이트'` 같은 코드 실행 불가

**보안 위험**:

```javascript
// noopener 없이 새 창을 열면
window.open('https://example.com', '_blank');
// 새 창에서 다음과 같은 코드 실행 가능
window.opener.location = 'https://malicious-site.com';
```

### noreferrer

**목적**: 새 창에서 열린 페이지에 referrer 정보를 전송하지 않음

**동작 원리**:

- 기본적으로 새 창을 열면 `Referer` 헤더에 원본 페이지 URL이 포함됨
- `noreferrer`를 추가하면 `Referer` 헤더가 전송되지 않음

**개인정보 보호**:

```javascript
// noreferrer 없이
// Referer: https://my-site.com/page

// noreferrer 있으면
// Referer 헤더 없음
```

## 중요성

### 1. 보안 측면

**window.opener 공격 방지**:

- 악성 사이트가 원본 페이지를 조작하는 것을 방지
- 피싱 공격이나 사용자를 속이는 행위 차단
- 원본 페이지의 리소스에 대한 접근 차단

**실제 공격 예시**:

```html
<!-- 위험한 코드 -->
<a href="https://malicious-site.com" target="_blank">악성 링크</a>

<!-- 안전한 코드 -->
<a href="https://malicious-site.com" target="_blank" rel="noopener noreferrer">안전한 링크</a>
```

### 2. 개인정보 보호

**사용자 행동 추적 방지**:

- 어느 사이트에서 왔는지 정보를 숨김
- Google Analytics 등에서 referrer 정보를 차단
- 사용자의 개인정보 보호 강화

### 3. 성능 최적화

**리소스 사용 방지**:

- 새 창이 원본 페이지의 리소스를 사용하지 못하게 차단
- 불필요한 메모리 사용 방지
- 브라우저 성능 향상

## 사용법

### 기본 사용법

```html
<!-- 권장 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer"> 외부 링크 </a>

<!-- 또는 -->
<a href="https://example.com" target="_blank" rel="noopener"> 외부 링크 (noopener만) </a>
```

### Next.js에서 자동 적용

```typescript
// rehype-external-links 사용
.use(rehypeExternalLinks, {
  target: '_blank',
  rel: ['noopener', 'noreferrer']
})
```

### React에서 사용

```tsx
const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
```

## 브라우저 지원

- **noopener**: 모든 모던 브라우저 지원
- **noreferrer**: 모든 모던 브라우저 지원
- **구형 브라우저**: `noreferrer`가 `noopener` 기능도 포함

## 모범 사례

### 1. 항상 함께 사용

```html
<!-- 권장 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer"> 외부 링크 </a>
```

### 2. 내부 링크에는 사용하지 않음

```html
<!-- 내부 링크는 noopener 불필요 -->
<a href="/about">소개 페이지</a>

<!-- 외부 링크만 noopener 사용 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer"> 외부 링크 </a>
```

### 3. 자동화 도구 사용

```typescript
// 마크다운 파싱 시 자동 적용
.use(rehypeExternalLinks, {
  target: '_blank',
  rel: ['noopener', 'noreferrer']
})
```

## 결론

`noopener`와 `noreferrer` 속성은 웹 보안과 개인정보 보호에 필수적인 요소입니다. 외부 링크를 사용할 때는 반드시 이 속성들을 함께 사용하여 사용자의 안전을 보장해야 합니다.

## 참고 자료

- [MDN - rel="noopener"](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener)
- [MDN - rel="noreferrer"](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer)
- [OWASP - Link Security](https://owasp.org/www-community/attacks/Reverse_Tabnabbing)
