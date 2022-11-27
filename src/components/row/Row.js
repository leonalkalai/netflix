import { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import Card from '../card/Card';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



export default function Row(props) {
  const [movies, setMovies] = useState([]);

  const [movieslength, setmoviesLength] = useState('');

  
  const fetchMovies = async () => {
    
    const response = await axios.get(props.url);
    setMovies(response.data.results);
    const m = response.data.results.length;
    setmoviesLength(m);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        }
       },
       {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        }
       }
    ]
  };
  

  return (

    <div className='row_wrapper'>
    <h3 className='row_title'>{props.title} {parseInt((movieslength))} movies in category</h3>
      <Slider style={{
          display: 'flex',
          alignItems: 'center',
          height: '230px',
          color: '#fff',
          overflow: 'hidden'
        }}
    {...settings}>
    {/* <div className='row_card'> */}
   
     {movies.map((el,index) => {
        //console.log(el)
        return <Card key={index} name={el.name} title={el.title} poster={el.backdrop_path} id={el.id}/>;
      })}
      
    {/* </div> */}
   </Slider>
    </div>
    
  );
 
}

