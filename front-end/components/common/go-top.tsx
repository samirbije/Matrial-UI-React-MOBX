import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';


const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    left: '50%',
    transform: `translateX(-50%)`,
    marginTop: '80px',
    zIndex: 99
  }
}))

interface Props {
  isCorrectLocation: boolean
}

export default function GoTop(props: Props) {
  const classes = useStyles();
  const { isCorrectLocation } = props;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (!isCorrectLocation) return <div />;

  return (
    <>
      <Box className={classes.container}>
        <Button variant="contained" onClick={scrollToTop} style={{ borderRadius: 70 }}>
          <ArrowUpward color="secondary" />
          新しい商品
        </Button>
      </Box>
    </>
  )
}
