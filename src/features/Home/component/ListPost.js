import { CardMedia } from "@material-ui/core"
import useStyles from '../pages/styles'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
export default function ListPost({post}) {
    const classes = useStyles()
    const navigate = useNavigate()
    const handleProfileClick = () => {
        navigate(`/profile/${post.userId}`)
    }
    const handleShowPost = () => {
        navigate(`/post/${post.postId}`)
    }
    return(
        <>
            <Card>
            <CardHeader
                avatar={<Avatar><img onClick={() => handleProfileClick(post)} className={classes.Avatar} alt="" src={post.images}/></Avatar>}
                title={post.name}
            />
            <CardMedia
                image={post.image || ''}
                title='Title'
                className={classes.media}
                onClick={handleShowPost}
            />
            <CardContent>
            <Typography variant='h5' color='textPrimary'>
                {post.title}
            </Typography>
            </CardContent>
            </Card>
        </>
    )
}