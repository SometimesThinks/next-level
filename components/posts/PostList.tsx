import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <PostListItem slug="1" />
      <PostListItem slug="2" />
    </div>
  );
};

export default PostList;
