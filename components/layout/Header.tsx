'use client';

import { Sun, Moon, Terminal, LayoutPanelLeft, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const Header = () => {
  // todo: 실제 테마 전환은 state로 구현 X. 나중에 구현 필요.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isTerminalMode, setIsTerminalMode] = useState<boolean>(false);

  const toggleView = () => {
    setIsTerminalMode(!isTerminalMode);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // todo: 실제 테마 전환 로직은 나중에 구현
  };

  return (
    <header className="border-2 border-solid border-red-500">
      <div className="mx-2 p-4">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/" className="text-xl font-bold">
              Next Lvl
            </Link>
          </div>
          {/* 오른쪽 액션 버튼들 */}
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
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-10 w-10">
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
