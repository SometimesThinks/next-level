import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="min-w-lg max-w-3xl border-b bg-background text-foreground dark:bg-background dark:text-foreground">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.excerpt}</p>
        </CardContent>
        <CardFooter className="ㅅㄷ flex-wrap items-center gap-2 text-sm">
          <span>{formatDate(post.date)}</span>
          {post.tags.length > 0 && (
            <>
              <span>•</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-2 py-1">
                  {tag}
                </Badge>
              ))}
            </>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostListItem;
