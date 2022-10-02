import useStyles from './../pages/styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faCakeCandles, faHeart, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_NAME } from '../../Extension/constant'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import AddFriend from './AddFriend'
export default function InforProfileUser() {
    const classes = useStyles()
    const [res, setRes] = useState({})
    const [send, setSend] = useState('')
    const userId = parseInt(useParams().userId);
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)).userId

    useEffect(() => {
        const featchProfile = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/users/filter?userId=${userId}`)
                //console.log(response)
              await setRes(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        featchProfile();
    }, [userId])

    useEffect(() => {
        const featchProfile = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/friends/friend?userId=${userId}&_local=${local}`)
                //console.log(response.data)
                await setSend(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        featchProfile();
    }, [userId, local])


    const handleOnAddFriend = async (values) => {
        if(send.messageMF === 'Ket ban'){
            try {
                const response = await axios.post(`https://localhost:5001/api/friends?userId=${userId}&_local=${local}`)
                console.log(response)
                setSend({id: response.data.friendId, messageMF: 'Da gui ket ban'})
            } catch (error) {
                console.log(error)
            }
        }else if(send.messageMF === 'Da gui ket ban'){
            try {
                console.log(send)
                await axios.delete(`https://localhost:5001/api/friends/${send.id}`)
                setSend({...send, messageMF: 'Ket ban'})
            } catch (error) {
                console.log(error)
            }
        }else if(send.messageMF === 'Chap nhan ket ban') {
            try {
                await axios.put(`https://localhost:5001/api/friends/${send.id}`)
                setSend({...send, messageMF: 'Ban be'})
            } catch (error) {
                console.log(error)
            }
        }else if(send.messageMF === 'Ban be') {
            try {
                await axios.delete(`https://localhost:5001/api/friends/${send.id}`)
                setSend({...send, massageMF: 'Ket ban'})
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <>
            <div className={classes.infor}>
              <img src={res.image} alt="" className={classes.image}/>
              <span className={classes.name}>{res.name}</span>
              <div className={classes.file}>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faHouseChimney} size = '1.4x'/>
                    <span className={classes.text}>{res.home}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faBriefcase} size = '1x'/>
                    <span className={classes.text}>{res.word}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faHeart} size = '1x'/>
                    <span className={classes.text}>{res.relation}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faCakeCandles} size = '1x'/>
                    <span className={classes.text}>{res.date}</span>
                  </div>
                  <AddFriend
                    res = {res}
                    send = {send}
                    local = {local}
                    onAddFriend = {handleOnAddFriend}
                  />
              </div>
            </div>
        </>
    )
}