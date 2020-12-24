import React from 'react';
import  './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        //BEM class naming
        <div className='header'>
            <div className='header__icons'>
                <div className='header__icon header__icon--active' >
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className='header__icon'>
                     <LiveTvIcon/>
                    <p>Verified</p>
                </div>
                <div className='header__icon'>
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className='header__icon'>
                    <VideoLibraryIcon/>
                    <p>collections</p>
                </div>
                <div className='header__icon'>
                    <SearchIcon/>
                    <p>search</p>
                </div>
                <div className='header__icon'>
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>
             
                
               
                
                
                
                
            </div>
            <img src="https://i1.logomesh.com/270-_-144-_-70-_-cdn.clipart.email/e4ba059793be2507921ae6af3cee6d85_branding-hulu-press_1280-680.png" alt=" logo"/>
        </div>
    )
}

export default Header
