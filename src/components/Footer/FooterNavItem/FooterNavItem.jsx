import { NavLink } from 'react-router-dom';

const FooterNavItem = ({ style, title, link, Modal }) => {
  return (
    <>
      {Modal ? (
        <Modal
          handler={
            <li
              className={`navigation_md cursor-pointer ${style.footer__nav_item}`}
            >
              {title}
            </li>
          }
        ></Modal>
      ) : (
        <NavLink
          to={link}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          <li className={`navigation_md ${style.footer__nav_item}`}>{title}</li>
        </NavLink>
      )}
    </>
  );
};

export default FooterNavItem;
