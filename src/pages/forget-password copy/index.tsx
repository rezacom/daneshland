import { Link } from 'react-router-dom';
import AuthLayout from '../../../components/Layout/auth';

// import { useHistory } from 'react-router-dom';

import Gap from '../../../components/gap';
import * as S from './styles';

const ForgetPasswordPage = () => {

  return (
    <AuthLayout>
      <S.Box>
        <form className="">
          <S.Title>فراموشی کلمه عبور</S.Title>
          <S.Grid>
            <S.Item>
              <label htmlFor="email">ایمیل</label>
              <input type="email" id="email" />
            </S.Item>
          </S.Grid>
          <Gap size="30px" />
          <Link to="/forget-password/code">
            <button type="submit" className="button" style={{ width: '100%' }}>
              مرحله بعد
            </button>
          </Link>
        </form>
      </S.Box>
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
