import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
import FileBase64 from 'react-file-base64';
import useStyles from "./../pages/styles"

export default function RegisterForm() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.register}>
            <div className={classes.registerRow}>
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="UserName"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="PassWord"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Name"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Home"
            type="search"
            variant="standard"
            />
            </div>
            <div className={classes.registerRow}>
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Work"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Date"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Relation"
            type="search"
            variant="standard"
            />
            <div className={classes.registerFile}>
            <FileBase64
            accept='image/*'
            multiple={false}
            type='file'
            />
            </div>
      
            </div>
        </div>
        <button className={classes.registerButton}>Dang ki</button>
            <div className={classes.registerLink}>
                <p className={classes.loginTitle}>Already have an account?</p>
                <Link to='/login'>
                    <button className={classes.loginButton1}>Login</button>
                </Link>
            </div>
        </div>
    )
}