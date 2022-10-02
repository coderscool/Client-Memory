import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow : false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isShow = true
        },
        closeModal: (state) => {
            state.isShow = false
        }
    }

})

export const selectModal = (state) => state.modal.isShow

export const {showModal, closeModal} = modalSlice.actions

export default modalSlice.reducer