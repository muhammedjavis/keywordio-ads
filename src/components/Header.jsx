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
        <NavLink to='/'>
          <Button
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 'bolder',
              fontSize: '20px',
            }}
          >
            APP LOGO
          </Button>
        </NavLink>
        <div>
          <NavLink to='/dashboard'>
            <Button>DASHBOARD</Button>
          </NavLink>
          <NavLink to='/create-ads'>
            <Button>CREATE ADS</Button>
          </NavLink>
        </div>
      </Toolbar>
    </>
  );
}

export default Header;
