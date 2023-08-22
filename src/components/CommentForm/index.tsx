import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { addComment } from '../../store/global-slice';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Gap from '../../components/gap';

import * as S from "./styles";

type Props = {
  postId: number;
};

type FormData = {
  name: string;
  email: string;
  content: string;
};

const CommentForm = ({ postId }: Props) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addComment({ postId, comment: data }));
    toast.success('Comment added successfully');
    reset();
  };

  return (
    <div style={{width: "100%"}}>
      <h2 className="mb-4">افزودن دیدگاه</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Item>
          <label htmlFor="name">نام</label>
          <input type="text" id="name" {...register('name', { required: true })} />
          {errors.name && <p>این فیلد اجباری است</p>}
        </S.Item>
        <S.Item className="mt-3">
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" {...register('email', { required: true })} />
          {errors.email && <p>این فیلد اجباری است</p>}
        </S.Item>
        <S.Item className="mt-3">
          <label htmlFor="content">متن دیدگاه</label>
          <textarea id="content" rows={5} {...register('content', { required: true })}></textarea>
          {errors.email && <p>این فیلد اجباری است</p>}
        </S.Item>
        <Gap size='20px'/>
        <button type="submit" className='button'>ارسال</button>
      </form>
    </div>
  );
};

export default CommentForm;
