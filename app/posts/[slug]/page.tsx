import PostDetail from '@/components/posts/PostDetail';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface PostDetailPageProps {
  params: Promise<{ slug: string }>;
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
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { slug } = await params;

  return (
    <div className="my-16 mb-[50vh]">
      <main>
        <PostDetail slug={slug} />
      </main>
    </div>
  );
};

export default PostDetailPage;
