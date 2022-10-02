import Message from "./component/Message"
import SendMessage from "./component/SendMessage"
export default function Chat({messages, sendMessage}) {
    return(
        <>
            <div>Chats</div>
            <div>
                <Message messages={messages}/>
                <SendMessage sendMessage={sendMessage}/>
            </div>
        </>
    )
}