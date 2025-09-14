'use client';

import { useState, useEffect } from 'react';

import { TocItem } from '@/lib/posts';

interface TableOfContentsProps {
  toc: TocItem[];
  className?: string;
}

const TableOfContents = ({ toc, className }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const handleScroll = () => {
      let closestId = '';
      let minDistance = Infinity;

      toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const distance = Math.abs(el.getBoundingClientRect().top);

        if (distance < minDistance && el.getBoundingClientRect().top <= 150) {
          closestId = item.id;
          minDistance = distance;
        }
      });
      // 페이지 끝에 도달했는지 확인
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (atBottom) {
        // 마지막 목차 아이템의 ID를 가져옴
        closestId = toc[toc.length - 1]?.id || '';
      }
      setActiveId(closestId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  return (
    <aside className={`${className} flex flex-col gap-2`}>
      {toc.map((item) => (
        <span
          key={item.id}
          id={item.id}
          className={`text-sm transition-colors duration-200 ${
            activeId === item.id
              ? 'font-semibold text-primary'
              : 'text-muted-foreground hover:text-foreground'
          } ${
            item.depth === 1
              ? 'ml-0'
              : item.depth === 2
                ? 'ml-4'
                : item.depth === 3
                  ? 'ml-8'
                  : item.depth === 4
                    ? 'ml-12'
                    : item.depth === 5
                      ? 'ml-16'
                      : item.depth === 6
                        ? 'ml-20'
                        : 'ml-0'
          }`}
        >
          <a href={`#${item.id}`} className="px-2 py-1">
            {item.value}
          </a>
        </span>
      ))}
    </aside>
  );
};

export default TableOfContents;
