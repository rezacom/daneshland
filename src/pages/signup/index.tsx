import AuthLayout from '../../components/Layout/auth';
import Gap from '../../components/gap';
import * as S from './styles';

const SignupPage = () => {
  return (
    <AuthLayout>
      <S.Box>
        <form className="">
          <S.Title>ثبت نام کاربران</S.Title>
          <S.Grid>
            <S.Item>
              <label htmlFor="name">نام</label>
              <input type="name" id="name" />
            </S.Item>
            <S.Item>
              <label htmlFor="email">ایمیل</label>
              <input type="email" id="email" />
            </S.Item>
            <S.Item className="">
              <label htmlFor="password">کلمه عبور</label>
              <input type="password" id="password" />
            </S.Item>
            <S.Item className="">
              <label htmlFor="password">تکرار کلمه عبور</label>
              <input type="password" id="password" />
            </S.Item>
          </S.Grid>
          <Gap size="30px" />
          <button type="submit" className="button" style={{ width: '100%' }}>
            ثبت نام
          </button>
        </form>
      </S.Box>
    </AuthLayout>
  );
};

export default SignupPage;
