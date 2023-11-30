import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

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
          <Button variant='outlined' size='small'>
            DASHBOARD
          </Button>
          <Button variant='outlined' size='small'>
            CREATE ADS
          </Button>
        </div>
      </Toolbar>
    </>
  );
}

export default Header;
