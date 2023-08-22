import { useAppSelector } from '../../hooks/use-app-selector';
import { getLikedPosts } from '../../store/global-slice';
import Post from '../../components/Post';

const LikedPostsPage = () => {
  const likedPosts = useAppSelector(getLikedPosts);

  return (
    <div>
      <div className="py-6">
        <h1 className="text-center">علاقخ مندی ها</h1>
      </div>
      {likedPosts.length > 0 ? (
        <div className="">
          {likedPosts.map((post: any) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="text-gray mt-4 flex flex-col items-center justify-center gap-2">
          <img src="/images/no-post.png" alt="no-post" className="w-full max-w-xs" />
          <p className="mt-4">شما هنوز هیچ پستی را لایک نکرده اید</p>
        </div>
      )}
    </div>
  );
};

export default LikedPostsPage;
