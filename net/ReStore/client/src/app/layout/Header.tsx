import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Brightness7Icon from '@mui/icons-material/Brightness4';

interface Props {
  changeTheme: () => void;
  darkMode: boolean;
}

const Header = ({ changeTheme, darkMode }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Re-Store</Typography>
        <IconButton sx={{ ml: 1 }} onClick={changeTheme}>
          {darkMode ? <Brightness1Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
AppBar;
export default Header;
