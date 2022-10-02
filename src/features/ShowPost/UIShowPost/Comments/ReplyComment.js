import useStyles from './../../pages/styles'
export default function ReplyComment({com}) {
    const classes = useStyles()
    return(
        <>
            {
                <div>{com.data.map((c) => (
                    <div className={classes.boxReplyComment}>
                                <img alt="" className={classes.imageComment} src={c.image}/>
                                <div className={classes.boxC}>
                                    <p className={classes.nameComment}>{c.name}</p>
                                    <p className={classes.textComment}>{c.comment}</p>
                                </div>
                            </div>
                ))}</div>
            }
        </>
    )
}