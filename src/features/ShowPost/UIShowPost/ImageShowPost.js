import useStyles from "../pages/styles"
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography,
} from '@material-ui/core';
export default function ImageShowPost({leter}) {
    const classes = useStyles()
    return(
        <>
            <div className={classes.imageSP}>
                <Card>
                <CardHeader
                    avatar={<Avatar><img className={classes.Avatar} alt="" src={leter.images}/></Avatar>}
                    title={leter.name}
                />
                <img alt="" className={classes.image} src={leter.image}/>
                <CardContent>
                <Typography variant='h5' color='textPrimary'>
                    {leter.title}
                </Typography>
                </CardContent>
                </Card>
            </div>
        </>
    )
}