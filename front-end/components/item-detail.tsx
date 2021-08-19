
import React from 'react';
import { observer } from 'mobx-react';
import { Box, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FlagIcon from '@material-ui/icons/Flag';
import NavBar from './common/nav-bar'
import { ItemsDetails } from '../pages/details/[itemId]';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

interface Props {
  itemsDetails: ItemsDetails
}

function ItemDetail(props: Props) {
  const { itemsDetails } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <NavBar itemName={itemsDetails.name} />
      <Box
        width="1"
        height="1"
        position="relative"
        bgcolor="background.paper"
      >

        <Box position="relative" height='300'>
          <img
            src={itemsDetails.image}
            alt="no-resource"
            className={classes.image}
          />
        </Box>

      </Box>
      <Typography gutterBottom variant="h5" component="h2">
        {itemsDetails.name}
      </Typography>
      <Box display="flex" alignContent="center" justifyContent="space-between">
        <Box display="flex" alignContent="center">
          <Button
            variant="contained"
            disabled
            color="secondary"
            style={{ borderRadius: 70 }}
          >
            <FavoriteBorderIcon />いいね
          </Button>
          <Box paddingY={1}>
            <Typography align="center">
              {itemsDetails.like_count}
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          disabled
          color="secondary"
          style={{ borderRadius: 70 }}
        >
          <ChatBubbleOutlineIcon /> コメント
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          style={{ borderRadius: 30 }}
        >
          <FlagIcon />
        </Button>
      </Box>

      <Box
        height="70px"
        px={{ xs: '20px' }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#dcd9d9" fontWeight='bold' marginY={1} paddingTop={1}>
        商品の説明
      </Box>
      <Typography>{itemsDetails.description}</Typography>
      <Box
        height="70px"
        px={{ xs: '6px' }}
        bgcolor="#38251d"
        color="primary.contrastText"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex"  >
          <Typography variant="h5">
            {itemsDetails.price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}
          </Typography>
          &nbsp;
          <Typography variant="overline" gutterBottom={true}>
            {itemsDetails.shipping_fee}
          </Typography>
        </Box>
        <Button variant="contained" color="secondary">
          購入手続きヘ
        </Button>
      </Box>
    </Container >
  )
}

export default observer(ItemDetail)




