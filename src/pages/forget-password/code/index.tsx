import { Link } from 'react-router-dom';
import AuthLayout from '../../../components/Layout/auth';

// import { useHistory } from 'react-router-dom';

import Gap from '../../../components/gap';
import * as S from './styles';

const ForgetPasswordCodePage = () => {
  return (
    <AuthLayout>
      <S.Box>
        <form className="">
          <S.Title> کلمه عبور جدید</S.Title>
          <S.Grid>
            <S.Item>
              <label htmlFor="code">کد</label>
              <input type="code" id="code" />
            </S.Item>
            <S.Item>
              <label htmlFor="password">کلمه عبور جدید</label>
              <input type="password" id="password" />
            </S.Item>
            <S.Item>
              <label htmlFor="confirm_password">تکرار کلمه عبور </label>
              <input type="confirm_password" id="confirm_password" />
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

export default ForgetPasswordCodePage;
