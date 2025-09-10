import Profile from '@/components/blog/Profile';
import PostList from '@/components/posts/PostList';

const Home = () => {
  return (
    <div className="my-16 grid grid-cols-1 justify-center lg:grid-cols-6">
      <main className="lg:col-span-3 lg:col-start-2">
        <PostList />
      </main>
      <aside className="hidden lg:col-span-1 lg:block">
        <Profile />
      </aside>
    </div>
  );
};

export default Home;
