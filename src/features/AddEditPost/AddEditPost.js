import FileBase64 from "react-file-base64";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { LOCAL_STORAGE_TOKEN_NAME } from "../Extension/constant";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useStyles from "./pages/styles";
import Validate from "../Extension/Validation";
export default function AddEditPost() {
    const classes = useStyles();
    const local = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)
    ).userId;
    const navigate = useNavigate();
    const postId = useParams().postId;
    const [formError, setFormError] = useState({});
    const [data, setData] = useState({
      userId: local,
      title: "",
      leter: "",
      image: "",
    });
    
  
    useEffect(() => {
      const featchAPost = async () => {
        if (postId === undefined) {
          setData({ userId: local, title: "", leter: "", image: "" });
        } else {
          try {
            const response = await axios.get(
              `https://localhost:5001/api/posts/id?postId=${postId}`
            );
            console.log(response.data.data);
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
        }
      };
      featchAPost();
    }, [local, postId]);
  
    const onhandleSubmit = async (event) => {
      event.preventDefault();
      if (postId === undefined) {
        try {
          if (data.title === "" || data.leter === "" || data.image === "") {
            setFormError(Validate(data));
            console.log(formError);
          } else {
            toast.success('Thêm bài viết thành công')
            navigate('/home')
            await axios.post('https://localhost:5001/api/Posts', data)
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await axios.put(
            `https://localhost:5001/api/Posts/${postId}`,
            data
          );
        } catch (error) {
          console.log(error);
        }
      }
    };
    return (
      <>
        <div className={classes.form}>
          <div className={classes.display}>
            <div className={classes.p1}>Cây bàng ơi tỏa bóng tháng năm dài</div>
            <div className={classes.p2}>
              Dưới vòm lá tuổi thơ đã qua bao mơ mộng đẹp...
            </div>
            <TextField
              className={classes.title}
              required
              label="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <p1 className={classes.e1}>{formError.title}</p1>
            <textarea
              className={classes.leter}
              required
              type="text"
              value={data.leter}
              onChange={(e) => setData({ ...data, leter: e.target.value })}
            />
            <p1 className={classes.e1}>{formError.leter}</p1>
          </div>
  
          <div className={classes.box}>
            <div className={classes.boximage}>
              <img
                src={data.image}
                alt=""
                className={classes.imageupload}
              />
            </div>
            <FileBase64
              className={classes.choice}
              accept="image/*"
              multiple={false}
              type="file"
              value={data.image}
              onDone={({ base64 }) => setData({ ...data, image: base64 })}
            />
            <div className={classes.e2}>{formError.image}</div>
            <div className={classes.Button}>
              <Button
                className={classes.submit}
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                onClick={onhandleSubmit}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      </>
    );
}