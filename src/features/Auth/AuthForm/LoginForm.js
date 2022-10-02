import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./../pages/styles"
import { useState } from "react";
import axios from "axios"
import { LOCAL_STORAGE_TOKEN_NAME } from "../../Extension/constant";
import { toast } from "react-toastify";
export default function LoginForm() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        Username: '',
        Password: '',
    })
    const handelLogin = async () => {
        try {
            const response = await axios.get(`https://localhost:5001/api/users/login?username=${login.Username}&password=${login.Password}`)
            console.log(response)
            if (response.data.success === true) {
                await localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, JSON.stringify(response.data))
                navigate('/home')
                toast.success('Đăng nhập thành công')
                setLogin({
                    Username: '',
                    Password: ''
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={classes.login}>
            <div>
                <div className={classes.loginForm}>
                    <TextField 
                    style={{marginTop: 20, width: 350, marginLeft: 230}}
                    id="standard-search"
                    label="UserName"
                    type="search"
                    variant="standard"
                    name="Username"
                    onChange={(e) => setLogin({ ...login, Username: e.target.value })}
                    />
                
                    <TextField
                    style={{marginTop: 20, width: 350, marginLeft: 230, borderBlockColor: 'aqua'}}
                    id="standard-search"
                    label="PassWord"
                    type="password"
                    variant="standard"
                    name="Password"
                    onChange={(e) => setLogin({ ...login, Password: e.target.value })}
                    />
                    <button className={classes.loginButton} onClick={handelLogin}>Đăng nhập</button>
                </div>
                <div className={classes.loginLink}>
                    <p className={classes.loginTitle}>Don't have an account?</p>
                    <Link to='/register'>
                        <button className={classes.loginButton1}>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}