import { Link } from 'react-router-dom';
import * as S from '../../styles';

export default function HeaderNav() {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <Link to="/">خانه</Link>
        </S.Li>
        <S.Li>
          <Link to="/articles">مقالات</Link>
        </S.Li>
        <S.Li>
          <Link to="/login">ورود</Link>
        </S.Li>
        <S.Li>
          <Link to="/signup">ثبت نام</Link>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
}
