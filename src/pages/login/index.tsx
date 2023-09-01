import { Link } from 'react-router-dom';
import AuthLayout from '../../components/Layout/auth';
import Gap from '../../components/gap';
import * as S from './styles';
import { Formik } from 'formik';
import { ValidationLogin } from '../../validations';

const LoginPage = () => {
  return (
    <AuthLayout>
      <S.Box>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={ValidationLogin}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            if (values.email === 'reza1880@gmail.com' && values.password === '123') {
              localStorage.setItem('info', JSON.stringify(values));
              window.location.href = '/profile';
            }
            setSubmitting(false);
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <>
              <S.Title>ورود کاربران</S.Title>
              <S.Grid>
                <S.Item>
                  <label htmlFor="email">ایمیل</label>
                  <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
                  {errors.email && <S.Message>{errors.email}</S.Message>}
                </S.Item>
                <S.Item className="">
                  <label htmlFor="password">کلمه عبور</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <S.Message>{errors.password}</S.Message>}
                </S.Item>
              </S.Grid>
              <Gap size="10px" />

              <S.Links>
                <Link to="/forget-password">فراموشی کلمه عبور</Link>
                <Link to="/signup">ثبت نام</Link>
              </S.Links>
              <Gap size="20px" />
              <button onClick={() => handleSubmit()} className="button" style={{ width: '100%' }}>
                ورود
              </button>
            </>
          )}
        </Formik>
      </S.Box>
    </AuthLayout>
  );
};

export default LoginPage;
