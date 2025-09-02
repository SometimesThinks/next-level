import { notFound } from 'next/navigation';

import PostDetail from '@/components/posts/PostDetail';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

// 정적 생성할 포스트 목록 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: PostDetailPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

const PostDetailPage = ({ params }: PostDetailPageProps) => {
  return <PostDetail slug={params.slug} />;
};

export default PostDetailPage;
