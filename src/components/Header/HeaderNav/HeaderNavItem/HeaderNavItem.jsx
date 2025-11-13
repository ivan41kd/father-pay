import { NavLink } from 'react-router-dom';
import { useId } from 'react';

const HeaderNavItem = ({ style, title, link, Modal }) => {
  return (
    <>
      {Modal ? (
        <Modal
          modalId={useId()}
          handler={
            <li
              className={`navigation_md cursor-pointer ${style.header__nav_item}`}
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
          <li className={`navigation_md ${style.header__nav_item}`}>{title}</li>
        </NavLink>
      )}
    </>
  );
};

export default HeaderNavItem;
