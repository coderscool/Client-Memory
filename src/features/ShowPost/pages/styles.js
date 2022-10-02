import { makeStyles } from "@material-ui/core";
import Village from './../../../Assets/Village.jpg'
export default makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${Village})`,
        backgroundSize: 'cover'
    },
    imageSP: {
        width: 500,
        height: 620,
        backgroundColor: 'aqua',
        border: 3,
        marginLeft: 50,
        marginTop:50,
        marginBottom: 40
    },
    comment: {
        width: 600,
        height: 350,
        marginLeft: 200,
        marginTop:20,
        borderStyle: 'solid',
        borderColor: 'black',
        overflowY: 'scroll'
    },
    letter: {
        width: 600,
        height: 250,
        marginLeft: 200,
        marginTop:50,
        overflowY: 'scroll',
        margin: 0,
        padding: 0,
        listStyle: "none",  
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        },
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    image: {
        width:450,
        height: 450,
        borderStyle: 'solid',
        borderColor: 'black',
        marginLeft: 24
    },
    Avatar: {
        height: 40,
        width: 40
    },
    text: {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 8,
        marginRight: 8,
        fontSize: 17
    },
    imageAvatar: {
        height:35,
        width:35,
        borderRadius: 50,
    },
    sendComment: {
        marginLeft: 10,
        width: 450,
        borderRadius: 10
    },
    sendContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft:10,
    },
    imageComment: {
        width: 35, 
        height: 35,
        borderRadius: 50,
        borderColor: 'black',
        borderStyle: 'solid',
        border: 1
    },
    boxComment: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },
    boxC: {
        backgroundColor: 'white',
        borderRadius: 7,
        marginLeft: 5
    },
    nameComment: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 6,
        marginRight: 6,
        fontWeight: 'bold',
        fontSize: 12,
    },
    textComment: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 6,
        marginRight: 6
    },
    feedback: {
        fontSize: 12,
        color: 'rgba(211, 204, 194, 0.97)',
        marginLeft: 50,
        cursor: 'pointer'
    },
    reply: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 0,
        marginLeft: 50,
        cursor: 'pointer'
    },
    sendReply: {
        marginLeft: 40
    },
    fontIcon: {
        marginLeft: 10,
        fontSize: 25,
        marginTop: 5,
        cursor: 'pointer',
        '&:hover': {
            color: "blue",
        }
    },
    boxReplyComment: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 50
    }
}));