import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import useStyles from './../pages/styles'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function PostFilter({params, onFilterChange}) {
    const navigate = useNavigate()
    const [filter, setFilter] = useState({
        title: ''
    })
    const classes = useStyles()
    const handleFilterClick = () => {
        console.log(filter)
        if(!onFilterChange) return;
        const newFilter = {
            ...params,
            _key: filter.title,
            _pages: 1
        };
        onFilterChange(newFilter);
    }

    const handleAdd = () => {
        navigate('/addedit')
    }
    return(
        <>
            <div className={classes.filter}>
                <input className={classes.search} type='text' placeholder="Search" value={filter.title} onChange={e => setFilter({title: e.target.value})} />
                <div className={classes.filterIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size = '2x' color="green" onClick={handleFilterClick}/>
                </div>
                <Button className={classes.filterButton} variant="contained" color="success" onClick={handleAdd}>
                    Them bai viet
                </Button>
            </div>
        </>
    )
}