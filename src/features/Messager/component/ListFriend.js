import {
    Avatar,
    Card,
    CardHeader,
  } from '@material-ui/core';
import useStyles from './../pages/styles'
export default function ListFriend({list, joinRoom, closeConnet}) {
    const classes = useStyles()
    const handleJoinRoom = async (list) => {
        console.log(list)
        await closeConnet()
        await joinRoom(list.user, list.room)
    }
    return(
        <>
            <Card>
            <CardHeader onClick={() => handleJoinRoom(list)}
                avatar={<Avatar><img alt="" src={list.image} className={classes.Avatar}/></Avatar>}
                title={list.user}
            />
            </Card>
        </>
    )
}