import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  function handleShare() {
    fetch('http://localhost:5000/url/getShortUrl',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
            	id : post._id,
              userId : post._id,
            })
        })
        .then(res=>res.json())
        .then(data=>{
        	alert(data);
          console.log(data);
        })
        .catch(err=>alert(err));
  }

  function handleShare() {
    fetch('http://localhost:5000/url/getShortUrl',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
            	id : post._id,
              userId : post._id,
            })
        })
        .then(res=>res.json())
        .then(data=>{
        	alert(data);
          console.log(data);
        })
        .catch(err=>alert(err));
  }

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
      </div>
     
     {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>    
      <FormControl >
        <InputLabel id="action-to-perform">Action</InputLabel><br></br>
          <Select>
            <MenuItem onClick={() => setCurrentId(post._id)} style={{ color: 'black' }} value={0}>Edit</MenuItem>
<<<<<<< HEAD
            <MenuItem onClick={handleShare} value={1}> Share </MenuItem>
=======
            <MenuItem onClick={handleShare}value={1}> Share </MenuItem>
>>>>>>> 08de309926aef9efe2887e9680277892b6559782
            <MenuItem value={2}> Download </MenuItem>
          </Select>
      </FormControl>
      </div>)}
  
      <div className={classes.details}>
      </div><br></br><br></br><div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><b>Message :</b> {post.message}</Typography><br></br>
        <Typography variant="body2" color="textSecondary" component="p"><b>Purpose :</b> {post.purpose}</Typography><br></br>
        <Typography variant="body2" color="textSecondary" component="p"><b>Audience :</b> {post.audience}</Typography><br></br>
        <Typography variant="body2" color="textSecondary" component="p"><b>Version :</b> {post.version}</Typography>
      </CardContent>
      </div>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button> */}
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
