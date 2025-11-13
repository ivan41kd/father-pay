import Container from '../Container';
import s from './header.module.scss';
import headerLogo from '../../assets/fatherpay-logo.svg';
import headerIcon from '../../assets/fatherpay-icon.svg';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderOnline from './HeaderOnline/HeaderOnline';
import { NavLink } from 'react-router-dom';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <div className={s.header__info}>
            <NavLink to={'/'} className={'w-full flex items-center'}>
              <HeaderLogo icon={headerIcon} logo={headerLogo} />
            </NavLink>
            <HeaderOnline style={s} value={1454} />
          </div>

          <HeaderMenu style={s} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
