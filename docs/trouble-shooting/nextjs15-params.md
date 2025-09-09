# Next.js 15 Params Promise 변경사항

## 문제 상황

Next.js 15에서 동적 라우팅 페이지에서 `params`를 사용할 때 다음과 같은 에러가 발생할 수 있습니다:

```
Error reading post undefined: Error: ENOENT: no such file or directory, open '/path/to/undefined.md'
```

이는 `params.slug`가 `undefined`로 전달되어 발생하는 문제입니다.

## 원인

Next.js 15부터 `params`가 **Promise로 래핑**되었습니다. 이전 버전에서는 직접 접근할 수 있었지만, 이제는 `await`를 사용해야 합니다.

## 해결 방법

### ❌ 잘못된 방법 (Next.js 14 이하 방식)

```tsx
// 이 방식은 Next.js 15에서 작동하지 않습니다
const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  return <PostDetail slug={params.slug} />; // params.slug가 undefined
};

export async function generateMetadata({ slug }: { slug: string }) {
  // slug가 undefined로 전달됨
  const post = await getPostBySlug(slug);
  // ...
}
```

### ✅ 올바른 방법 (Next.js 15+)

```tsx
interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
}

// 페이지 컴포넌트
const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { slug } = await params; // Promise를 await로 해결
  return <PostDetail slug={slug} />;
};

// 메타데이터 생성
export async function generateMetadata({ params }: PostDetailPageProps) {
  const { slug } = await params; // Promise를 await로 해결
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

export default PostDetailPage;
```

## 주요 변경사항

### 1. 타입 정의 변경

```tsx
// 이전
{
  params: {
    slug: string;
  }
}

// Next.js 15+
{
  params: Promise<{ slug: string }>;
}
```

### 2. 사용법 변경

```tsx
// 이전
const slug = params.slug;

// Next.js 15+
const { slug } = await params;
```

### 3. 함수를 async로 변경

```tsx
// 이전
const PostDetailPage = ({ params }) => {
  // ...
};

// Next.js 15+
const PostDetailPage = async ({ params }) => {
  const { slug } = await params;
  // ...
};
```

## searchParams도 동일하게 변경

`searchParams`도 Promise로 래핑되었습니다:

```tsx
const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { slug } = await params;
  const { query } = await searchParams;
  // ...
};
```

## 왜 이렇게 변경되었나?

1. **성능 최적화**: 동적 라우팅에서 더 효율적인 데이터 로딩
2. **스트리밍**: 부분적으로 페이지를 렌더링할 수 있게 됨
3. **일관성**: `searchParams`도 이미 Promise였는데, `params`도 동일하게 맞춤

## 마이그레이션 체크리스트

- [ ] `params` 타입을 `Promise<{ ... }>`로 변경
- [ ] `searchParams` 타입을 `Promise<{ ... }>`로 변경
- [ ] `params` 사용 전에 `await` 추가
- [ ] `searchParams` 사용 전에 `await` 추가
- [ ] 페이지 컴포넌트를 `async`로 변경
- [ ] `generateMetadata` 함수에서 `params`를 올바르게 받도록 수정

## 참고 자료

- [Next.js 15 Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [Dynamic Routes - Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
