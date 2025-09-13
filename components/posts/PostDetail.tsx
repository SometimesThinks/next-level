import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

interface PostDetailProps {
  slug: string;
}

const PostDetail = async ({ slug }: PostDetailProps) => {
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="border-b bg-background text-foreground dark:bg-background dark:text-foreground">
        <CardHeader>
          <CardTitle className="mb-4 text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="prose-foreground markdown-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
        <CardFooter className="flex-wrap items-center gap-2 text-sm">
          {post.tags.length > 0 && (
            <>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-2 py-1">
                  {tag}
                </Badge>
              ))}
              <span>•</span>
            </>
          )}
          <span>{formatDate(post.date)}</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostDetail;
