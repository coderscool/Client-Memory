import { makeStyles } from '@material-ui/core';
export default makeStyles(() => ({
  header: {
    backgroundColor: 'rgb(217, 249, 211)',
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    color: 'rgb(64, 245, 130)',
    fontSize: 30,
    marginLeft: 40,
    marginTop: 5
  },
  house: {
    color: 'rgb(132, 245, 130)',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  message: {
    color: 'rgb(132, 245, 130)',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 950
  },
  bell: {
    color: 'rgb(132, 245, 130)',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20
  },
  logout: {
    color: 'rgb(132, 245, 130)',
    fontSize: 20,
    marginLeft: 50,
    marginTop: 10
  },
  bracket: {
    color: 'rgb(132, 245, 130)',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  }
}));