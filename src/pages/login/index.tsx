import { Link } from 'react-router-dom';
import AuthLayout from '../../components/Layout/auth';
import Gap from '../../components/gap';
import * as S from './styles';

const LoginPage = () => {
  return (
    <AuthLayout>
      <S.Box>
        <form className="">
          <S.Title>ورود کاربران</S.Title>
          <S.Grid>
            <S.Item>
              <label htmlFor="email">ایمیل</label>
              <input type="email" id="email" />
            </S.Item>
            <S.Item className="">
              <label htmlFor="password">کلمه عبور</label>
              <input type="password" id="password" />
            </S.Item>
          </S.Grid>
          <Gap size="10px" />

          <S.Links>
            <Link to="/forget-password">فراموشی کلمه عبور</Link>
            <Link to="/signup">ثبت نام</Link>
          </S.Links>
          <Gap size="20px" />
          <button type="submit" className="button" style={{ width: '100%' }}>
            ورود
          </button>
        </form>
      </S.Box>
    </AuthLayout>
  );
};

export default LoginPage;
