import { Terminal, Github, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 로고 및 소개 */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Terminal Blog</span>
            </div>
            <p className="mb-4 max-w-md text-muted-foreground">
              Next.js App Router + Tailwind CSS + shadcn/ui 기반의 Git 저장소 기반 마크다운 블로그
              프로젝트입니다. 일반 블로그 뷰와 터미널 뷰를 모두 제공합니다.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="mb-4 font-semibold">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/posts"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  전체 포스트
                </Link>
              </li>
              <li>
                <Link
                  href="/tags"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  태그
                </Link>
              </li>
              <li>
                <Link
                  href="/terminal"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  터미널
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 기술 스택 */}
          <div>
            <h3 className="mb-4 font-semibold">기술 스택</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Next.js 15.5.0</li>
              <li>React 19.1.0</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
            </ul>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Terminal Blog. Made with <Heart className="inline h-4 w-4 text-red-500" /> by
              Next Level.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
