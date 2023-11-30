import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button size='small'>APP LOGO</Button>
        <div>
          <NavLink to='/dashboard'>
            <Button variant='outlined' size='small'>
              DASHBOARD
            </Button>
          </NavLink>
          <NavLink to='#'>
            <Button variant='outlined' size='small'>
              CREATE ADS
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </>
  );
}

export default Header;
