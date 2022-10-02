import { CardMedia } from "@material-ui/core"
import useStyles from '../pages/styles'
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function ListPostProfile({post, handleOnDelete}) {
    const classes = useStyles()
    const navigate = useNavigate()
    const handleShowPost = () => {
    }
    const handleEdit = () => {
        navigate(`/addedit/${post.postId}`)
    }
    const handleDelete = (post) => {
        if(handleOnDelete) {
            handleOnDelete(post)
        }
    }
    return(
        <>
            <Card>
            <CardHeader
                avatar={<Avatar><img className={classes.Avatar} alt="" src={post.images}/></Avatar>}
                title={post.name}
                action={
                    <span>
                        <FontAwesomeIcon onClick={() => handleEdit(post)} icon={faPenToSquare} className={classes.icon} />
                        <FontAwesomeIcon onClick={() => handleDelete(post)} icon={faTrashCan} className={classes.icon}/>
                    </span>
                }
            />
            <CardMedia
                image={post.image || ''}
                title='Title'
                className={classes.media}
            />
            <CardContent>
            <Typography variant='h5' color='textPrimary' onClick={handleShowPost}>
                {post.title}
            </Typography>
            </CardContent>
            </Card>
        </>
    )
}