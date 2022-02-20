import * as React from 'react';
import Popover from '@mui/material/Popover';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Button from '@mui/material/Button';

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button color="error" aria-describedby={id} onClick={handleClick} >
        <MapOutlinedIcon fontSize="large" htmlColor='lightgray' />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <img alt="사진" src="assets/game/map.jpg" />
      </Popover>
    </div>
  );
}
