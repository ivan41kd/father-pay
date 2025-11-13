import s from '../header.module.scss';
const HeaderLogo = ({ logo, icon }) => {
  return (
    <div className={s.header__logo_wrapper}>
      <img className={s.header__logo_icon} src={icon} />
      <img className={s.header__logo} src={logo} />
    </div>
  );
};

export default HeaderLogo;
