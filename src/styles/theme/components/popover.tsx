import * as React from 'react';
import { useColorScheme } from '@mui/material';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


interface Props {
  title: string;
  content: string;
}

export default function BasicPopover({ title, content }: Props): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { mode, setMode } = useColorScheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMode('dark');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? title : undefined;

  return (
    <div>
      <Typography aria-describedby={id} onClick={handleClick} sx={{ border: 'none' }}>
        {title}
      </Typography>
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
        <Typography sx={{ p: 2 }}>{content}</Typography>
      </Popover>
    </div>
  );
}
