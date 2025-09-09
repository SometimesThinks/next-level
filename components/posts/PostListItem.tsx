import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/posts';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="min-w-lg max-w-3xl border-b border-border bg-background text-foreground dark:bg-background dark:text-foreground">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.date}</p>
          <p>{post.tags.join(', ')}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostListItem;
