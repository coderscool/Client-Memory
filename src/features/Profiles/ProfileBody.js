import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import InforProfileUser from './component/InforProfileUser'
import Header from './../Header/Header'
import ListPostProfile from './component/ListPostProfile';
import { Grid, Box } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
import useStyles from './pages/styles'
import { LOCAL_STORAGE_TOKEN_NAME } from '../Extension/constant';
import {toast} from 'react-toastify'
export default function ProfileBody() {
    const classes = useStyles()
    const userId = useParams().userId;
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)).userId
    const [posts, setPosts] = useState([])
    const [params, setParams] = useState({
        _pages: 1,
        _limit: 4
    });

    const [_limit, setLimit] = useState(4);
    const [_pages, setPages] = useState();
    const [totalRecord, setTotal] = useState(4);

    useEffect(() => {
        const featchProfile = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/posts/profile?userId=${userId}&_pages=${params._pages}&_limit=${params._limit}`)
                setPosts(response.data.data)
                setLimit(response.data._limit)
                setPages(response.data._pages)
                setTotal(response.data.totalRecord)
            } catch (error) {
                console.log(error)
            }
        }
        featchProfile();
    }, [params, userId])

    const handleOnDelete = async (post) => {
        if(post.userId === local) {
            try {
                await axios.delete(`https://localhost:5001/api/posts/${post.postId}`)
                const remove = posts.filter(x => x.postId !== post.postId)
                setPosts(remove)
                toast.success('Bạn đã xóa bài viết này')
            } catch (error) {
                console.log(error)
            }
        }else {
            toast.error('Bạn không thể xóa bài viết này')
        }
    }

    const handlePageChange = (e, page) => {
        console.log(page)
        setParams({
            ...params,
            _pages: page
        })
    }
    return(
        <>
            <Header/>
            <div className={classes.home}>
                <InforProfileUser/>
                <div>
                    <div className={classes.border}>
                    <Grid container spacing={1} alignItems='stretch'>
                        {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <ListPostProfile 
                            post={post}
                            handleOnDelete={handleOnDelete}
                            />
                        </Grid>
                        ))}
                    </Grid>
                    </div>
                    <Box my={2} className={classes.box}>
                        <Pagination
                        color="primary"
                        count={Math.ceil(totalRecord / _limit)}
                        page={_pages}
                        onChange={handlePageChange}
                        />
                    </Box>
                </div>
            </div>
        </>
    )
}