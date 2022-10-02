import { makeStyles } from '@material-ui/core';
import hinhnen from './../../../Assets/hinhnen.jpeg'
export default makeStyles(() => ({
  auth: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${hinhnen})`,
    backgroundSize: 'cover',
  },
  memory: {
    fontSize: 80,
    marginLeft: 320,
    color:'aquamarine',
    marginTop: 50
  },
  title: {
    color:'rgb(64, 243, 61)',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 220
  },
  login: {
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 50
  },
  loginButton: {
    marginTop: 20,
    width: 100,
    marginLeft: 350,
    color:'rgb(64, 243, 61)'
  },
  loginButton1: {
    marginTop: 18,
    marginLeft: 15,
    color:'rgb(64, 243, 61)'
  },
  loginLink: {
    display: 'flex',
    flexDirection: 'row'
  },
  loginTitle: {
    marginLeft: 310,
    color: 'aqua'
  },
  register: {
    display: 'flex',
    flexDirection: 'row'
  },
  registerRow: {
    display: 'flex',
    flexDirection: 'column'
  },
  registerFile: {
    marginTop: 44,
    marginLeft: 135
  },
  registerButton: {
    marginLeft: 365,
    marginTop: 20,
    width: 80,
    color: 'rgb(133, 245, 133)'
  },
  registerLink: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  }
}));