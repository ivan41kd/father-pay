import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useHeaderContext } from '../../../providers/HeaderProvider';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { useNavigationContext } from '../../../providers/NavigationProvider';
import HeaderBurgerItem from './HeaderBurgerItem';

const HeaderBurger = () => {
  const { isOpen, setIsOpen } = useHeaderContext();
  const { items } = useNavigationContext();
  const toggleBurger = (e) => {
    setIsOpen(!isOpen);
  };
  const DrawerList = (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <NavLink to={'/'} key={'/'}>
        <ListItem
          key={'Пополнение'}
          disablePadding
          className="navigation_md"
          sx={{
            '&': {
              color: 'white',
            },
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            toggleBurger();
          }}
        >
          <ListItemButton>
            <ListItemText
              disableTypography
              primary={'Пополнение'}
              className="navigation_md"
            />
          </ListItemButton>
        </ListItem>
      </NavLink>
      {items.map((item, index) => (
        <HeaderBurgerItem
          title={item.title}
          link={item.link}
          Modal={item.modal}
          onClick={() => {
            window.scrollTo(0, 0);
            toggleBurger();
          }}
          key={index}
        />
      ))}
    </List>
  );
  return (
    <div className="md:hidden">
      <MenuIcon
        sx={{
          '&': {
            color: 'white',
          },
        }}
        onClick={toggleBurger}
      />
      <Dialog
        fullScreen
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#181B22',
            },
          },
        }}
        sx={{
          backgroundColor: '#181B22',
        }}
        onClose={toggleBurger}
        open={isOpen}
      >
        <AppBar
          color="transparent"
          elevation={0}
          position="sticky"
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'end',
            padding: '30px 20px',
          }}
        >
          <IconButton
            sx={{
              width: '24px',
              justifyContent: 'end',
              padding: 0,
              display: 'flex',
            }}
            color="white"
            onClick={toggleBurger}
            aria-label="close"
          >
            <CloseIcon
              sx={{
                '&': {
                  color: 'white',
                },
              }}
            />
          </IconButton>
        </AppBar>
        <DialogContent
          sx={{
            padding: 0,
          }}
        >
          {DrawerList}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeaderBurger;
