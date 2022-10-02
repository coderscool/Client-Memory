import { useState } from "react"
import { Button } from "@material-ui/core"

export default function SendMessage({sendMessage}) {
    const [message, setMessage] = useState('')
    const handleSendMessage = () => {
        if(sendMessage)
        sendMessage(message)
        setMessage('')
    }
    return(
        <>
            <div>
                <input type='text' placeholder="nhap tin nhan" value={message} 
                onChange={(e) => setMessage(e.target.value)}/>
                <Button onClick={handleSendMessage}>Gui</Button>
            </div>  
        </>
    )
}