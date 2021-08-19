
import React from 'react';
import { TextField, Box, IconButton, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckIcon from '@material-ui/icons/Check';

export default function Search() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        marginRight={2}
        justifyContent="space-between"
      >
        <Box marginRight={2} alignItems="center" display="flex">
          <IconButton edge="start" aria-label="search">
            <MenuIcon />
          </IconButton>
          <Box paddingY={1}>
            <TextField label="Search..." variant="outlined" />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <IconButton edge="start">
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <CheckIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}
