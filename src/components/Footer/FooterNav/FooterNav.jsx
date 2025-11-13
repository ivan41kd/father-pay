import { useNavigationContext } from '../../../providers/NavigationProvider';
import FooterNavItem from '../FooterNavItem/FooterNavItem';

const FooterNav = ({ style }) => {
  const { items } = useNavigationContext();

  return (
    <div className={style.footer__nav}>
      {items.map((item, index) => (
        <FooterNavItem
          style={style}
          title={item.title}
          link={item.link}
          Modal={item.modal}
          key={item.title + index}
        />
      ))}
    </div>
  );
};

export default FooterNav;
