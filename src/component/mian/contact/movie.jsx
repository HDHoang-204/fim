import './movie.scss'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import YouTube from 'react-youtube';
const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 1200, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};


function Movie({ title }) {
    const [movie, setMovie] = useState([])
    const [open, setOpen] = useState(false);
    const [trailer, setTrailer] = useState("")


    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `
                }
            };
            const url = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
            try {
                const res = await fetch(url, options);
                const data = await res.json()

                setMovie(data.results);

                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }

        fetchMovie()
    }, [])


    const handleTrailer = async (id) => {
        setTrailer('')
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=vi`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `
                }
            };

            const movie = await fetch(url, options)
            const datas = await movie.json()
            console.log(datas);
            setTrailer(datas.results[0].key)
            setOpen(true);
        } catch (error) {
            setOpen(false)
            console.log(error);
        }
    }
    return (
        <div className='movie'>
            <h2>{title}</h2>

            <Carousel responsive={responsive} className='film' >

                {movie.map((item) => (
                    <div className='mainn-movie' key={item.id} onClick={() => handleTrailer(item.id)}>

                        <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt="" />

                        <div className="text-movie">
                            <p>{item.title || item.original_title}</p>
                        </div>
                    </div>
                ))}

            </Carousel>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}><YouTube videoId={trailer} opts={opts} /></Box>


            </Modal>
        </div >
    )

}

export default Movie