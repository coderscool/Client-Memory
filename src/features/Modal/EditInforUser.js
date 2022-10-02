import useStyles from './pages/styles'
import { useDispatch, useSelector } from "react-redux"
import {selectModal, closeModal} from './../Reducers/modalSlice'
import { useCallback, useState } from 'react';
import { Modal, TextField, Button } from "@material-ui/core"
import FileBase64 from 'react-file-base64'

export default function EditInforUser() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const isShow = useSelector(selectModal)
    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    
    const handleDelete = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch]);

    const body = (
        <div className={classes.paper}>
        <h3 className={classes.delete} onClick={handleDelete}>X</h3>
        <h2 className={classes.title}>Edit profile user</h2>
        <div className={classes.flex}>
            <div>
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
            label="Life"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Study"
            type="search"
            variant="standard"
            />
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Word"
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
            <TextField 
            style={{marginTop: 20, width: 200, marginLeft: 135}}
            id="standard-search"
            label="Date"
            type="search"
            variant="standard"
            />
            </div>
            <div>
                <div className={classes.boximage}>
                    <img src={image} alt="" className={classes.imageupload}/>
                </div>
                <div className={classes.file}>
                    <FileBase64
                    accept='image/*'
                    multiple={false}
                    type='file'
                    //value={data.image}
                    //onDone={({ base64 }) => setData({ ...data, image: base64 })}
                    />
                </div>
                <Button className={classes.button} variant="contained" color="primary">Cập nhật hồ sơ</Button>
            </div>
        </div>
        </div>
    )
    return(
        <>
            <Modal open={isShow}>
                {body}
            </Modal>
        </>
    )
}