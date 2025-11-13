import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import HeaderBurger from '../HeaderBurger/HeaderBurger';

const HeaderMenu = ({ style }) => {
  return (
    <div className={style.header__menu}>
      <HeaderNav style={style} />
      <HeaderSocials style={style} />
      <HeaderBurger />
    </div>
  );
};

export default HeaderMenu;
