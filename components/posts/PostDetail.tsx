import { notFound } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPostBySlug } from '@/lib/posts';

interface PostDetailProps {
  slug: string;
}

const PostDetail = async ({ slug }: PostDetailProps) => {
  const post = await getPostBySlug(slug);
  console.log(post);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="border-b bg-background text-foreground dark:bg-background dark:text-foreground">
        <CardHeader>
          <CardTitle className="mb-4 text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="prose-foreground prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <br />
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span>{formatDate(post.date)}</span>
            {post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetail;
