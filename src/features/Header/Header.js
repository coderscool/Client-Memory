import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faHouseChimney, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN_NAME } from "../Extension/constant"
import useStyles from './pages/styles'
export default function Header() {
    const classes = useStyles()
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        navigate('/login')
    }
    const handleMessage = () => {
        navigate('/message')
    }
    return (
        <>
            <div className={classes.header}>
                    <span className={classes.logo}>Memory</span>
                    <FontAwesomeIcon className={classes.house} icon={faHouseChimney} size = '2x'/>
                    <FontAwesomeIcon onClick={handleMessage} className={classes.message} icon={faMessage} size = '2x'/>
                    <FontAwesomeIcon className={classes.bell} icon={faBell} size = '2x'/>
                    <span className={classes.logout}>Logout</span>
                    <FontAwesomeIcon onClick={handleLogOut} className={classes.bracket} icon={faRightFromBracket} size = '2x'/>
            </div>
        </>
    )
}