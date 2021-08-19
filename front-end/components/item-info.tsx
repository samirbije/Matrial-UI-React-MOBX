
import React from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router'
import { Grid, Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { IItem } from '../store/model/item'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 645,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  soldIcon: {
    position: 'absolute',
    height: 65,
    width: 65,
    clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
    backgroundColor: 'red'
  },

  soldIconText: {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center',
    transform: `rotate(-45deg)`,
    paddingTop: 12,
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
  },
  cameraIconContainer: {
    position: 'fixed',
    right: '-14px',
    bottom: '-14px',
    textAlign: 'center',
    zIndex: 2,
    borderRadius: '50%',
    paddingTop: '15px',
    height: '100px',
    width: '100px',
    backgroundColor: '#ea352d',
  },
}));

interface Props {
  itemList: IItem[]
}
function ItemInformation(props: Props) {
  const router = useRouter()
  const { itemList } = props;
  const classes = useStyles();

  function goToItemDetail(id) {
    return function (event) {
      event.stopPropagation();
      return router.push(`/details/${id}`);
    }
  }

  return (
    <Grid container alignItems="center" spacing={1}>
      {
        itemList.map((item: IItem) => {
          return (
            <Grid item xs={6} key={item.id}>
              <Card className={classes.container} onClick={goToItemDetail(item.id)}>
                <CardActionArea>
                  {item.is_sold_out && (
                    <Box
                      component="span"
                      bgcolor="primary.main"
                      color="secondary.contrastText"
                      className={classes.soldIcon}
                    >
                      <Box className={classes.soldIconText}>sold</Box>
                    </Box>
                  )}
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Box display="flex" alignContent="center" justifyContent="space-between">
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}
                      </Typography>
                      <IconButton aria-label="love" component="span">
                        {item.like_count ?
                          <FavoriteBorderIcon fontSize="inherit" />
                          : ''
                        }
                        {item.like_count ? item.like_count : ''}
                      </IconButton>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid >
          )
        })
      }
    </Grid >
  )
}

export default observer(ItemInformation)




