import { Box, Grid } from "@material-ui/core";
import Header from "../Header/Header";
import InforUser from "./component/InforUser";
import ListPost from "./component/ListPost";
import PostFilter from "./component/PostFilter";
import { Pagination } from '@material-ui/lab';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useCallback } from "react";
import {postsFetch, selectFilter, selectPagination, selectPost, setFilter} from "../Reducers/postsSlice"
import axios from 'axios'
import useStyles from './pages/styles'
import { showModal } from "../Reducers/modalSlice";

export default function HomeBody() {
    const dispatch = useDispatch()
    const classes = useStyles()
    const pagination = useSelector(selectPagination)
    const params = useSelector(selectFilter)
    useEffect(() => {
        const featchPost = async () => {
            try {
                const response = await axios.get(`https://localhost:5001/api/posts/paging?_pages=${params._pages}&_limit=${params._limit}`)
                console.log(response)
                dispatch(postsFetch(response.data))
            } catch (error) {
                console.log(error)
            }
        }
        featchPost();
    }, [params, dispatch])

    const handleFilterChange  = async (newFilter) => {
        try {
            const response = await axios.get(`https://localhost:5001/api/posts/filter?_pages=${newFilter._pages}&_limit=${newFilter._limit}&_key=${newFilter._key}`)
            console.log(newFilter)
            dispatch(postsFetch(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    const handlePageChange = (e, page) => {
        console.log('NewPages', page)
        dispatch(setFilter({
            ...params,
            _pages: page
        }))
    }
    const onHandleModal = useCallback(() => {
        dispatch(showModal());
    }, [dispatch]);
    const posts = useSelector(selectPost)
    return(
        <>
            <Header/>
            <div className={classes.home}>
                <InforUser onHandleModal={onHandleModal}/>
                <div>
                    <PostFilter
                    params = {params}
                    onFilterChange = {handleFilterChange}/>
                    <div className={classes.border}>
                    <Grid container spacing={1} alignItems='stretch'>
                        {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <ListPost 
                            post={post}
                            />
                        </Grid>
                        ))}
                    </Grid>
                    </div>
                    <Box my={2} className={classes.box}>
                        <Pagination
                        color="primary"
                        count={Math.ceil(pagination._totalRows / pagination._limit)}
                        page={pagination._pages}
                        onChange={handlePageChange}
                        />
                    </Box>
                </div>
            </div>
        </>
    )
}