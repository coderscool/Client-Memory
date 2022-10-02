import { useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN_NAME } from "../../Extension/constant"
export default function Protected(props) {
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
    const navigate = useNavigate()
    const {Component} = props
    useEffect(() => {
        if(local === null) {
            navigate('/login')
        } 
    }, [])
    return(
        <>
            <div>
                <Component/>
            </div>
        </>
    )
}