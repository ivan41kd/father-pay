import HeaderNavItem from './HeaderNavItem/HeaderNavItem';

import { useNavigationContext } from '../../../providers/NavigationProvider';

const HeaderNav = ({ style }) => {
  const { items } = useNavigationContext();

  return (
    <nav className={style.header__nav}>
      {items.map((item, index) => (
        <HeaderNavItem
          style={style}
          title={item.title}
          link={item.link}
          Modal={item.modal}
          key={item.title + index}
        />
      ))}
    </nav>
  );
};

export default HeaderNav;
