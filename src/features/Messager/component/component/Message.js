import { useRef, useEffect } from "react";
import useStyles from './../../pages/styles'
export default function Message({messages}) {
    const classes = useStyles()
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);
    return(
        <>
            <div className={classes.message}>
                {/* {getm.map((m, index) =>
                    <div key={index} className='user-message'>
                        <div className='__MessCon_Mess'>{m.message}</div>
                        <div className='__MessCon_User'>{m.user}</div>
                    </div>
                )}  */}
                {messages.map((m, index) =>
                    <div key={index} className={classes.usermess}>
                        <span className={classes.showmess}>{m.message}</span>
                        <div className={classes.showuser}>{m.user}</div>
                    </div>
                )}
                <div ref={messagesEndRef} />   
            </div>
        </>
    )
}