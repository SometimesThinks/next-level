import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/posts';

const PostListItem = ({ post }: { post: Post }) => {
  console.log(post);

  return (
    <Link href={`/posts/${post.slug}`} className="inline-block w-full">
      <Card className="min-w-lg max-w-3xl justify-self-center">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.excerpt}</CardDescription>
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
