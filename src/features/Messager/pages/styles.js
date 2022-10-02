import { makeStyles } from "@material-ui/core";
import anhnenmessage from './../../../Assets/anhnenmessage.jpg'
export default makeStyles(() => ({
    mess: {
        backgroundImage: `url(${anhnenmessage})`,
        backgroundSize: 'cover'
    },
    title: {
        textAlign:  'center',
        fontSize: 35,
        color: 'rgb(133, 245, 133)'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    showf: {
        border: 2,
        borderColor: 'black',
        paddingLeft: 101,
        paddingRight: 101,
        backgroundColor: 'rgb(133, 245, 133)',
        paddingTop: 3,
        paddingBottom: 3,
        marginBottom: 20,
    },
    listf: {
        width: 500,
        marginTop:10
    },
    Avatar: {
        height: 40,
        width: 40
    },
    message: {
        height: 500,
        width: 850,
        overflowY: 'scroll',
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: 'white'
    },
    usermess: {
        textAlign: 'right',
        paddingRight: 5,
        fontSize: 18
    },
    showmess: {
        border: 2,
        borderColor: 'black',
        backgroundColor: 'rgb(133, 245, 133)',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
        color: 'white'
    },
    showuser: {
        fontSize: 'small',
        marginBottom: 3,
        marginRight: 5
    }
}));