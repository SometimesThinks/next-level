# 🚀 Terminal Blog - Next Level

Next.js App Router + Tailwind CSS + shadcn/ui 기반의 Git 저장소 기반 마크다운 블로그 프로젝트입니다.

## ✨ 주요 기능

- 📝 **마크다운 기반 블로그**: Git으로 관리되는 콘텐츠
- 🖥️ **터미널 뷰**: 개발자를 위한 터미널 인터페이스
- 🌙 **다크 모드**: 사용자 선호도에 따른 테마 전환
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📚 문서

자세한 내용은 [`docs/`](./docs/) 폴더를 참조하세요:

- [📋 프로젝트 개요](./docs/project-overview.md)
- [📝 기능 요구사항](./docs/planning/requirements.md)
- [🗺️ 개발 로드맵](./docs/planning/development-roadmap.md)
- [🏗️ 기술 아키텍처](./docs/technical/architecture.md)

## 📅 개발 일정

| 단계        | 기간   | 주요 목표           |
| ----------- | ------ | ------------------- |
| **Phase 1** | 1-7일  | 일반 블로그 뷰 완성 |
| **Phase 2** | 8-14일 | 터미널 뷰 완성      |
| **배포**    | 14일차 | 프로덕션 배포       |

## 🛠️ 기술 스택

- **Frontend**: Next.js 15.5.0, React 19.1.0, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Content**: Markdown, gray-matter, remark
- **Terminal**: xterm.js (Phase 2)

## 🎯 개발 방식

- GitHub 저장소의 `.md` 파일을 기준으로 정적 렌더링
- 웹에서 글 작성 기능은 없음 (에디터, 자동완성 기능 제외)
- 모든 글/폴더는 커밋 기반으로 관리됨

## 🏗️ 프로젝트 구조

```
next-level/
├── app/                    # Next.js App Router
├── components/             # 재사용 컴포넌트
├── lib/                    # 유틸리티 함수
├── content/                # 마크다운 콘텐츠
├── docs/                   # 프로젝트 문서
└── public/                 # 정적 파일
```

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 SometimesThinks 라이선스 하에 배포됩니다.
