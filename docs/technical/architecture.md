# 🏗️ 기술 아키텍처

## 🏛️ 전체 구조

```
next-level/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── posts/             # 블로그 포스트
│   │   ├── page.tsx       # 포스트 목록
│   │   └── [slug]/        # 동적 라우팅
│   │       └── page.tsx   # 포스트 상세
│   └── terminal/          # 터미널 뷰 (Phase 2)
│       └── page.tsx       # 터미널 페이지
├── components/             # 재사용 컴포넌트
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── blog/              # 블로그 전용 컴포넌트
│   └── terminal/          # 터미널 전용 컴포넌트
├── lib/                    # 유틸리티 함수
│   ├── utils.ts           # 일반 유틸리티
│   ├── markdown.ts        # 마크다운 처리
│   ├── commandParser.ts   # 터미널 명령어 파서
│   └── terminalFS.ts      # 가상 파일 시스템
├── content/                # 마크다운 콘텐츠
│   └── posts/             # 블로그 포스트 파일들
└── public/                 # 정적 파일
```

## 🔧 기술 스택 상세

### Frontend

- **Next.js 15.5.0**: App Router 기반 SSR/SSG
- **React 19.1.0**: 최신 React 기능 활용
- **TypeScript**: 타입 안정성 확보
- **Tailwind CSS**: 유틸리티 기반 스타일링

### UI Components

- **shadcn/ui**: 재사용 가능한 컴포넌트 라이브러리
- **Lucide React**: 아이콘 라이브러리
- **clsx + tailwind-merge**: 조건부 클래스 관리

### 마크다운 처리

- **gray-matter**: frontmatter 파싱
- **remark**: 마크다운 → HTML 변환
- **rehype-highlight**: 코드 하이라이팅

### 터미널 (Phase 2)

- **xterm.js**: 터미널 에뮬레이션
- **커스텀 명령어 파서**: 명령어 처리 로직

## 🏗️ 폴더 구조 설계

### 컴포넌트 분리

- **UI 컴포넌트**: 재사용 가능한 기본 컴포넌트
- **도메인 컴포넌트**: 블로그/터미널 전용 컴포넌트
- **레이아웃 컴포넌트**: 페이지 구조 컴포넌트

### 유틸리티 분리

- **마크다운 관련**: 콘텐츠 처리 로직
- **터미널 관련**: 명령어 처리 및 가상 FS
- **공통 유틸리티**: 날짜, 문자열 처리 등

## 📁 파일 구조 상세

### `/app` 폴더

```
app/
├── layout.tsx              # 루트 레이아웃 (네비게이션, 푸터)
├── page.tsx                # 홈페이지 (프로젝트 소개)
├── globals.css             # 전역 스타일
├── posts/
│   ├── page.tsx            # 포스트 목록 페이지
│   └── [slug]/
│       └── page.tsx        # 동적 포스트 상세 페이지
└── terminal/
    └── page.tsx            # 터미널 뷰 페이지
```

### `/components` 폴더

```
components/
├── ui/                     # shadcn/ui 기본 컴포넌트
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── blog/                   # 블로그 전용 컴포넌트
│   ├── PostCard.tsx        # 포스트 카드
│   ├── PostList.tsx        # 포스트 목록
│   ├── PostContent.tsx     # 포스트 내용
│   └── TagCloud.tsx        # 태그 클라우드
└── terminal/               # 터미널 전용 컴포넌트
    ├── Terminal.tsx        # 터미널 메인
    ├── CommandInput.tsx    # 명령어 입력
    └── TerminalOutput.tsx  # 터미널 출력
```

### `/lib` 폴더

```
lib/
├── utils.ts                # 공통 유틸리티
├── markdown.ts             # 마크다운 처리
├── commandParser.ts        # 터미널 명령어 파서
├── terminalFS.ts           # 가상 파일 시스템
└── terminalCommands.ts     # 명령어별 로직
```

## 🔄 데이터 플로우

### 일반 블로그 뷰

1. **마크다운 파일** → `gray-matter` 파싱
2. **Frontmatter** → 메타데이터 추출
3. **마크다운 내용** → `remark` 변환
4. **HTML** → React 컴포넌트 렌더링

### 터미널 뷰

1. **사용자 입력** → 명령어 파싱
2. **명령어 분석** → 적절한 핸들러 호출
3. **가상 FS 접근** → 콘텐츠 검색/표시
4. **출력 포맷팅** → 터미널에 표시

## 🚀 성능 최적화

### 정적 생성

- **ISR (Incremental Static Regeneration)**: 콘텐츠 업데이트 시 자동 재생성
- **동적 라우팅**: `[slug]` 기반 포스트 페이지 생성
- **이미지 최적화**: Next.js Image 컴포넌트 활용

### 번들 최적화

- **코드 스플리팅**: 페이지별 번들 분리
- **Tree Shaking**: 사용하지 않는 코드 제거
- **Lazy Loading**: 컴포넌트 지연 로딩

## 🔒 보안 고려사항

### 입력 검증

- **명령어 파싱**: SQL 인젝션 방지
- **파일 경로**: 경로 순회 공격 방지
- **XSS 방지**: 마크다운 렌더링 시 HTML 이스케이프

### 접근 제어

- **읽기 전용**: 웹에서 콘텐츠 수정 불가
- **Git 기반**: 버전 관리 시스템을 통한 접근 제어
