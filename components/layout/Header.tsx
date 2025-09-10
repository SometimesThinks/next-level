'use client';

import { Terminal, LayoutPanelLeft, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/theme-toggle';

const Header = () => {
  // todo: 터미널 뷰 토글은 state로 구현 X. 나중에 구현 필요
  const [isTerminalMode, setIsTerminalMode] = useState<boolean>(false);

  const toggleView = () => {
    setIsTerminalMode(!isTerminalMode);
  };

  return (
    <header className="mx-2 border-b-2 bg-background p-4 text-foreground dark:bg-background dark:text-foreground">
      <div className="flex items-center justify-between">
        {/* 홈 타이틀 박스 */}
        <div className="flex items-end gap-4">
          <Link href="/" className="text-xl font-bold">
            Next Lvl
          </Link>
          <span className="text-sm text-muted-foreground">on to the next level</span>
        </div>
        {/* 오른쪽 액션 버튼 박스 */}
        <div className="space-x-2">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Search className="h-6 w-6" />
          </Button>
          {/* 터미널 토글 */}
          <Button variant="ghost" size="icon" onClick={toggleView} className="h-10 w-10">
            {isTerminalMode ? (
              <Terminal className="h-6 w-6" />
            ) : (
              <LayoutPanelLeft className="h-6 w-6" />
            )}
          </Button>
          {/* 테마 토글 */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
