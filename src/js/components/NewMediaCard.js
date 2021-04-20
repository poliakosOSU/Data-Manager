import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddSignImage from '../../assets/images/add_sign.png';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
		// maxHeight: 345
		width: 345,
		height: 300
  },
  media: {
    height: 200,
		width: 200,
		align: "center"
  },
});
//"file-loader": "^6.2.0",
//"url-loader": "^4.1.1",
// const addSignImage = <img src={require('./add_sing.png')}

export default function NewMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
			<CardActionArea>
			<CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Add Data Set
          </Typography>
        <CardMedia
          className={classes.media}
					image={AddSignImage}
					title="Add Sign"
        />
				 </CardContent>
      </CardActionArea>
    </Card>
  );
	
}