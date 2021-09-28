import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState (false);

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner_info'>
                <h1> banner</h1>
                <Button
                variant='outlined'>explore
                </Button>
            </div>
        </div>
    )
}

export default Banner
