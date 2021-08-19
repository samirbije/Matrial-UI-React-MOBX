
import React from 'react';
import { Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/CameraAltRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cameraIconContainer: {
    position: 'fixed',
    right: '-20px',
    bottom: '-20px',
    textAlign: 'center',
    zIndex: 2,
    borderRadius: '50%',
    paddingTop: '15px',
    height: '110px',
    width: '110px',
    backgroundColor: '#ea352d'
  },
}));


export default function CameraIconContainer() {
  const classes = useStyles();

  return (
    <Box color="#ffffff" className={classes.cameraIconContainer}>
      <Typography gutterBottom variant="h5" component="h2">test
      </Typography>
      <CameraIcon />
    </Box>
  )
}
