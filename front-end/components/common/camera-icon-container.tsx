
import React from 'react';

import { Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/CameraAltRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    right: '-20px',
    bottom: '-20px',
    textAlign: 'center',
    zIndex: 2,
    borderRadius: '50%',
    paddingTop: '15px',
    height: '120px',
    width: '120px',
    backgroundColor: '#ea352d'
  },
  cameraSize: {
    fontSize: '60px'
  }

}));

export default function CameraIconContainer() {
  const classes = useStyles();

  return (
    <Box color="#ffffff" className={classes.container}>
      <Typography variant="subtitle1" >出品
      </Typography>
      <CameraIcon className={classes.cameraSize} />
    </Box>
  )
}
