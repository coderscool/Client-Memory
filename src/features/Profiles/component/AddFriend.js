import { Button } from "@mui/material"
export default function AddFriend({res, local, send, onAddFriend}) {
    const handleAddFriend = () => {
        if(onAddFriend){
            onAddFriend()
        }
    }
    return(
        <>
            {res.userId === local ? 
            <Button  variant="contained" color="primary">chỉnh sửa thông tin</Button> :
            <Button  variant="contained" color="primary" onClick={() => handleAddFriend()}>{send.messageMF}</Button>}
        </>
    )
}