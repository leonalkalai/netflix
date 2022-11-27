import React from 'react';
// import { Link } from "react-router-dom";
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube-nocookie.com/embed/`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const[cardPage, changeCardPage] = useState(false);

  const viewCardPage = ()=>{
      console.log('test');
  }

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      if(!response.data.videos.results[0]) {return}
      if ((response.data.videos.results.length > 0) && (response.data.videos.results[0].key.length ==11) && (response.data.videos.results[0].key !== 'undefined') && (response.data.videos.results[0].key !== null)) {
        setVideo(response.data.videos.results[0].key);
        //console.log(response.status);
      }
       
    } catch (err) {
      if (err.response && err.response.status === 404) {console.clear();}
      // if (err.response.status === 404) {
      //     console.log("error");
      // }
    
    }
  };

  if(props.id=='') console.log('test')
  //console.log(props.id + " " +props.title);
  
  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div onClick={viewCardPage} id={props.id} className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHovered ? (
        <img className='card_poster' src={imageUrl} alt='poster' />
      ) : (
        <iframe
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          width='100%'
          height='100%'
          frameBorder='0'
          src={`${youtubeUrl}${video}`}
        ></iframe>
      )}
      <a href={`/movie/${props.id}`} target="_blank" rel="noopener noreferrer">
        <h3>{!props.title?props.name:props.title}</h3>
      </a>
    </div>
  );
}