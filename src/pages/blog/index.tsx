import AddComment from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getPostById, toggleLike } from '../../store/global-slice';
import { useParams } from 'react-router-dom';
import { HeartIcon as HeartIconOutlined } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => getPostById(state, Number(id)));

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <img src="/images/no-post.png" alt="no-port" className="w-full max-w-xs" />
        <p className="mt-2">متاسفانه مقاله ی مورد نظر یافت نشد.</p>
      </div>
    );
  }

  const togglePostLike = () => {
    dispatch(toggleLike(post.id));
  };

  return (
    <div>
      <div className="py-8">
        <h1 className="text-center text-3xl font-bold">{post.title}</h1>
        <p className="text-gray mt-4 flex items-center justify-center gap-2">
          <span>{post.category}</span>
          <span className="h-2 w-2 rounded bg-teal-500" style={{ display: 'inline-block' }}></span>
          <span>{post.publishedAt}</span>
        </p>
      </div>
      <img src={post.imageUrl} alt={post.title} width={'100%'} />
      <div className="prose prose-sm prose-invert max-w-full py-4">
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <strong>برچسب ها: </strong>
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag: any) => (
              <span key={tag} className="bg-primary rounded p-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div role="button" className="flex items-center gap-1" onClick={togglePostLike}>
          {post.isLiked ? (
            <HeartIcon className="text-teal-500" width={20} height={20} />
          ) : (
            <HeartIconOutlined className="text-teal-500" width={20} height={20} />
          )}
          {post.isLiked ? <span>Liked</span> : <span>Like</span>}
        </div>
      </div>

      <div className="mt-12 flex gap-6">
        <CommentList comments={post.comments} />
      </div>
      <div className="mt-12 flex gap-12">
        <AddComment postId={post.id} />
      </div>
    </div>
  );
};

export default BlogPage;
