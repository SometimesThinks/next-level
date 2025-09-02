import { getAllPosts } from '@/lib/posts';

import PostListItem from './PostListItem';

const PostList = async () => {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">아직 작성된 포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
