import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PostListItem = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <Card className="min-w-lg w-full max-w-3xl justify-self-center">
        <CardHeader>
          <CardTitle>todo: 제목</CardTitle>
          <CardDescription>todo: 내용 미리보기</CardDescription>
        </CardHeader>
        <CardContent>
          <p>todo: 작성일, 태그</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostListItem;
