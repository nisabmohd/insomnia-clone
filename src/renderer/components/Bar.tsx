import {} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

export default function Bar() {
  return (
    <div
      style={{
        flex: 0.1,
        borderRight: '1px solid rgb(64 64 70)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        justifyContent: 'space-between',
      }}
    >
      <IconButton style={{ marginTop: '28px' }}>
        <HomeIcon style={{ color: 'gray', fontSize: '18px' }} />
      </IconButton>
      <IconButton style={{ marginBottom: '5px' }}>
        <SettingsIcon sx={{ color: 'gray', fontSize: '18px' }} />
      </IconButton>
    </div>
  );
}
