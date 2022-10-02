import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faCakeCandles, faHeart, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@material-ui/core"
import useStyles from "./../pages/styles"
import { LOCAL_STORAGE_TOKEN_NAME } from "../../Extension/constant"
export default function InforUser({onHandleModal}) {
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))

    const handleShowModal = () => {
      if(onHandleModal) {
        onHandleModal()
      }
    }
    return(
        <>
            <div className={classes.infor}>
              <img src={user.image} alt="" className={classes.image}/>
              <span className={classes.name}>{user.name}</span>
              <div className={classes.file}>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faHouseChimney} size = '1.4x'/>
                    <span className={classes.text}>{user.home}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faBriefcase} size = '1x'/>
                    <span className={classes.text}>{user.word}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faHeart} size = '1x'/>
                    <span className={classes.text}>{user.relation}</span>
                  </div>
                  <div className={classes.icon}>
                    <FontAwesomeIcon icon={faCakeCandles} size = '1x'/>
                    <span className={classes.text}>{user.date}</span>
                  </div>
                  <Button className={classes.edit} onClick={handleShowModal} variant="contained" color="primary">Chỉnh sửa thông tin</Button>
              </div>
            </div>
        </>
    )
}