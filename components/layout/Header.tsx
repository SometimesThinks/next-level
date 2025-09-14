'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

import SearchModal from '@/components/posts/SearchModal';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/theme-toggle';
import { Post } from '@/lib/posts';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const openSearch = useCallback(async () => {
    if (posts.length === 0) {
      try {
        const response = await fetch('/api/posts');
        const allPosts = await response.json();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    setIsSearchOpen(true);
  }, [posts.length]);

  // 전역 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K 또는 Cmd+K (Mac)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        openSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openSearch]);

  return (
    <>
      <header className="mx-2 border-b-2 bg-background p-4 text-foreground dark:bg-background dark:text-foreground">
        <div className="flex items-center justify-between">
          {/* 홈 타이틀 박스 */}
          <div className="ml-4 flex items-end gap-4">
            <Link href="/" className="text-xl font-bold">
              Next Lvl
            </Link>
            <span className="text-sm text-muted-foreground">on to the next level</span>
          </div>
          {/* 오른쪽 액션 버튼 박스 */}
          <div className="mr-4 space-x-2">
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={openSearch}>
              <Search className="h-6 w-6" />
            </Button>
            {/* 테마 토글 */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} posts={posts} />
    </>
  );
};

export default Header;
