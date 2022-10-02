import { makeStyles } from "@material-ui/core";
import GreenWallpaper from "./../../../Assets/GreenWallpaper.jpg"
export default makeStyles(() => ({
    infor: {
        width: 380,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 120,
        height: 500
    },
    file: {
        width: 200,
        height: 220,
        marginLeft: 80
    },
    name: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 28,
    },
    text: {
        marginLeft: 5
    },
    edit: {
        marginTop: 5
    },
    icon: {
        marginTop: 10
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: '50%',
        marginTop: 20,
        marginLeft: 70
    },
    home: {
        display: 'flex',
        flexDirection: 'row',
        backgroundImage: `url(${GreenWallpaper})`,
        backgroundSize: 'cover'
    },
    filter: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    search: {
        width: 280,
        borderLine: 'solid',
        borderColor: 'green',
        height: 30,
        marginTop: 2,
        marginLeft: 130,
        marginBottom: 15
    },
    filterIcon: {
        marginLeft: 10,
        marginTop: 5,
        marginRight: 300
    },
    filterButton: {
    },
    media: {
        height: 120,
    },
    Avatar: {
        height: 40,
        width: 40
    },
    border: {
        height: 558,
        width: 900
    },
    box: {
        display: 'flex',
        justifyContent: 'center'
    }
}));