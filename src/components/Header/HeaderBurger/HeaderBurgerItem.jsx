import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const HeaderBurgerItem = ({ title, link, Modal, onClick }) => {
  return (
    <>
      {Modal ? (
        <Modal
          handler={
            <ListItem
              key={title}
              disablePadding
              className="navigation_md"
              sx={{
                '&': {
                  color: 'white',
                },
              }}
            >
              <ListItemButton>
                <ListItemText
                  disableTypography
                  primary={title}
                  className="navigation_md"
                />
              </ListItemButton>
            </ListItem>
          }
        ></Modal>
      ) : (
        <NavLink to={link} key={link}>
          <ListItem
            key={title}
            disablePadding
            className="navigation_md"
            sx={{
              '&': {
                color: 'white',
              },
            }}
            onClick={onClick}
          >
            <ListItemButton>
              <ListItemText
                disableTypography
                primary={title}
                className="navigation_md"
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
      )}
    </>
  );
};

export default HeaderBurgerItem;
