import { useState, useEffect } from "react"
import useStyles from "../pages/styles"
import ReplyComment from "./Comments/ReplyComment"
import SendComment from "./Comments/SendComment"
import axios from "axios"
import { useParams } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN_NAME } from "../../Extension/constant"
export default function Comments() {
    const classes = useStyles()
    const postId = parseInt(useParams().postId)
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)).userId
    const [comment, setComment] = useState([])
    const [user, setUser] = useState()

    useEffect(() => {
        const featchComment = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/comments/comment?postId=${postId}`)
                setComment(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        featchComment();
    }, [postId])

    useEffect(() => {
        const featchUser = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/users/filter?userId=${local}`)
                setUser(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        featchUser();
    }, [local])

    const handleReply = async (value) => {
        handleShowReply(value)
    }

    const handleShowReply = async (value) => {
        const response = await axios.get(`https://localhost:5001/api/comments/replycomment?commentId=${value.commentId}`)
        console.log(response.data)
        if(response.data !== null){
            const data = {...value, open: true, data: response.data.data}
            const find = comment.findIndex(t => t.commentId === value.commentId)
            if(find >= 0) {
            comment[find] = data
            const newTitle = [...comment];
            setComment(newTitle)
            } else {
            console.log(false)
            }
        }
    }
    const handleOnReplyComment = async (value) => {
        const input = {
            comment: value.comment,
            replyId: value.commentId,
            postId: postId,
            userId: local,
            name: user.name,
            image: user.image
        }
        try {
            await axios.post('https://localhost:5001/api/comments', input)
            const find = comment.findIndex(t => t.commentId === value.commentId)
            comment[find].data.push(input)
            const setNewComment = [...comment]
            setComment(setNewComment)
        } catch (error) {
            console.log(error)
            console.log(input)
        }
    }
    const handleOnSendComment = async (value) => {
        const input = {
            comment: value.comment,
            replyId: 0,
            postId: postId,
            userId: local,
            name: user.name,
            image: user.image
        }
        try {
            await axios.post('https://localhost:5001/api/comments', input)
            comment.push(input)
            const newComment = [...comment]
            setComment(newComment)
        } catch (error) {
            console.log(error)
            console.log(input)
        }
    }
    return(
        <>
            <div className={classes.comment}>
                <SendComment commentId={postId} onSendComment={handleOnSendComment}/>
                {
                    comment.map((com) => (
                        <div>
                            <div className={classes.boxComment}>
                                <img alt="" className={classes.imageComment} src={com.image}/>
                                <div className={classes.boxC}>
                                    <p className={classes.nameComment}>{com.name}</p>
                                    <p className={classes.textComment}>{com.comment}</p>
                                </div>
                            </div>
                            <div onClick={() => handleReply(com)} className={classes.feedback}>phan hoi</div>
                            {com.count === 0 ? null : 
                            <div>
                                <div onClick={() => handleShowReply(com)} className={classes.reply}>
                                    {com.open === false ? `${com.count} phan hoi` : null}
                                </div>
                                {com.open === true ? <ReplyComment com={com}/> : null}
                            </div>}
                            <div className={classes.sendReply}>
                                {com.open === true ? <SendComment commentId={com.commentId} onSendComment={handleOnReplyComment}/> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}