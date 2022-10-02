import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    paper: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    boximage: {
      //margin: ,
      width: 300,
      height: 300,
      border: 3,
      borderRadius: 5,
      marginTop: 20,
    },
    imageupload: {
      margin: 'auto',
      width: 300,
	    height: 300,
      color: 'white',
      borderRadius: 10,
      backgroundColor: 'black',
      textAlign: 'center',
      cursor: 'pointer',
    },
    flex: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      textAlign: 'center',
    },
    file: {
      marginTop: 20,
    },
    button: {
      marginTop: 15,
      marginLeft:70,
    },
    delete: {
      marginLeft: 750,
      cursor: 'pointer',
      color:'red',
    },
    p1: {
      color: 'green'
    }
  }));