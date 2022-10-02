const Validate = (value) => {
    const error = {}
    if(value.title === '') {
        error.title = "ban chua co tieu de bai viet"
    }
    if(value.leter === '') {
        error.leter = "ban chua co noi dung bai viet"
    }
    if(value.image === '') {
        error.image = "ban chua co anh bai viet"
    }
    return error
}

export default Validate