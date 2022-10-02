import AutoSlice from "../Extension/AutoSlice";
import useStyles from "./pages/styles"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_TOKEN_NAME } from "../Extension/constant";
export default function Auth() {
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
    const navigate = useNavigate()
    const classes = useStyles()
    useEffect(() => {
        if(local !== null) {
            navigate('/home')
        } 
    }, [local])
    return(
        <>
            <div className={classes.auth}>
                <AutoSlice/>
                <div>
                    <div className={classes.memory} >Memory</div>
                    <div className={classes.title}>
                        <p>"Thời gian qua đi và để lại kí ức</p>
                        <p>Hãy để chúng tôi lưu giữ những kỉ niệm đẹp nhất của bạn"</p>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}