import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import useStyles from './../../pages/styles'
export default function SendComment({onSendComment, commentId}) {
    const classes = useStyles()
    const [comment, setComment] = useState({
        commentId: commentId,
        comment: ''
    })
    const handleSendComment = () => {
        if(onSendComment) {
            onSendComment(comment)
        }
    }
    return(
        <>
            <div className={classes.sendContainer}>
                <img alt="" className={classes.imageAvatar} src="https://cdn.thanhtrungmobile.vn/thanhtrungmobile-vn/2022/01/hinh-nen-doremon-cute-4-1641715355.jpg"/>
                    <input type='text' 
                    className={classes.sendComment} 
                    placeholder='hay nhap binh luan cua ban'
                    onChange={(e) => setComment({ ...comment, comment: e.target.value })}
                    />
                <FontAwesomeIcon onClick={handleSendComment} className={classes.fontIcon} icon={faPaperPlane}/>
            </div>
        </>
    )
}