import { Grid } from "@material-ui/core"
import { LOCAL_STORAGE_TOKEN_NAME } from "../Extension/constant"
import { useState, useEffect } from "react"
import useStyles from './pages/styles'
import {useDispatch} from 'react-redux'
import axios from "axios"
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import NotFound from "./component/component/NotFound"
import Chat from "./component/Chat"
import ListFriend from "./component/ListFriend"

export default function Messager() {
    const myId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)).userId
    const dispatch = useDispatch()
    const [lists, setList] = useState([])
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const classes = useStyles()
    useEffect(() => {
        const featchFriend = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/friends/myfriend?myId=${myId}`)
                console.log(response.data.data)
                setList(response.data.data)
                //dispatch(friendFeatch(response.data))
            } catch (error) {
                console.log(error)
            }
        }
        featchFriend();
    }, [dispatch, myId])

    const closeConnet = async () => {
      try {
        await connection.stop();
      } catch (e) {
        console.log(e);
      }
    }

    const joinRoom = async (user, room) => {
        try {
          const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:44382/chat")
            .configureLogging(LogLevel.Information)
            .build();
          
          await connection.stop();
    
          connection.on("ReceiveMessage", (user, message) => {
            //console.log(messages)
            if(message === undefined){
              setMessages(message => [...message])
            }else {
              setMessages(messages => [...messages, { user, message }]);
            }
           
          });
    
          connection.onclose(e => {
            setConnection();
            setMessages([]);
          });
    
          await connection.start();
          await connection.invoke("JoinRoom", { user, room });
          setConnection(connection);
        } catch (e) {
          console.log(e);
        }
      }
    //const myfriend = useSelector(selectFriend)

    const sendMessage = async (message) => {
      try {
        await connection.invoke("SendMessage", message);
      } catch (e) {
        console.log(e);
      }
    }
    return(
        <>
            <div className={classes.mess}>
            <h2 className={classes.title}>Messeger</h2>
            <div className={classes.container}>
                    <div>
                    <span className={classes.showf}>Danh sach ban be</span>
                    <Grid  spacing={3} className={classes.listf}>
                        {lists.map((list) => (
                        <Grid key={list._id} item xs={8} sm={8}>
                            <ListFriend list={list} joinRoom={joinRoom} closeConnet={closeConnet} />
                        </Grid>
                        ))} 
                    </Grid>
                    </div>
                    {!connection
                    ? <div><NotFound/></div>
                    : <Chat sendMessage={sendMessage} messages={messages}/>}
            </div>
            </div>
        </>
    )
}