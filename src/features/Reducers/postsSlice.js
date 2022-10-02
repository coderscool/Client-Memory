import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name:'posts',
    initialState: {
        list: [],
        filter: {
            _pages: 1,
            _limit: 4,
        },
        pagination: {
            _pages: 1,
            _limit: 4,
            _totalRows: 4,
        },
    },

    reducers: {
        postsFetch: (state, action) => {
            state.list = action.payload.data;
            state.pagination._pages = action.payload._pages;
            state.pagination._limit = action.payload._limit;
            state.pagination._totalRows = action.payload.totalRecord
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    }
})

export const selectPost = state => state.posts.list
export const selectPagination = state => state.posts.pagination
export const selectFilter = state => state.posts.filter

export const {postsFetch, setFilter} = postsSlice.actions 

export default postsSlice.reducer