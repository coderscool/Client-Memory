import { makeStyles } from '@material-ui/core';
import addEdit from './../../../Assets/addEdit.jpg'
import avater from './../../../Assets/avater.webp'

export default makeStyles(() => ({
    display: {
        display: 'flex',
        flexDirection: 'column',
    },
    leter: {
        width: 480,
        height: 480,
        overflowY: 'scroll',
        wordWrap: 'break-word',
        marginLeft: 200,
        fontSize: 18
    },
    title: {
        width: 480,
        marginLeft: 200,
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${addEdit})`,
        backgroundSize: 'cover'
    },
    boximage: {
        width: 500,
        height: 500,
        border: 3,
        borderRadius: 5,
        marginTop: 92,
        marginBottom: 5
    },
    imageupload: {
        margin: 'auto',
        width: 500,
        height: 500,
        color: 'white',
        borderRadius: 10,
        backgroundImage: `url(${avater})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        cursor: 'pointer',
    },
    p1: {
        color: 'rgb(62, 229, 229)',
        marginTop: 30,
        marginLeft: 240,
        fontSize: 22
    },
    p2: {
        color: 'rgb(62, 229, 229)',
        marginTop: 10,
        marginLeft: 210,
        fontSize: 22
    },
    box: {
        marginLeft: 200
    },
    submit: {
        marginTop: 10
    },
    choice: {
        marginTop: 5
    },
    e1: {
        color: 'red',
        marginBottom: 20,
        marginLeft: 200
    },
    e2: {
        color: 'red'
    }
}));