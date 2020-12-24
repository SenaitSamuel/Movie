import React from 'react'
import context from '../../context'
import './Nav.css'

function Nav({setSelectedOption}) {
    return (
        <div className='nav'>
            <h2 onClick= {()=> setSelectedOption(context.fetchTrending)}> Trending </h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchTopRated)} >Top Rated</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchActionMovies)} >Action</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchComedyMovies)} >Comedy</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchHorrorMovies)} >Horror</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchRomanceMovies)} >Romance</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchMystery)} >Mystery</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchSciFi)} >Sci-fi</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchWestern)} >Western</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchAnimation)} >Animation</h2>
            <h2 onClick= {()=> setSelectedOption(context.fetchTv)}>Movie</h2>
        </div>
    )
}

export default Nav
