/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { forwardRef } from 'react';
import './videoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const base_url = "http://image.tmdb.org/t/p/original/";

const  videoCard = forwardRef( ({ movie }, ref) => {
    return (
        <div ref = {ref} className='videoCard'>
           <img src= {`${base_url}${movie.backdrop_path || movie.poster_path}`}
           alt= 'image' />
           <TextTruncate
           line={1}
           element='p'
           truncateText='...'
           text= {movie.overview}
           />
           <h2> {movie.title || movie.original_title}  </h2>
           <p className="videoCard__stats"> 
            {movie.release_date || movie.first_air_date} *
            <ThumbUpIcon/> {" "}
            {movie.vote_count}
            </p>
        </div>
    )
})

export default videoCard
