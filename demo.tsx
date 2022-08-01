import * as React from 'react';
import Box from '@mui/material/Box';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tooltip from '@mui/material/Tooltip';

import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <ShareIcon />, name: 'Share' },
  {
    icon: (
      <GitHubIcon
        style={{ fill: '#3b5998' }}
        onClick={() => window.open('https://github.com/greenjoe071', '_blank')}
      />
    ),
    name: 'GitHub Backups',
  },
];

// const handleClick = (network: string) => {
//   window.open('https://github.com/greenjoe071', '_blank');
// };

export default function BasicSpeedDial() {
  return (
    <Box
      sx={{
        height: 320,
        transform: 'translateZ(0px)',
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        direction="down"
        sx={{
          // position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        icon={
          <Tooltip title="Click Here For More" placement="left" arrow open>
            <SpeedDialIcon />
          </Tooltip>
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
