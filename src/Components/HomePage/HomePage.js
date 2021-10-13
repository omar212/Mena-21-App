import React from 'react'
import Button from '@material-ui/core/Button'
import HeartIcon from '@material-ui/icons/Favorite'
import { Link } from "react-router-dom";
import './index.scss'

function HomePage() {
    return (
        <div className="princess-container">
            <Link style={{textDecoration: "none"}} to={process.env.PUBLIC_URL + "/pretty"}>
                <Button 
                    startIcon={<HeartIcon />}
                    endIcon={<HeartIcon />}
                    size="large" 
                    variant="contained" 
                    color="secondary"
                    style={{ backgroundColor: "#BF40BF"}}
                    >
                        Click Me Princess
                </Button>
            </Link>

        </div>

    )
}

export default HomePage
