import useStyles from "../pages/styles"

export default function LetterShowPost({leter}) {
    const classes = useStyles()
    return(
        <>
            <div className={classes.letter}>
                <div className={classes.text}>
                    {leter.leter}
                </div>
            </div>
        </>
    )
}