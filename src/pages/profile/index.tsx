import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getProfile, updateProfile } from '../../store/global-slice';
import { ProfileType } from '../../types';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Gap from '../../components/gap';

import * as S from './styles';
import { LineChart } from '@mui/x-charts';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(getProfile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileType>();

  const onSubmit: SubmitHandler<ProfileType> = (data) => {
    dispatch(updateProfile(data));
    toast.success('Profile Updated Successfully');
  };

  return (
    <div>
      <h2 className="py-4 text-center">پروفایل</h2>

      <S.Box>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <S.Grid>
            <S.Item>
              <label htmlFor="name">نام</label>
              <input type="text" id="name" defaultValue={profile.name} {...register('name', { required: true })} />
              {errors.name && <p>فیلد اجباری می‌باشد.</p>}
            </S.Item>
            <S.Item className="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" defaultValue={profile.email} {...register('email', { required: true })} />
              {errors.email && <p>فیلد اجباری می‌باشد.</p>}
            </S.Item>
          </S.Grid>
          <Gap size="20px" />
          <button type="submit" className="button">
            ذخیره تغییرات
          </button>
        </form>
      </S.Box>
      <Gap size="20px" />

      <S.Box>
        <h3 className="py-4 text-center">امار بازدید</h3>
        <LineChart
          xAxis={[
            {
              data: [1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            },
          ]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5, 11, 10, 8, 10, 12, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 35],
            },
          ]}
          // width={500}
          height={500}
        />
      </S.Box>
    </div>
  );
};

export default ProfilePage;
