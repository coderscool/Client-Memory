import Comments from "./UIShowPost/Comments";
import ImageShowPost from "./UIShowPost/ImageShowPost";
import LetterShowPost from "./UIShowPost/LetterShowPost";
import useStyles from "./pages/styles"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ShowPost() {
    const postId = parseInt(useParams().postId)
    const [leter, setLeter] = useState({})
    useEffect(() => {
        const featchComment = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/Posts/showpost?postId=${postId}`)
                setLeter(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        featchComment();
    }, [postId])
    const classes = useStyles()
    return(
        <>
            <div className={classes.container}>
                <ImageShowPost leter={leter}/>
                <div className={classes.box}>
                    <LetterShowPost leter={leter}/>
                    <Comments/>
                </div>
            </div>
        </>
    )
}