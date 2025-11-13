import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ToolTipIcon from '../../assets/tooltip-icon.svg?react';

const ToolTip = ({ title }) => {
  return (
    <Tooltip
      title={title}
      placement="top"
      className="caption_xs"
      enterTouchDelay={50}
      leaveTouchDelay={500}
      slots={{
        transition: Zoom,
      }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
      sx={{
        '& .MuiTooltip-tooltip': {
          backgroundColor: 'green',
          color: 'white',
          fontSize: '1rem',
          padding: '10px',
        },
      }}
    >
      <ToolTipIcon className={'size-4'} />
    </Tooltip>
  );
};

export default ToolTip;
