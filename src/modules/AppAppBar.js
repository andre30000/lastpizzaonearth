import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            // href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'Last Pizza on Earth'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Typography sx={{ fontStyle: 'italic' }}>While you wait:</Typography>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/phish"
              sx={rightLink}
            >
              {'Phish quiz'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="https://www.google.com"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'option2'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;