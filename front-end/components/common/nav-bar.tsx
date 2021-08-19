import React from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';

export default function NavBar(props) {
  const router = useRouter();
  const { itemName } = props;

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        flex="1 auto"
      >
        <Box alignItems="center" display="flex">
          <IconButton
            color="inherit"
            aria-label="back"
            onClick={handleBack}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h4" display="inline" color="textPrimary">
            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
              {itemName}
            </Box>
          </Typography>
        </Box>

        <Box alignItems="center" display="flex">
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="user"
            aria-haspopup="true"
            color="inherit"
          >
            <PublishIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

