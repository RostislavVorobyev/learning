import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness4';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';

interface Props {
  changeTheme: () => void;
  darkMode: boolean;
}
const midLinks = [
  { title: 'Catalog', path: '/catalog' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const leftLinks = [
  { title: 'Login', path: '/login' },
  { title: 'Register', path: '/register' },
];

const navStyles = {
  typography: 'h6',
  color: 'inherit',
  ':hover': {
    color: 'secondary.light',
  },
  '&.active': {
    color: 'secondary.main',
  },
};

const Header = ({ changeTheme, darkMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ ...navStyles, textDecoration: 'none' }}
          >
            Re-Store
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={changeTheme}>
            {darkMode ? <Brightness7Icon /> : <Brightness2Icon />}
          </IconButton>
        </Box>
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {leftLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
AppBar;
export default Header;
